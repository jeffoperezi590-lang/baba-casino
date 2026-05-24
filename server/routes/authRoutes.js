const express = require("express")
const router = express.Router()
const { loginUser } = require("../controllers/authController")

// 👑 STRICT ROUTE REGISTER
router.post("/login", loginUser)

module.exports = router