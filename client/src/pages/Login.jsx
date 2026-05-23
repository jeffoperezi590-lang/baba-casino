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
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password
        }
      )

      setMessage("LOGIN SUCCESSFUL 🎉")
      localStorage.setItem("user", JSON.stringify(res.data.user))

      setTimeout(() => {
        navigate("/dashboard")
      }, 2000)

    } catch (error) {
      setMessage(error.response?.data?.message || "Login Failed")
    }
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none font-sans antialiased">

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

      {/* DARK TRANSPARENT OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[3px] pointer-events-none z-0"></div>

      {/* BRANDING LOGO */}
      <div className="absolute top-8 left-10 z-20">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-44"
          onError={(e) => { e.target.style.display = "none" }}
        />
      </div>

      {/* CENTER POSITIONING BOX MAIN LAYER */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-6">

        {/* LOGIN BOX PANEL WITH FORCED INTERNAL PADDING */}
        <div 
          className="bg-black/50 border-[3px] border-yellow-400 rounded-[45px] backdrop-blur-xl shadow-[0_0_80px_rgba(255,215,0,0.35)] flex flex-col justify-between"
          style={{ width: '650px', padding: '50px 40px', boxSizing: 'border-box' }}
        >

          {/* PREMIUM HEADER TITLE */}
          <h1 className="text-6xl font-black text-center uppercase tracking-wide" style={{ marginBottom: '45px' }}>
            <span className="text-white">VIP</span>
            <span className="text-yellow-400 ml-4 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">LOGIN</span>
          </h1>

          {/* CONTROL INPUT ACTIONS SECTION */}
          <div className="w-full flex flex-col">

            {/* USERNAME INPUT WITH STRICT INLINE PADDING SHIFTS */}
            <input
              type="text"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ 
                paddingLeft: '35px', 
                paddingRight: '35px', 
                marginBottom: '25px',
                boxSizing: 'border-box'
              }}
              className="w-full h-[95px] bg-black/70 border-[3px] border-yellow-400/80 rounded-[25px] text-white text-3xl font-black outline-none focus:border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.15)] placeholder:text-zinc-500 tracking-wide uppercase transition-all"
            />

            {/* PASSWORD INPUT WITH STRICT INLINE PADDING SHIFTS */}
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                paddingLeft: '35px', 
                paddingRight: '35px', 
                marginBottom: '25px',
                boxSizing: 'border-box'
              }}
              className="w-full h-[95px] bg-black/70 border-[3px] border-yellow-400/80 rounded-[25px] text-white text-3xl font-black outline-none focus:border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.15)] placeholder:text-zinc-500 tracking-wide uppercase transition-all"
            />

            {/* STATUS EVENT MESSAGE LOGGER */}
            {message && (
              <p className="text-center text-2xl text-yellow-400 font-black tracking-wide bg-yellow-400/10 border border-yellow-400/20 py-2 rounded-xl mb-5 animate-pulse">
                {message}
              </p>
            )}

            {/* PRIMARY INTERACTION LOGIN SUBMIT ACTION BUTTON */}
            <button
              onClick={handleLogin}
              className="w-full h-[100px] flex items-center justify-center bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black text-4xl font-black rounded-[30px] border-[3px] border-yellow-200 shadow-[0_5px_40px_rgba(255,215,0,0.4)] hover:scale-[1.02] active:scale-98 transition duration-300 tracking-widest uppercase"
              style={{ marginBottom: '20px' }}
            >
              LOGIN
            </button>

            {/* ROUTING REDIRECTION ACTION LINK TO BACK HOME */}
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