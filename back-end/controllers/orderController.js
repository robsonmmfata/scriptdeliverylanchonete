constOrder = require('./models/Order');

// Criar um novo pedidoexports.createOrder = async (req, res) => {
  const { orderItems, deliveryFee, totalPrice } = req.body;

  try {
    const order = newOrder({
      user: req.user.id,
      orderItems,
      deliveryFee,
      totalPrice,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedido' });
  }


// Obter pedidos do usuário autenticadoexports.getUserOrders = async (req, res) => {
  try {
    const orders = awaitOrder.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedidos' });
  }


// Obter todos os pedidos (admin)exports.getAllOrders = async (req, res) => {
  try {
    const orders = awaitOrder.find().populate('user', 'name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedidos' });
  }

