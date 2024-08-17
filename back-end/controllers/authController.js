constUser = require('./models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Gerar Token JWTconstgenerateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });


// Registrar um novo usuárioexports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = awaitUser.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    const user = awaitUser.create({ name, email, password });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }


// Login do usuárioexports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = awaitUser.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor' });
  }


// Obter perfil do usuário autenticadoexports.getUserProfile = async (req, res) => {
  const user = awaitUser.findById(req.user.id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }

