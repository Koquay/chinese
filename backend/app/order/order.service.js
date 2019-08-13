require('./order.model')
const Order = require('mongoose').model('Order');
const moment = require('moment-timezone');

exports.placeOrder = async (newOrder) => {
    try {
        newOrder.created_on = moment.tz('America/Toronto').format('YYYY-MM-DD');
        newOrder.created_time = moment.tz('America/Toronto').format('YYYY-MM-DD hh:mm A');
        const order = new Order(newOrder);
        console.log('order', order)
        order.save();
        return order;
    } catch(error) {
        throw error;
    }
}