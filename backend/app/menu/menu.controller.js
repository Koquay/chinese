const MenuService = require('./menu.service');
const chalk = require('chalk');

exports.getMenu = async(req, res) => {
    console.log(chalk.blue('MENU CONTROLLER GETMENU'));

    try {
        const menu = await MenuService.getMenu();
        res.status(200).json(menu);
        return;
    } catch(error) {
        throw error;
    }
    
}