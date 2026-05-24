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

      const res = await axios.post(
        "https://baba-casino-production.up.railway.app/api/auth/login",
        {
          username: username.trim().toLowerCase(),
          password: password.trim()
        },
        {
          headers: { "Content-Type": "application/json" },
          timeout: 10000
        }
      )

      setMessage("LOGIN SUCCESSFUL 🎉")
      localStorage.setItem("user", JSON.stringify(res.data.user))

      setTimeout(() => {
        navigate("/dashboard")
      }, 1200)

    } catch (error) {
      setLoading(false)
      if (error.response) {
        setMessage(error.response.data.message || "Login Failed")
      } else if (error.request) {
        setMessage("Server not responding")
      } else {
        setMessage("Something went wrong")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans antialiased flex items-center justify-center px-4">
      
      {/* BACKGROUND VIDEO */}
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover scale-110">
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]" />

      {/* BRANDING LOGO */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20">
        <img src="/images/logo.png" alt="logo" className="w-24 sm:w-44" />
      </div>

      {/* 👑 OUTER BOX CONTROLLER (STRICT STRUCTURAL INTERNAL PADDING CONTROL) */}
      <div 
        className="relative z-10 w-full max-w-[650px] bg-black/55 border-[3px] border-yellow-400 rounded-[35px] sm:rounded-[45px] backdrop-blur-xl shadow-[0_0_80px_rgba(255,215,0,0.35)] box-border"
        style={{ padding: '50px 0px' }} // Top/Bottom padding keep wide, Left/Right handled by child
      >
        
        {/* TITLE HEAD */}
        <h1 
          className="text-center font-black uppercase tracking-wide text-4xl sm:text-6xl"
          style={{ marginBottom: '40px' }}
        >
          <span className="text-white">VIP</span> <span className="text-yellow-400 ml-3">LOGIN</span>
        </h1>

        {/* 👑 FIX: WRAPPER DIV WITH FORCED SIDE PADDINGS TO PUSH INPUT BORDERS AWAY FROM OUTER BOX BORDER */}
        <div className="w-full flex flex-col px-6 sm:px-12 box-border">
          
          {/* USERNAME INPUT */}
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{ 
              paddingLeft: '28px', 
              paddingRight: '28px',
              marginBottom: '24px',
              boxSizing: 'border-box'
            }}
            className="w-full h-16 sm:h-[90px] bg-black/70 border-[3px] border-yellow-400/80 rounded-xl sm:rounded-[22px] text-white text-xl sm:text-3xl font-black outline-none placeholder:text-zinc-500 uppercase tracking-wide focus:border-yellow-400"
          />

          {/* PASSWORD INPUT */}
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{ 
              paddingLeft: '28px', 
              paddingRight: '28px',
              marginBottom: '24px',
              boxSizing: 'border-box'
            }}
            className="w-full h-16 sm:h-[90px] bg-black/70 border-[3px] border-yellow-400/80 rounded-xl sm:rounded-[22px] text-white text-xl sm:text-3xl font-black outline-none placeholder:text-zinc-500 uppercase tracking-wide focus:border-yellow-400"
          />

          {message && (
            <div 
              className="w-full bg-yellow-400/10 border border-yellow-400/20 rounded-xl py-3 px-4"
              style={{ marginBottom: '20px' }}
            >
              <p className="text-center text-yellow-400 font-black text-md sm:text-2xl tracking-wide">{message}</p>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full h-14 sm:h-[95px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black text-xl sm:text-4xl font-black rounded-xl sm:rounded-[25px] border-[3px] border-yellow-200 shadow-[0_0_30px_rgba(255,215,0,0.4)] disabled:opacity-70 uppercase tracking-widest"
            style={{ marginTop: '12px', marginBottom: '20px' }}
          >
            {loading ? "PLEASE WAIT..." : "LOGIN"}
          </button>

          {/* REDIRECTION */}
          <button
            onClick={() => navigate("/")}
            className="w-full text-zinc-400 hover:text-yellow-400 text-sm sm:text-xl font-black tracking-widest uppercase transition-colors py-2 text-center"
          >
            BACK TO HOME
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login