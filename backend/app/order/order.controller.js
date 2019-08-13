const OrderService = require('./order.service');
const chalk = require('chalk');

exports.placeOrder = async(req, res) => {
    console.log(chalk.blue('ORDER CONTROLLER PLACE ORDER'));

    try {
        const order = await OrderService.placeOrder(req.body);
        res.status(200).json(order);
        return;
    } catch(error) {
        throw error;
    }
    
}