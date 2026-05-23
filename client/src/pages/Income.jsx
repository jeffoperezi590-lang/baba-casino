import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Income() {
  const [activeTab, setActiveTab] = useState("INCOME")
  const navigate = useNavigate()

  const transactions = [
    { type: "Deposit", amount: 500, status: "Completed" },
    { type: "Bonus", amount: 500, status: "Completed" },
    { type: "Win", amount: 0, status: "Pending" },
    { type: "VIP Reward", amount: 0, status: "Incomplete" }
  ]

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === "HOME") {
      navigate("/dashboard")
    } else if (tab === "WITHDRAW") {
      navigate("/withdraw")
    }
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

      <header className="relative z-20 w-full bg-zinc-950/85 border-b border-zinc-800/60 backdrop-blur-xl py-4 flex items-center justify-between" style={{ paddingLeft: '40px', paddingRight: '60px' }}>
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Baba Casino" className="h-9 object-contain" onError={(e) => e.target.style.display = 'none'} />
          <span className="text-xl font-black tracking-wider text-yellow-400">BABA CASINO</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-zinc-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Server Live
        </div>
      </header>

      <main className="relative z-10 w-full flex-grow flex flex-col" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '25px' }}>

        <div className="w-full flex flex-col gap-1 text-left" style={{ marginBottom: '25px', paddingLeft: '5px' }}>
          <h1 className="text-4xl font-black tracking-wide uppercase">
            <span className="text-white">INCOME </span>
            <span className="text-yellow-400">HISTORY</span>
          </h1>
        </div>

        <div className="w-full flex bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-2 shadow-2xl backdrop-blur-md" style={{ marginBottom: '30px' }}>
          {["HOME", "INCOME", "WITHDRAW"].map((tab) => (
            <button key={tab} onClick={() => handleTabClick(tab)} style={{ paddingTop: '14px', paddingBottom: '14px' }} className={`flex-1 rounded-xl text-xl font-black tracking-widest transition-all duration-300 ${activeTab === tab ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black shadow-lg" : "text-zinc-400 hover:text-white"}`}>{tab}</button>
          ))}
        </div>

        {/* SLIM COMPACT CARDS RESTORED WITH PADDING LEFT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '30px' }}>
          <div className="bg-zinc-900/95 border-2 border-zinc-800/80 rounded-2xl py-3 shadow-2xl backdrop-blur-sm flex flex-col justify-center" style={{ paddingLeft: '28px', paddingRight: '20px' }}>
            <p className="text-zinc-400 text-[11px] font-black tracking-widest uppercase mb-0.5">Total Deposit</p>
            <h2 className="text-xl sm:text-2xl font-black text-yellow-400 tracking-wide">PKR 500</h2>
          </div>
          <div className="bg-zinc-900/95 border-2 border-zinc-800/80 rounded-2xl py-3 shadow-2xl backdrop-blur-sm flex flex-col justify-center" style={{ paddingLeft: '28px', paddingRight: '20px' }}>
            <p className="text-zinc-400 text-[11px] font-black tracking-widest uppercase mb-0.5">Total Bonus</p>
            <h2 className="text-xl sm:text-2xl font-black text-yellow-400 tracking-wide">PKR 500</h2>
          </div>
          <div className="bg-zinc-900/95 border-2 border-zinc-800/80 rounded-2xl py-3 shadow-2xl backdrop-blur-sm flex flex-col justify-center" style={{ paddingLeft: '28px', paddingRight: '20px' }}>
            <p className="text-zinc-400 text-[11px] font-black tracking-widest uppercase mb-0.5">Total Win</p>
            <h2 className="text-xl sm:text-2xl font-black text-yellow-400 tracking-wide">PKR 0</h2>
          </div>
        </div>

        {/* DATA TABLE */}
        <div className="bg-zinc-900/90 border-2 border-zinc-800/70 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm" style={{ marginBottom: '35px' }}>
          <div className="grid grid-cols-3 bg-gradient-to-r from-yellow-500 to-amber-400 text-black text-lg font-black py-4" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            <div>TYPE</div><div>AMOUNT</div><div>STATUS</div>
          </div>
          {transactions.map((item, index) => (
            <div key={index} className="grid grid-cols-3 py-5 border-b border-zinc-800/60 text-md font-bold items-center hover:bg-zinc-800/30" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
              <div className="text-zinc-100 tracking-wide">{item.type}</div>
              <div className="text-yellow-400 font-black tracking-wider">PKR {item.amount}</div>
              <div>
                <span className="px-3 py-1.5 rounded-lg text-xs font-black tracking-wider uppercase shadow-md" style={{ backgroundColor: item.status === "Completed" ? "#10b981" : item.status === "Pending" ? "#f43f5e" : "#f59e0b", color: item.status === "Incomplete" ? "#000" : "#fff" }}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* VISUAL GRAPH ACCURATELY PLACED AT THE END */}
        <div className="w-full bg-zinc-900/90 border-2 border-zinc-800/70 rounded-3xl p-6 shadow-2xl backdrop-blur-sm" style={{ marginBottom: '50px' }}>
          <p className="text-zinc-400 text-xs font-black tracking-widest uppercase mb-6 text-left pl-1">Earnings Analysis Graph</p>
          <div className="w-full flex items-end justify-between h-40 px-4 border-b border-zinc-800/80 pb-2 gap-4">
            {[{ l: "Deposit", h: "100px" }, { l: "Bonus", h: "100px" }, { l: "Win", h: "8px" }, { l: "VIP", h: "8px" }].map((b, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className={`w-full rounded-t-lg transition-all duration-500 ${b.h === "8px" ? "bg-zinc-800" : "bg-gradient-to-t from-yellow-600 to-yellow-400"}`} style={{ height: b.h }}></div>
                <span className="text-zinc-400 text-[11px] font-bold tracking-wider w-full text-center" style={{ paddingLeft: '14px', paddingTop: '10px' }}>{b.l}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
      <footer className="relative z-20 w-full bg-zinc-950/95 border-t border-zinc-800/80 text-center text-[11px] text-zinc-500 py-5 mt-auto">&copy; {new Date().getFullYear()} Baba Casino.</footer>
    </div>
  )
}

export default Income