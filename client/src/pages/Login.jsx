import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      setMessage("Logging in...")

      // 🔍 DEBUG LOG 1: Checking what frontend is actually sending
      console.log("=== FRONTEND LOGIN ATTEMPT ===")
      console.log("Raw Username Input:", username)
      console.log("Transformed Payload Username:", username.trim().toLowerCase())

      const res = await axios.post(
        "https://baba-casino-production.up.railway.app/api/auth/login",
        {
          username: username.trim().toLowerCase(),
          password: password.trim()
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 10000
        }
      )

      // 🔍 DEBUG LOG 2: If login hits 200 OK
      console.log("=== BACKEND RESPONSE SUCCESS ===", res.data)

      setMessage("LOGIN SUCCESSFUL 🎉")
      localStorage.setItem("user", JSON.stringify(res.data.user))

      setTimeout(() => {
        navigate("/dashboard")
      }, 1200)

    } catch (error) {
      setLoading(false)
      
      // 🔍 DEBUG LOG 3: Catching exact errors from Railway
      console.log("=== BACKEND RESPONSE ERROR ===")
      if (error.response) {
        console.error("Status Code Received:", error.response.status)
        console.error("Error Message from Backend:", error.response.data)
        setMessage(error.response.data.message || "Login Failed")
      } else if (error.request) {
        console.error("No response received from server. Request details:", error.request)
        setMessage("Server not responding")
      } else {
        console.error("Axios configuration or runtime error:", error.message)
        setMessage("Something went wrong")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans antialiased">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover scale-110">
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]" />

      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
        <img src="/images/logo.png" alt="logo" className="w-28 sm:w-44" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10">
        <div className="w-full max-w-[680px] bg-black/55 border-[3px] border-yellow-400 rounded-[35px] sm:rounded-[45px] backdrop-blur-xl shadow-[0_0_80px_rgba(255,215,0,0.35)]">
          <div className="px-5 sm:px-10 py-8 sm:py-12">
            
            <h1 className="text-center font-black uppercase tracking-wide mb-8 sm:mb-12 text-4xl sm:text-6xl">
              <span className="text-white">VIP</span> <span className="text-yellow-400 ml-3">LOGIN</span>
            </h1>

            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full h-[75px] sm:h-[95px] bg-black/70 border-[3px] border-yellow-400/80 rounded-[22px] text-white text-2xl sm:text-3xl font-black outline-none px-6 sm:px-8 placeholder:text-zinc-500 uppercase"
              />

              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full h-[75px] sm:h-[95px] bg-black/70 border-[3px] border-yellow-400/80 rounded-[22px] text-white text-2xl sm:text-3xl font-black outline-none px-6 sm:px-8 placeholder:text-zinc-500 uppercase"
              />

              {message && (
                <div className="w-full bg-yellow-400/10 border border-yellow-400/20 rounded-xl py-3 px-4">
                  <p className="text-center text-yellow-400 font-black text-lg sm:text-2xl tracking-wide">{message}</p>
                </div>
              )}

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full h-[85px] sm:h-[100px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black text-3xl sm:text-4xl font-black rounded-[25px] sm:rounded-[30px] border-[3px] border-yellow-200 hover:scale-[1.02] active:scale-[0.99] transition duration-300 tracking-widest uppercase shadow-[0_0_30px_rgba(255,215,0,0.4)] disabled:opacity-70"
              >
                {loading ? "PLEASE WAIT..." : "LOGIN"}
              </button>

              <button
                onClick={() => navigate("/")}
                className="w-full text-zinc-400 hover:text-yellow-400 text-lg sm:text-xl font-black tracking-widest uppercase transition-colors pt-2"
              >
                BACK TO HOME
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login