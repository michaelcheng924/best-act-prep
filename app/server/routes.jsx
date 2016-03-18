import apiRoutes from 'server/api';

export const publicPaths = {
    '/': true,
    '/why-best-act-prep': true
};

export default function routes(app) {
    app.use('/api', apiRoutes);
};
