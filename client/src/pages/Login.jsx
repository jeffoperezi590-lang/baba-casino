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
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans antialiased flex items-center justify-center px-4 sm:px-6">
      
      {/* BACKGROUND VIDEO */}
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover scale-110">
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]" />

      {/* BRANDING LOGO */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
        <img src="/images/logo.png" alt="logo" className="w-24 sm:w-44" />
      </div>

      {/* BOX CONTROLLER (STRICT STRUCTURAL PADDING ADJUSTED FOR RESPONSIVE GAPS) */}
      <div className="relative z-10 w-full max-w-[650px] bg-black/55 border-[3px] border-yellow-400 rounded-[35px] sm:rounded-[45px] backdrop-blur-xl shadow-[0_0_80px_rgba(255,215,0,0.35)] box-border p-8 sm:p-14">
        
        {/* TITLE HEAD (ADDED STRONG BOTTOM MARGIN FOR SEPARATION FROM FIRST INPUT) */}
        <h1 className="text-center font-black uppercase tracking-wide text-4xl sm:text-6xl mb-10 sm:mb-16">
          <span className="text-white">VIP</span> <span className="text-yellow-400 ml-3">LOGIN</span>
        </h1>

        {/* 👑 INPUT AREA WITH EXTRA DEEP STRUCTURAL GAP TO PREVENT OVERLAPPING */}
        <div className="flex flex-col gap-6 sm:gap-[32px] w-full">
          
          {/* USERNAME INPUT WITH ENFORCED INLINE INNER PADDING SHIFTS */}
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{ 
              paddingLeft: '32px', 
              paddingRight: '32px',
              boxSizing: 'border-box'
            }}
            className="w-full h-16 sm:h-[95px] bg-black/70 border-[3px] border-yellow-400/80 rounded-xl sm:rounded-[25px] text-white text-xl sm:text-3xl font-black outline-none placeholder:text-zinc-500 uppercase tracking-wide transition-all focus:border-yellow-400"
          />

          {/* PASSWORD INPUT WITH ENFORCED INLINE INNER PADDING SHIFTS */}
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            style={{ 
              paddingLeft: '32px', 
              paddingRight: '32px',
              boxSizing: 'border-box'
            }}
            className="w-full h-16 sm:h-[95px] bg-black/70 border-[3px] border-yellow-400/80 rounded-xl sm:rounded-[25px] text-white text-xl sm:text-3xl font-black outline-none placeholder:text-zinc-500 uppercase tracking-wide transition-all focus:border-yellow-400"
          />

          {message && (
            <div className="w-full bg-yellow-400/10 border border-yellow-400/20 rounded-xl py-3.5 px-4 my-2">
              <p className="text-center text-yellow-400 font-black text-md sm:text-2xl tracking-wide">{message}</p>
            </div>
          )}

          {/* SUBMIT BUTTON WITH EXTRA SEPARATION SPACE */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full h-14 sm:h-[100px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black text-xl sm:text-4xl font-black rounded-xl sm:rounded-[30px] border-[3px] border-yellow-200 hover:scale-[1.02] active:scale-[0.99] transition duration-300 tracking-widest uppercase shadow-[0_0_30px_rgba(255,215,0,0.4)] disabled:opacity-70 mt-6 sm:mt-[36px]"
          >
            {loading ? "PLEASE WAIT..." : "LOGIN"}
          </button>

          {/* REDIRECTION */}
          <button
            onClick={() => navigate("/")}
            className="w-full text-zinc-400 hover:text-yellow-400 text-sm sm:text-xl font-black tracking-widest uppercase transition-colors pt-3"
          >
            BACK TO HOME
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login