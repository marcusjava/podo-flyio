const User = require("../models/User");
const ValidateLogin = require("../validation/login");
const ValidateRegister = require("../validation/registerUser");
const UpdateRegister = require("../validation/updateUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  const { errors, isValid } = ValidateLogin(req.body);
  if (!isValid) {
    return next({ status: 400, message: errors });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next({
      status: 404,
      message: { path: "email", message: "Usuario não encontrado" },
    });
  }

  //user inativo
  if (user.status === "Inativo") {
    next({
      status: 403,
      message: { path: "email", message: "Usuario inativo" },
    });
  }
  bcrypt
    .compare(password, user.password)
    .then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar_url:
            process.env.STORAGE_TYPE == "local"
              ? `${process.env.APP_URL}/${user.thumbnail}`
              : `${process.env.S3_URL}/${user.thumbnail}`,
        };

        jwt.sign(
          payload,
          process.env.SECRET_KEY,
          { expiresIn: "24h" },
          (error, token) => {
            res.json({ success: true, token: `Bearer ${token}` });
          }
        );
      } else {
        return next({
          status: 400,
          message: { path: "password", message: "Senha não confere" },
        });
      }
    })
    .catch((error) =>
      next({
        status: 500,
        originalError: error,
        message: {
          path: "error",
          message: "Ocorreu um erro ao tentar efetuar o login",
        },
      })
    );
};

const register = async (req, res, next) => {
  const { errors, isValid } = ValidateRegister(req.body);

  if (!isValid) {
    return next({ status: 400, message: { message: errors } });
  }

  const {
    name,
    phone,
    nasc,
    cpf,
    rg,
    email,
    address,
    password,
    status,
    role,
  } = req.body;

  const newUser = new User({
    thumbnail: typeof req.file === "undefined" ? "no-img.png" : req.file.key,
    name,
    phone,
    nasc,
    cpf,
    rg,
    phone,
    email,
    address: JSON.parse(address),
    password,
    role,
    status,
  });
  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(newUser.password, salt, (error, hash) => {
      if (error)
        return next({
          status: 500,
          originalError: error,
          message: {
            path: "password",
            message:
              "Ocorreu um erro ao tentar criar o hash da senha do usuario",
          },
        });

      newUser.password = hash;
      newUser
        .save()
        .then((user) =>
          res.status(201).send({ message: "Usuario salvo com sucesso" })
        )
        .catch((error) => {
          return next(error);
        });
    });
  });
};

//TODO - Change password
const update = async (req, res, next) => {
  const { errors, isValid } = UpdateRegister(req.body);

  if (!isValid) {
    return next({ status: 400, message: errors });
  }
  const { id } = req.params;

  const {
    name,
    phone,
    nasc,
    cpf,
    rg,
    email,
    address,
    role,
    status,
    password,
  } = req.body;

  const user = await User.findById({ _id: id });

  if (!user) {
    return next({
      status: 404,
      message: { path: "user", message: "Usuario não encontrado" },
    });
  }

  User.findByIdAndUpdate(
    { _id: id },
    {
      thumbnail:
        typeof req.file === "undefined" ? user.thumbnail : req.file.key,
      name,
      phone,
      nasc,
      cpf,
      rg,
      phone,
      email,
      address: JSON.parse(address),
      role,
      status,
    },
    { new: true }
  )
    .then((user) => {
      if (password) {
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(password, salt, (error, hash) => {
            if (error) throw error;
            user.password = hash;
            user.save();
          });
        });
      }
      return res.status(200).json(user);
    })
    .catch((error) => next(error));
};

const getUser = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    return next({
      status: 404,
      message: { path: "user", message: "Usuario não encontrado" },
    });
  }
  return res.json(user);
};

const changePwd = async (req, res, next) => {
  const { actual, password, password2 } = req.body;
  const { _id } = req.user;

  if (password != password2) {
    next({
      status: 400,
      message: { path: "password", message: "Senhas não conferem" },
    });
  }

  const user = await User.findById(_id).select("+password");

  if (!user) {
    return next({
      status: 404,
      message: { path: "user", message: "Usuario não localizado" },
    });
  }

  bcrypt
    .compare(actual, user.password)
    .then((isMatch) => {
      if (!isMatch) {
        return next({
          status: 404,
          message: { path: "actual", message: "Senha atual não confere" },
        });
      }
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(password, salt, (error, hash) => {
          if (error) throw error;
          User.findByIdAndUpdate(
            { _id: _id },
            { password: hash },
            { new: true }
          )
            .then((user) =>
              res.json({
                status: 200,
                message: {
                  path: "user",
                  message: "Senha atualizada com sucesso",
                },
              })
            )
            .catch((error) => next(error));
        });
      });
    })
    .catch((error) => {
      return next({
        status: 500,
        message: {
          path: "password",
          message:
            "Ocorreu um erro ao comparar a senha atual com a salva no banco de dados",
        },
      });
    });
};

const listUsers = async (req, res) => {
  const { name, email, cpf, contact } = req.query;

  //lista de usuariosya

  const condition = {};

  if (name != undefined) {
    condition.name = { $regex: name, $options: "i" };
  }

  if (email != undefined) {
    condition.email = { $regex: email, $options: "i" };
  }

  if (cpf != undefined) {
    condition.cpf = { $regex: cpf, $options: "i" };
  }
  if (contact != undefined) {
    condition.contact = { $regex: contact, $options: "i" };
  }

  const users = await User.find(condition).sort({ createdAt: -1 });
  return res.json(users);
};

module.exports = { login, register, update, listUsers, changePwd, getUser };
