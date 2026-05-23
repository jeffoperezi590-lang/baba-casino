import { Routes, Route, useNavigate } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Income from "./pages/Income"
import Withdraw from "./pages/Withdraw"
import FreeGame from "./pages/FreeGame"

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none font-sans antialiased">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      {/* LOGO (Responsive positions for mobile bounds) */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-20">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-32 sm:w-44 object-contain"
          onError={(e) => { e.target.style.display = "none" }}
        />
      </div>

      {/* HERO WRAPPER */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">

        {/* INNER CONTAINER WITH SMART DYNAMIC GAPS */}
        <div className="flex flex-col items-center w-full max-w-4xl" style={{ gap: '35px' }}>

          {/* TITLE (Fluid scaling font sizes to fit smaller devices) */}
          <h1 className="text-[55px] sm:text-[130px] font-black leading-tight sm:leading-none text-center flex flex-col sm:flex-row items-center justify-center">
            <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              Baba
            </span>
            <span className="text-yellow-400 sm:relative sm:top-3 drop-shadow-[0_0_35px_rgba(255,215,0,0.9)] ml-0 sm:ml-5">
              Casino
            </span>
          </h1>

          {/* BUTTON AREA */}
          <div className="flex flex-col items-center w-full" style={{ gap: '35px' }}>

            {/* BUTTONS ROW (Changes from row to single stack on micro screens) */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 w-full justify-center items-center">

              {/* LOGIN BUTTON */}
              <button 
                onClick={() => navigate("/login")}
                className="w-full max-w-[280px] h-[85px] sm:h-[110px] flex items-center justify-center bg-yellow-400 text-black text-3xl sm:text-5xl font-black rounded-[25px] sm:rounded-[35px] border-[3px] border-yellow-200 shadow-[0_0_45px_rgba(255,215,0,0.7)] hover:scale-105 transition duration-300 tracking-wide"
              >
                LOGIN
              </button>

              {/* SIGNUP BUTTON */}
              <button
                onClick={() => navigate("/signup")}
                className="w-full max-w-[280px] h-[85px] sm:h-[110px] flex items-center justify-center bg-black/70 text-yellow-400 text-3xl sm:text-5xl font-black rounded-[25px] sm:rounded-[35px] border-[3px] border-yellow-400 shadow-[0_0_45px_rgba(255,215,0,0.5)] hover:bg-yellow-400 hover:text-black hover:scale-105 transition duration-300 tracking-wide"
              >
                SIGN UP
              </button>

            </div>

            {/* RESPONSIVE SEPARATOR LINE */}
            <div className="w-full max-w-[500px] h-[2px] bg-yellow-400 opacity-60"></div>

          </div>

          {/* SLOGAN (Scaled font sizes and spacing tracking adjustments for touch viewport profiles) */}
          <p className="text-white text-lg sm:text-4xl tracking-[6px] sm:tracking-[14px] mt-1 text-center uppercase font-black font-mono">
            Play • Earn • Dominate
          </p>

        </div>

      </div>

    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/income" element={<Income />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/free-game" element={<FreeGame />} />
    </Routes>
  )
}

export default App