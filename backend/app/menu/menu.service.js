require('./menu.model')
const Menu = require('mongoose').model('Menu');

exports.getMenu = async (type) => {
    try {
        // throw new Error();
        const menu = await Menu.find({});
        console.log('menu', menu)
        return menu;
    } catch(error) {
        error.message = 'Problem getting menu items.';
        error.status = '500';
        throw error;
    }
}