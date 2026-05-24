import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Income() {
  const [activeTab, setActiveTab] = useState("INCOME")
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) { setUser(JSON.parse(storedUser)) }
  }, [])

  const transactions = [
    { type: "Deposit", amount: 500, status: "Completed" },
    { type: "Bonus", amount: 500, status: "Completed" },
    { type: "Win", amount: 0, status: "Pending" },
    { type: "VIP Reward", amount: 0, status: "Incomplete" }
  ]

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === "HOME") { navigate("/dashboard") }
    else if (tab === "WITHDRAW") { navigate("/withdraw") }
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

      {/* HEADER */}
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

      {/* MAIN CONTAINER */}
      <main className="relative z-10 w-full flex-grow flex flex-col px-4 sm:px-10 pt-4 sm:pt-6">

        {/* PROFILE/TITLE ROW */}
        <div className="w-full flex flex-row justify-between items-center bg-zinc-900/80 border border-zinc-800/70 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl backdrop-blur-xl mb-5 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-5">
            <h1 className="text-lg sm:text-4xl font-black tracking-wide uppercase">
              <span className="text-white">INCOME </span>
              <span className="text-yellow-400">HISTORY</span>
            </h1>
          </div>
          <div className="flex flex-col items-end sm:items-start gap-0.5">
            <p className="text-zinc-400 text-[8px] sm:text-[11px] font-black tracking-widest uppercase">Wallet</p>
            <div className="bg-gradient-to-r from-yellow-500 to-amber-400 text-black px-2.5 sm:px-7 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-xl font-black">
              PKR {user ? user.balance?.toLocaleString() : "0"}
            </div>
          </div>
        </div>

        {/* MID NAVBAR (ADDED MARGIN BOTTOM FOR EXTRA BOX SPACING) */}
        <div className="w-full flex bg-zinc-950/90 border border-zinc-800/80 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl backdrop-blur-md mb-10 sm:mb-12">
          {["HOME", "INCOME", "WITHDRAW"].map((tab) => (
            <button key={tab} onClick={() => handleTabClick(tab)} className={`flex-1 rounded-lg sm:rounded-xl text-xs sm:text-xl font-black tracking-widest transition-all duration-300 py-3 sm:py-3.5 ${activeTab === tab ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black shadow-lg" : "text-zinc-400 hover:text-white"}`}>{tab}</button>
          ))}
        </div>

        {/* 3 SLIM COMPACT CARDS ROW (ADDED MARGIN BOTTOM TO DETACH FROM DATA TABLE) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          <div className="bg-zinc-900/95 border-2 border-zinc-800/80 rounded-xl sm:rounded-2xl py-4 px-6 shadow-2xl flex flex-col justify-center">
            <p className="text-zinc-400 text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-0.5">Total Deposit</p>
            <h2 className="text-lg sm:text-2xl font-black text-yellow-400 tracking-wide">PKR 500</h2>
          </div>
          <div className="bg-zinc-900/95 border-2 border-zinc-800/80 rounded-xl sm:rounded-2xl py-4 px-6 shadow-2xl flex flex-col justify-center">
            <p className="text-zinc-400 text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-0.5">Total Bonus</p>
            <h2 className="text-lg sm:text-2xl font-black text-yellow-400 tracking-wide">PKR 500</h2>
          </div>
          <div className="bg-zinc-900/95 border-2 border-zinc-800/80 rounded-xl sm:rounded-2xl py-4 px-6 shadow-2xl flex flex-col justify-center">
            <p className="text-zinc-400 text-[10px] sm:text-[11px] font-black tracking-widest uppercase mb-0.5">Total Win</p>
            <h2 className="text-lg sm:text-2xl font-black text-yellow-400 tracking-wide">PKR 0</h2>
          </div>
        </div>

        {/* DATA TABLE CONTAINER (ADDED EXTRA DEEP SPACING AT BOTTOM BEFORE CHART GRAPH) */}
        <div className="bg-zinc-900/90 border-2 border-zinc-800/70 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm mb-12 sm:mb-16 overflow-x-auto w-full">
          <div className="min-w-[480px] sm:w-full">
            <div className="grid grid-cols-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black text-xs sm:text-lg font-black py-3 px-4 sm:px-6">
              <div>TYPE</div><div>AMOUNT</div><div>STATUS</div>
            </div>
            {transactions.map((item, index) => (
              <div key={index} className="grid grid-cols-3 py-4 border-b border-zinc-800/60 text-xs sm:text-md font-bold items-center hover:bg-zinc-800/30 px-4 sm:px-6">
                <div className="text-zinc-100 tracking-wide">{item.type}</div>
                <div className="text-yellow-400 font-black tracking-wider">PKR {item.amount}</div>
                <div>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-black uppercase shadow-md inline-block text-center" style={{ backgroundColor: item.status === "Completed" ? "#10b981" : item.status === "Pending" ? "#f43f5e" : "#f59e0b", color: item.status === "Incomplete" ? "#000" : "#fff" }}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ANALYSIS GRAPH */}
        <div className="w-full bg-zinc-900/90 border-2 border-zinc-800/70 rounded-2xl p-5 shadow-2xl mb-12">
          <p className="text-zinc-400 text-[10px] sm:text-xs font-black tracking-widest uppercase mb-5 text-left pl-1">Earnings Analysis Graph</p>
          <div className="w-full flex items-end justify-between h-36 px-2 border-b border-zinc-800/80 pb-2 gap-3">
            {[{ l: "Deposit", h: "100px" }, { l: "Bonus", h: "100px" }, { l: "Win", h: "8px" }, { l: "VIP", h: "8px" }].map((b, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className={`w-full rounded-t-md transition-all duration-500 ${b.h === "8px" ? "bg-zinc-800" : "bg-gradient-to-t from-yellow-600 to-yellow-400"}`} style={{ height: b.h }}></div>
                <span className="text-zinc-400 text-[9px] sm:text-[11px] font-bold tracking-wider w-full text-center pt-2">{b.l}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
      
      <footer className="relative z-20 w-full bg-zinc-950/95 border-t border-zinc-800/80 text-center text-[10px] sm:text-[11px] text-zinc-500 py-4 mt-auto">&copy; {new Date().getFullYear()} Baba Casino.</footer>
    </div>
  )
}

export default Income