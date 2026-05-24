const User = require("../models/User")

const loginUser = async (req, res) => {
  try {
    let { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" })
    }

    // REMOVE SPACES + MAKE LOWERCASE SANITIZATION
    username = username.trim().toLowerCase()
    password = password.trim()

    console.log("=== INCOMING PRODUCTION LOGIN ATTEMPT ===")
    console.log("Processed Username:", username)

    // FIND USER IN MONGO DATABASE
    const user = await User.findOne({ username: username })

    console.log("DATABASE SEARCH RESULT:", user)

    // USER NOT FOUND
    if (!user) {
      console.log(`❌ DB Lookup Failed: User [${username}] not found.`);
      return res.status(400).json({
        message: "User not found"
      })
    }

    // PASSWORD INTEGRITY CHECK
    if (user.password !== password) {
      console.log(`❌ Authentication Failed: Password mismatch for user [${username}].`);
      return res.status(400).json({
        message: "Invalid password"
      })
    }

    // AUTHENTICATION SUCCESS RESPONSE
    console.log(`✅ Authentication Success: User [${username}] securely logged in.`);
    return res.status(200).json({
      message: "Login successful",
      user
    })

  } catch (error) {
    console.error("CRITICAL AUTHENTICATION SERVER ERROR:", error)
    return res.status(500).json({
      message: "Server Error"
    })
  }
}

// 👑 STRICT EXPORT STRUCTURING FIXED
module.exports = {
  loginUser
}