import apiRoutes from 'server/api';

export default function routes(app) {
    app.use('/api', apiRoutes);
};
