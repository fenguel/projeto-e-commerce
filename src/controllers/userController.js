const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET

const getAll = async (req, res) => {
   // db.people.find({}).pretty()
  // const authHeader = req.get('authorization')
  // const token = authHeader.split(' ')[1];

  // if (!token) {
  //   return res.status(401).send("Erro no header")
  // }

  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 

  // jwt.verify(token, SECRET, function(erro) {
  //   if (err) {
  //     return res.status(403).send('Não autorizado');
  //   }
  // });

};

const createUser = async (req, res) => {
  const hasedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hasedPassword

  try {
      const newUser = new UserSchema(req.body)

      const savedUser = await newUser.save()

      res.status(201).json({
          message: "User adicionado com sucesso!",
          savedUser
      })
  } catch (error) {
      res.status(500).json({
          message: error.message
      })
  }
};

const updateUser = async (req, res) => {
  try {
    await User.updateOne(filter, update)

      res.status(201).json({
          message: "User alterado com sucesso!",
          savedUser
      })
  } catch (error) {
      res.status(500).json({
          message: error.message
      })
  }
};

module.exports = {
  getAll,
  createUser,
  updateUser
}
