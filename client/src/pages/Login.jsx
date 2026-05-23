import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async () => {

    try {

      setMessage("Logging in...")

      console.log("Sending login request")

      const res = await axios.post(
        "https://baba-casino-production.up.railway.app/api/auth/login",
        {
          username,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 10000
        }
      )

      console.log("SUCCESS:", res.data)

      setMessage("LOGIN SUCCESSFUL 🎉")

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      )

      setTimeout(() => {
        navigate("/dashboard")
      }, 1500)

    } catch (error) {

      console.log("FULL ERROR:", error)

      if (error.response) {

        console.log("ERROR RESPONSE:", error.response.data)

        setMessage(
          error.response.data.message || "Login Failed"
        )

      } else if (error.request) {

        setMessage("Server not responding")

      } else {

        setMessage(error.message)

      }

    }

  }

  return (

    <div
      className="relative w-screen h-screen overflow-hidden bg-black select-none font-sans antialiased"
    >

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px] z-0"></div>

      {/* LOGO */}
      <div className="absolute top-8 left-10 z-20">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-44"
        />
      </div>

      {/* MAIN */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-6">

        <div
          className="bg-black/50 border-[3px] border-yellow-400 rounded-[45px] backdrop-blur-xl shadow-[0_0_80px_rgba(255,215,0,0.35)] flex flex-col justify-between"
          style={{
            width: "650px",
            padding: "50px 40px",
            boxSizing: "border-box"
          }}
        >

          {/* TITLE */}
          <h1
            className="text-6xl font-black text-center uppercase tracking-wide"
            style={{ marginBottom: "45px" }}
          >
            <span className="text-white">VIP</span>

            <span className="text-yellow-400 ml-4">
              LOGIN
            </span>
          </h1>

          {/* INPUTS */}
          <div className="w-full flex flex-col">

            <input
              type="text"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-[95px] bg-black/70 border-[3px] border-yellow-400/80 rounded-[25px] text-white text-3xl font-black outline-none px-8 mb-6 uppercase"
            />

            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[95px] bg-black/70 border-[3px] border-yellow-400/80 rounded-[25px] text-white text-3xl font-black outline-none px-8 mb-6 uppercase"
            />

            {/* MESSAGE */}
            {message && (

              <p className="text-center text-2xl text-yellow-400 font-black bg-yellow-400/10 py-3 rounded-xl mb-5">
                {message}
              </p>

            )}

            {/* BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full h-[100px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black text-4xl font-black rounded-[30px] border-[3px] border-yellow-200 hover:scale-[1.02] transition duration-300 tracking-widest uppercase"
              style={{ marginBottom: "20px" }}
            >
              LOGIN
            </button>

            {/* BACK */}
            <button
              onClick={() => navigate("/")}
              className="w-full text-zinc-400 hover:text-yellow-400 text-xl font-black tracking-widest uppercase transition-colors py-2 text-center"
            >
              BACK TO HOME
            </button>

          </div>

        </div>

      </div>

    </div>

  )

}

export default Login