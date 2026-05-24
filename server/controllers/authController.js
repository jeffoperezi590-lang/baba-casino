const User = require("../models/User")

const loginUser = async (req, res) => {

  try {

    let { username, password } = req.body

    // REMOVE SPACES + MAKE LOWERCASE
    username = username.trim().toLowerCase()

    // FIND USER
    const user = await User.findOne({
      username: username
    })

    // USER NOT FOUND
    if (!user) {

      return res.status(400).json({
        message: "User not found"
      })

    }

    // PASSWORD CHECK
    if (user.password !== password) {

      return res.status(400).json({
        message: "Invalid password"
      })

    }

    // SUCCESS
    res.status(200).json({
      message: "Login successful",
      user
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Server Error"
    })

  }

}

module.exports = {
  loginUser
}