import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState("HOME")
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const gamesList = [
    { id: 1, title: "Classic Slots", desc: "Spin the golden wheels for high rewards.", type: "free", img: "/images/slots.jpg" },
    { id: 2, title: "Roulette Royale", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/roulette.jpg" },
    { id: 3, title: "Blackjack 21", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/blackjack.jpg" },
    { id: 4, title: "Baccarat Elite", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/baccarat.jpg" },
    { id: 5, title: "Mega Wheel", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/wheel.jpg" },
    { id: 6, title: "Poker Stars", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/poker.jpg" },
    { id: 7, title: "Dice Roll Blitz", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/dice.jpg" },
    { id: 8, title: "Crypto Crash", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/crash.jpg" },
    { id: 9, title: "Minesweeper Gold", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/mines.jpg" },
    { id: 10, title: "Aviator High", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/aviator.jpg" },
    { id: 11, title: "Dragon Tiger", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/dragon.jpg" },
    { id: 12, title: "VIP Jackpot", desc: "Unlock higher levels to access this table.", type: "vip", img: "/images/jackpot.jpg" }
  ]

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === "INCOME") {
      navigate("/income")
    } else if (tab === "WITHDRAW") {
      navigate("/withdraw")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div
      className="w-full h-screen overflow-y-auto relative font-sans antialiased text-white select-none flex flex-col justify-between"
      style={{ 
        backgroundImage: "url('/images/dashboard-bg.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0d0e12" 
      }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>

      {/* 1. STICKY TOP BRANDING HEADER */}
      <header className="relative z-20 w-full bg-zinc-950/85 border-b border-zinc-800/60 backdrop-blur-xl py-4 flex items-center justify-between" style={{ paddingLeft: '40px', paddingRight: '60px' }}>
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Baba Casino" className="h-9 object-contain" onError={(e) => e.target.style.display = 'none'} />
          <span className="text-xl font-black tracking-wider text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]">BABA CASINO</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-zinc-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Server Live
        </div>
      </header>

      {/* MAIN CONTAINER WRAPPER */}
      <main 
        className="relative z-10 w-full flex-grow flex flex-col"
        style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '25px' }}
      >

        {/* 2. PROFILE CONTAINER */}
        <div 
          className="w-full flex justify-between items-center bg-zinc-900/80 border border-zinc-800/70 rounded-3xl p-5 shadow-2xl backdrop-blur-xl"
          style={{ marginBottom: '25px' }}
        >
          {/* USER INFO */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 via-amber-400 to-yellow-300 flex items-center justify-center text-black text-3xl font-black shadow-[0_0_25px_rgba(245,158,11,0.3)]">
              <span className="flex items-center justify-center w-full h-full text-center font-black">
                {user ? user.username?.charAt(0).toUpperCase() : "U"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-black tracking-wide uppercase text-zinc-100">
                {user ? user.username : "Loading..."}
              </h1>
              <div>
                <span className="bg-yellow-400/20 text-yellow-400 border border-yellow-400/40 text-[10px] font-black px-3 py-0.5 rounded tracking-widest">
                  VIP MEMBER
                </span>
              </div>
            </div>
          </div>

          {/* ACTION SECTION (BALANCE DISPLAY + LOGOUT BUTTON ROW) */}
          <div className="flex items-center gap-4" style={{ paddingRight: '20px' }}>
            <div className="flex flex-col items-start gap-1">
              <p className="text-zinc-400 text-[11px] font-black tracking-widest uppercase text-left w-full pl-1">
                Total Balance
              </p>
              <div className="bg-gradient-to-r from-yellow-500 to-amber-400 text-black px-7 py-2 rounded-xl text-2xl font-black tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.25)] text-left">
                PKR {user ? user.balance?.toLocaleString() : "0"}
              </div>
            </div>

            {/* PREMIUM LOGOUT BUTTON */}
            <div className="flex flex-col justify-end h-full pt-5">
              <button
                onClick={handleLogout}
                className="bg-zinc-950/80 hover:bg-rose-600/20 text-zinc-400 hover:text-rose-400 border border-zinc-800 hover:border-rose-500/40 px-5 py-2.5 rounded-xl text-sm font-black tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-md flex items-center gap-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* 3. MID NAVBAR */}
        <div 
          className="w-full flex bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-2 shadow-2xl backdrop-blur-md"
          style={{ marginBottom: '35px' }}
        >
          {["HOME", "INCOME", "WITHDRAW"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              style={{ paddingTop: '14px', paddingBottom: '14px' }}
              className={`flex-1 rounded-xl text-xl font-black tracking-widest transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4. PREMIUM 12 GAME GRID */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          style={{ marginBottom: '45px' }}
        >
          {gamesList.map((game) => (
            <div
              key={game.id}
              className="group bg-zinc-900/90 border-2 border-zinc-800/80 hover:border-yellow-400 rounded-3xl p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div>
                <div className="overflow-hidden rounded-2xl mb-4 h-44 w-full bg-zinc-950 relative border border-zinc-800/50">
                  <img
                    src={game.img}
                    alt={game.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600&auto=format&fit=crop"; }}
                  />
                  {game.type === "free" && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded shadow-lg uppercase tracking-widest border border-emerald-400/20">
                      Free Entry
                    </span>
                  )}
                </div>

                <div style={{ paddingLeft: '24px', paddingRight: '24px' }} className="w-full">
                  <h2 className="text-zinc-100 text-xl font-black tracking-wide mb-1.5 group-hover:text-yellow-400 transition-colors">
                    {game.title}
                  </h2>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-5 min-h-[36px]">
                    {game.desc}
                  </p>
                </div>
              </div>

              <div className="w-full px-2 pb-1">
                {game.type === "free" ? (
                  <button 
                    onClick={() => navigate("/free-game")}
                    style={{ paddingTop: '14px', paddingBottom: '14px' }}
                    className="w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black rounded-xl text-sm font-black tracking-widest hover:brightness-110 active:scale-95 transition-all duration-200"
                  >
                    FREE PLAY
                  </button>
                ) : (
                  <button
                    onClick={() => alert("Level low. Increase your level by playing Free Game")}
                    style={{ paddingTop: '14px', paddingBottom: '14px' }}
                    className="w-full bg-zinc-950/90 text-yellow-400/70 border-2 border-zinc-800 hover:border-yellow-400/60 hover:text-yellow-400 rounded-xl text-sm font-black tracking-widest transition-all duration-200 active:scale-95"
                  >
                    LOCK PLAY
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </main>

      <footer className="relative z-20 w-full bg-zinc-950/95 border-t border-zinc-800/80 text-center text-[11px] text-zinc-500 tracking-wider font-semibold py-5 mt-auto">
        &copy; {new Date().getFullYear()} Baba Casino. All Rights Reserved. Responsible Gaming Only.
      </footer>
    </div>
  )
}

export default Dashboard