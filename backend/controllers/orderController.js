const Order = require('../models/Order');

const placeOrder = async (req, res) => {
  const { items, totalAmount } = req.body;
  try {
    const order = await Order.create({ userId: req.user.id, items, totalAmount });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { placeOrder, getOrders };
