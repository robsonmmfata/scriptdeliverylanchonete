const express = require('express');
const { createOrder, getUserOrders, getAllOrders } = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Rota para criar um novo pedido
router.post('/', protect, createOrder);

// Rota para obter todos os pedidos do usuário autenticado
router.get('/myorders', protect, getUserOrders);

// Rota para obter todos os pedidos (apenas admin)
router.get('/', protect, admin, getAllOrders);

module.exports = router;
