import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from 'routes';
import serverRoutes from 'server/routes';
import { makeStore } from 'helpers';
import { Provider } from 'react-redux';
import { setActiveTab } from 'actions/app';

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'blah blah',
    resave: false,
    saveUninitialized: false,
    cookie: {
        // Recommended for HTTPS
        // secure: true,
        maxAge: 3600000
    }
}));

serverRoutes(app);

app.use((req, res) => {
    const location = createLocation(req.url);
    const store = makeStore();
    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.log(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) {
            return res.status(404).end('Not found.');
        }

        const InitialComponent = (
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );

        store.dispatch(setActiveTab(req.url));
        const initialState = store.getState();

        const componentHTML = renderToString(InitialComponent);

        const HTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <link rel="icon" type="image/png" href="http://i288.photobucket.com/albums/ll175/michaelcheng429/act-logo-favicon-size_zpskhedtdjn.png" />

                    <title>Best ACT Prep</title>

                    <script>
                        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
                    </script>
                </head>
                <body>
                    <div id="app">${componentHTML}</div>
                    <script src="https://checkout.stripe.com/checkout.js"></script>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `;

        res.end(HTML);
    });
});

export default app;
