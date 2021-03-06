import crypto from "crypto"
import User from '../models/userModel.js'



class UserController {
  async query(req, res) {
    User.find().then((user) => {
      res.json(user)
    }).catch((err) => {
      res.status(400).json({ 'Error': err })
    })
  }

  async create(req, res) {

    
    const { user, password, email } = req.body;

    const newUser = new User({ user,password,email });
    newUser.save()
      .then((result) => res.json({ result }))
      .catch((err) => res.json({ err }))

  }

}


export { UserController };