import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Withdraw() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("WITHDRAW")

  const [accountTitle, setAccountTitle] = useState("")
  const [method, setMethod] = useState("")
  const [accountNumber, setAccountNumber] = useState("")
  const [message, setMessage] = useState("")

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    if (tab === "HOME") { navigate("/dashboard") }
    else if (tab === "INCOME") { navigate("/income") }
  }

  return (
    <div className="w-full h-screen overflow-y-auto relative font-sans antialiased text-white select-none flex flex-col justify-between"
         style={{ backgroundImage: "url('/images/dashboard-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#0d0e12" }}>
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>

      {/* HEADER BRANDING */}
      <header className="relative z-20 w-full bg-zinc-950/85 border-b border-zinc-800/60 py-4 flex items-center justify-between px-4 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="text-lg sm:text-xl font-black tracking-wider text-yellow-400">BABA CASINO</span>
        </div>
        <div className="text-xs sm:text-sm text-zinc-400 font-bold">Server Live</div>
      </header>

      <main className="relative z-10 w-full flex-grow flex flex-col px-4 sm:px-10 pt-4 sm:pt-6">
        
        {/* TITLE HEAD */}
        <div className="w-full flex flex-col text-left mb-4 sm:mb-6 pl-1">
          <h1 className="text-2xl sm:text-4xl font-black tracking-wide uppercase"><span className="text-white">WITHDRAW </span><span className="text-yellow-400">REQUEST</span></h1>
        </div>

        {/* NAV ROUTERS */}
        <div className="w-full flex bg-zinc-950/90 border border-zinc-800/80 rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-2xl mb-6 sm:mb-8">
          {["HOME", "INCOME", "WITHDRAW"].map((tab) => (
            <button key={tab} onClick={() => handleTabClick(tab)} className={`flex-1 rounded-lg sm:rounded-xl text-xs sm:text-xl font-black tracking-widest py-3 sm:py-3.5 ${activeTab === tab ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black" : "text-zinc-400"}`}>{tab}</button>
          ))}
        </div>

        {/* CONTROL FIELDS WRAPPERS */}
        <div className="w-full flex items-center justify-center flex-grow mb-8 sm:mb-12">
          <div className="w-full max-w-3xl bg-zinc-900/90 border-2 border-zinc-800/80 rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-2xl box-border">
            <div className="mb-5 sm:mb-8 pl-1">
              <h2 className="text-xl sm:text-3xl font-black text-yellow-400 tracking-wide">Account Details</h2>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <label className="block text-[10px] sm:text-xs text-zinc-400 font-black tracking-widest mb-2 uppercase pl-1">Account Title</label>
                <input type="text" value={accountTitle} onChange={(e) => setAccountTitle(e.target.value)} placeholder="Enter account title" className="w-full bg-zinc-950/90 border-2 border-zinc-800 rounded-xl py-3.5 sm:py-4.5 text-white text-sm sm:text-md font-semibold outline-none focus:border-yellow-400 px-4 sm:px-6 box-border" />
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs text-zinc-400 font-black tracking-widest mb-2 uppercase pl-1">Payment Method</label>
                <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full bg-zinc-950/90 border-2 border-zinc-800 rounded-xl py-3.5 sm:py-4.5 text-white text-sm sm:text-md font-semibold outline-none focus:border-yellow-400 px-4 sm:px-6 box-border">
                  <option value="">Select Method</option>
                  <option value="JazzCash">JazzCash</option>
                  <option value="EasyPaisa">EasyPaisa</option>
                  <option value="Bank">Bank Account</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] sm:text-xs text-zinc-400 font-black tracking-widest mb-2 uppercase pl-1">Account Number</label>
                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Enter account number" className="w-full bg-zinc-950/90 border-2 border-zinc-800 rounded-xl py-3.5 sm:py-4.5 text-white text-sm sm:text-md font-semibold outline-none focus:border-yellow-400 px-4 sm:px-6 box-border" />
              </div>

              {message && <div className="bg-red-500/10 border border-red-500/40 text-red-400 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold">{message}</div>}

              <div className="w-full pt-2">
                <button onClick={() => setMessage("Low balance. Minimum withdrawal is 1500 PKR")} className="w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black rounded-xl py-3.5 sm:py-4.5 text-xs sm:text-md font-black tracking-widest hover:brightness-110 transition-all">SUBMIT WITHDRAW</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-zinc-950/95 border-t border-zinc-800/80 text-center text-[10px] sm:text-[11px] text-zinc-500 py-4">&copy; {new Date().getFullYear()} Baba Casino.</footer>
    </div>
  )
}

export default Withdraw