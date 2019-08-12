require('./menu.model')
const Menu = require('mongoose').model('Menu');

exports.getMenu = async (type) => {
    try {
        const menu = await Menu.find({});
        console.log('menu', menu)
        return menu;
    } catch(error) {
        throw error;
    }
}