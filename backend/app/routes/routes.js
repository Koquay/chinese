const IndexRoutes = require('../index/index.routes');
const MenuRoutes = require('../menu/menu.routes');

module.exports = (app) => {
    app.use('/api/menu', MenuRoutes);
    app.use('/*', IndexRoutes);
}