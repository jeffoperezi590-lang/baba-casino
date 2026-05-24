const express = require("express")
const cors = require("cors")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")
const connectDB = require("./config/db")

const app = express()

// Connect Database
connectDB()

// 👑 CORS FIXED: Yeh aapke live frontend domain ko backend se connect karega
app.use(cors({
  origin: [
    "https://babacasino.online", 
    "https://www.babacasino.online",
    "http://localhost:5173" // Local testing ke liye
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
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