const express = require('express');
const { createOrder, getUserOrders, getOrderById, updateOrderStatus } = require('../controllers/orderController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', verifyToken, createOrder);
router.get('/', verifyToken, getUserOrders);
router.get('/:id', verifyToken, getOrderById);
router.put('/:id/status', verifyToken, updateOrderStatus);

module.exports = router;
