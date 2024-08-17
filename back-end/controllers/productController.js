constProduct = require('./models/Product');

// Obter todos os produtosexports.getProducts = async (req, res) => {
  try {
    const products = awaitProduct.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos' });
  }


// Criar um novo produto (apenas para admin)exports.createProduct = async (req, res) => {
  const { name, description, price, category, extras } = req.body;

  try {
    const product = newProduct({ name, description, price, category, extras });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto' });
  }


// Editar um produto existenteexports.updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = awaitProduct.findByIdAndUpdate(id, req.body, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto' });
  }

