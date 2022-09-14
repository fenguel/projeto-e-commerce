const UserSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAll = async (req, res) => {
  // db.people.find({}).pretty()
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
};

const createUser = async (req, res) => {

  const hasedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hasedPassword

  try {
      const newUser = new UserSchema(req.body)

      const savedUser = await newUser.save()

      res.status(200).json({
          message: "User adicionado com sucesso!",
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
  createUser
};
