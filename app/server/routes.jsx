import productRoutes from 'server/products';

export default function routes(app) {
    // app.use('/app', appRoutes);
    app.use('/products', productRoutes);
};
