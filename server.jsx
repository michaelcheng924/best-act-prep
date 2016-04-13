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
import moduleMappings from 'registries/module-mappings';
import { setActiveTab, setUser } from 'actions/app';
import { setAdminUser } from 'actions/admin';

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
    }
}));

serverRoutes(app);

app.use((req, res) => {
    const { user, adminUser } = req.session;
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

        if (moduleMappings[req.url.slice(1)]) {
            req.url = '/course';
        }
        store.dispatch(setActiveTab(req.url));

        if (adminUser) {
            store.dispatch(setAdminUser(adminUser));
        }
        if (user) {
            store.dispatch(setUser(user));
        }

        const initialState = store.getState();

        const componentHTML = renderToString(InitialComponent);

        const HTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js"></script>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/style.css" />
                    <link rel="icon" type="image/png" href="http://i288.photobucket.com/albums/ll175/michaelcheng429/act-logo-favicon-size_zpskhedtdjn.png" />

                    <title>Best ACT Prep</title>

                    <script>
                        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
                    </script>

                    <script>
                      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                      ga('create', 'UA-76355515-1', 'auto');
                      ga('send', 'pageview');
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
