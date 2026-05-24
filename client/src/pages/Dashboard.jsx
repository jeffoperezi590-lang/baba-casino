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
    if (tab === "INCOME") { navigate("/income") }
    else if (tab === "WITHDRAW") { navigate("/withdraw") }
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

      {/* HEADER BAR */}
      <header className="relative z-20 w-full bg-zinc-950/85 border-b border-zinc-800/60 backdrop-blur-xl py-3.5 flex items-center justify-between px-4 sm:px-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="/images/logo.png" alt="Baba Casino" className="h-7 sm:h-9 object-contain" onError={(e) => e.target.style.display = 'none'} />
          <span className="text-md sm:text-xl font-black tracking-wider text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]">BABA CASINO</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-bold">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Server Live
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="relative z-10 w-full flex-grow flex flex-col px-4 sm:px-10 pt-4 sm:pt-6">

        {/* PROFILE BLOCK RESPONSIVE SYSTEM */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-zinc-900/80 border border-zinc-800/70 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl gap-4 sm:gap-0 mb-5 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-5 self-start sm:self-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-yellow-500 via-amber-400 to-yellow-300 flex items-center justify-center text-black text-xl sm:text-3xl font-black shadow-[0_0_25px_rgba(245,158,11,0.3)]">
              {user ? user.username?.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <h1 className="text-lg sm:text-2xl font-black tracking-wide uppercase text-zinc-100">
                {user ? user.username : "Loading..."}
              </h1>
              <div>
                <span className="bg-yellow-400/20 text-yellow-400 border border-yellow-400/40 text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-0.5 rounded tracking-widest">
                  VIP MEMBER
                </span>
              </div>
            </div>
          </div>

          {/* BALANCE BLOCK AND LOGOUT ROW MIXUPS FIXED */}
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t border-zinc-800/50 sm:border-none pt-3 sm:pt-0">
            <div className="flex flex-col items-start gap-0.5">
              <p className="text-zinc-400 text-[10px] sm:text-[11px] font-black tracking-widest uppercase pl-1">Total Balance</p>
              <div className="bg-gradient-to-r from-yellow-500 to-amber-400 text-black px-4 sm:px-7 py-1.5 sm:py-2 rounded-xl text-xl sm:text-2xl font-black tracking-wider">
                PKR {user ? user.balance?.toLocaleString() : "0"}
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="bg-zinc-950/80 hover:bg-rose-600/20 text-zinc-400 hover:text-rose-400 border border-zinc-800 hover:border-rose-500/40 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-md self-end"
            >
              Logout
            </button>
          </div>
        </div>

        {/* MID NAVBAR (FLUID SCALING SQUEEZES FOR TOUCH BOUNDS) */}
        <div className="w-full flex bg-zinc-950/90 border border-zinc-800/80 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl backdrop-blur-md mb-6 sm:mb-8">
          {["HOME", "INCOME", "WITHDRAW"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`flex-1 rounded-lg sm:rounded-xl text-xs sm:text-xl font-black tracking-widest transition-all duration-300 py-3 sm:py-3.5 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARDS SYSTEM */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {gamesList.map((game) => (
            <div key={game.id} className="group bg-zinc-900/90 border-2 border-zinc-800/80 hover:border-yellow-400 rounded-3xl p-4 sm:p-5 flex flex-col justify-between shadow-2xl transition-all duration-300 backdrop-blur-sm">
              <div>
                <div className="overflow-hidden rounded-2xl mb-4 h-40 sm:h-44 w-full bg-zinc-950 relative border border-zinc-800/50">
                  <img
                    src={game.img}
                    alt={game.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600"; }}
                  />
                  {game.type === "free" && (
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[9px] sm:text-[10px] font-black px-2 sm:px-2.5 py-0.5 rounded shadow-lg uppercase tracking-widest">
                      Free Entry
                    </span>
                  )}
                </div>

                <div className="w-full px-1 sm:px-3">
                  <h2 className="text-zinc-100 text-lg sm:text-xl font-black tracking-wide mb-1 group-hover:text-yellow-400 transition-colors">
                    {game.title}
                  </h2>
                  <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed mb-4 min-h-[32px]">
                    {game.desc}
                  </p>
                </div>
              </div>

              <div className="w-full px-1 pb-1">
                {game.type === "free" ? (
                  <button onClick={() => navigate("/free-game")} className="w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black rounded-xl text-xs sm:text-sm font-black tracking-widest py-3 hover:brightness-110 active:scale-95 transition-all">
                    FREE PLAY
                  </button>
                ) : (
                  <button onClick={() => alert("Level low. Increase your level by playing Free Game")} className="w-full bg-zinc-950/90 text-yellow-400/70 border-2 border-zinc-800 py-3 rounded-xl text-xs sm:text-sm font-black tracking-widest">
                    LOCK PLAY
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </main>

      <footer className="relative z-20 w-full bg-zinc-950/95 border-t border-zinc-800/80 text-center text-[10px] sm:text-[11px] text-zinc-500 tracking-wider font-semibold py-4 mt-auto">
        &copy; {new Date().getFullYear()} Baba Casino. All Rights Reserved. Responsible Gaming Only.
      </footer>
    </div>
  )
}

export default Dashboard