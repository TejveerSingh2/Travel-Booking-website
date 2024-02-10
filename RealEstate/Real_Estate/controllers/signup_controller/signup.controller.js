const user = require("../../models/user/user.mongo.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(email)
    if (!name || !email || !password) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }
    console.log(name)
    const userExist = await user.findOne({ email: email });
    console.log(userExist)
    if (userExist) {
      return res.status(403).json({ error: "Email already exist" });
    }

    console.log(1);
    const encryptedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));
    console.log(2);

    const newUser = new user({
      name,
      email,
      password: encryptedPassword
    });
    console.log(3);
    await newUser.save();
    console.log(4);

    const token = jwt.sign(
      { user_id: newUser._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      }
    );
    console.log(4);
    // save user token
    console.log(token);
    newUser.token = token;

    // return new user
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
}

exports.updateUser = async (req, res) => {
  const { name } = req.body;

  try {
    const userExist = await user.findOne({ _id: req.user.user_id });
    if (!userExist) {
      return res.status(422).json({ error: "User not found" });
    }
    const newUser = {
      name,
    };
    await user.updateOne({ _id: req.user.user_id }, {
      $set: newUser
    });
    console.log(name);
    userExist.name = name;
    res.status(201).json(userExist);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}
