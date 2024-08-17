const express = require('express');
const { getProducts, createProduct, updateProduct } = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// Rota para obter todos os produtos
router.get('/', getProducts);

// Rota para criar um novo produto (apenas admin)
router.post('/', protect, admin, createProduct);

// Rota para atualizar um produto existente (apenas admin)
router.put('/:id', protect, admin, updateProduct);

module.exports = router;
