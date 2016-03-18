import appRoutes from 'server/api/app';
import adminRoutes from 'server/api/admin';

export const publicPaths = {
    '/': true,
    '/why-best-act-prep': true,
    '/welcome': true,
    '/admin': true
};

export default function routes(app) {
    app.use('/api/app', appRoutes);
    app.use('/api/admin', adminRoutes);
};
