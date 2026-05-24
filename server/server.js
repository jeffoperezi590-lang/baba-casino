const express = require("express")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const connectDB = require("./config/db")

const app = express()

connectDB()

// 👑 CORS FIXED: Apne live domain ko securely allow karein
app.use(cors({
  origin: ["https://babacasino.online", "https://www.babacasino.online"],
  credentials: true
}))

app.use(express.json())
app.use("/api/auth", authRoutes)

app.get("/", (req, res) => {
  res.send("VIP Casino Backend Running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})