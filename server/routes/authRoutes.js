const express = require("express")
const router = express.Router()
const { loginUser } = require("../controllers/authController")

// 👑 ROUTE PATH STRING FIXED (DO NOT ADD /api/auth HERE)
router.post("/login", loginUser)

module.exports = router