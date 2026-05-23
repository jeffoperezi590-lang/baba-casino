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

      <header className="relative z-20 w-full bg-zinc-950/85 border-b border-zinc-800/80 backdrop-blur-xl py-4 flex items-center justify-between" style={{ paddingLeft: '40px', paddingRight: '60px' }}>
        <div className="flex items-center gap-3">
          <span className="text-xl font-black tracking-wider text-yellow-400">BABA CASINO</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-zinc-400 font-bold">Server Live</div>
      </header>

      <main className="relative z-10 w-full flex-grow flex flex-col" style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '25px' }}>
        <div className="w-full flex flex-col gap-1 text-left" style={{ marginBottom: '25px', paddingLeft: '5px' }}>
          <h1 className="text-4xl font-black tracking-wide uppercase"><span className="text-white">WITHDRAW </span><span className="text-yellow-400">REQUEST</span></h1>
        </div>

        <div className="w-full flex bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-2 shadow-2xl backdrop-blur-md" style={{ marginBottom: '35px' }}>
          {["HOME", "INCOME", "WITHDRAW"].map((tab) => (
            <button key={tab} onClick={() => handleTabClick(tab)} style={{ paddingTop: '14px', paddingBottom: '14px' }} className={`flex-1 rounded-xl text-xl font-black tracking-widest ${activeTab === tab ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black" : "text-zinc-400"}`}>{tab}</button>
          ))}
        </div>

        <div className="w-full flex items-center justify-center flex-grow" style={{ marginBottom: '55px' }}>
          <div className="w-full max-w-3xl bg-zinc-900/90 border-2 border-zinc-800/80 rounded-3xl p-10 shadow-2xl backdrop-blur-sm">
            <div className="mb-8" style={{ paddingLeft: '8px' }}>
              <h2 className="text-3xl font-black text-yellow-400 tracking-wide">Account Details</h2>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-xs text-zinc-400 font-black tracking-widest mb-2.5 uppercase" style={{ paddingLeft: '8px' }}>Account Title</label>
                <input type="text" value={accountTitle} onChange={(e) => setAccountTitle(e.target.value)} placeholder="Enter account title" style={{ paddingLeft: '24px', paddingRight: '24px' }} className="w-full bg-zinc-950/90 border-2 border-zinc-800 rounded-2xl py-4.5 text-white text-md font-semibold outline-none focus:border-yellow-400" />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 font-black tracking-widest mb-2.5 uppercase" style={{ paddingLeft: '8px' }}>Payment Method</label>
                <select value={method} onChange={(e) => setMethod(e.target.value)} style={{ paddingLeft: '20px', paddingRight: '20px' }} className="w-full bg-zinc-950/90 border-2 border-zinc-800 rounded-2xl py-4.5 text-white text-md font-semibold outline-none focus:border-yellow-400">
                  <option value="">Select Method</option>
                  <option value="JazzCash">JazzCash</option>
                  <option value="EasyPaisa">EasyPaisa</option>
                  <option value="Bank">Bank Account</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 font-black tracking-widest mb-2.5 uppercase" style={{ paddingLeft: '8px' }}>Account Number</label>
                <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Enter account number" style={{ paddingLeft: '24px', paddingRight: '24px' }} className="w-full bg-zinc-950/90 border-2 border-zinc-800 rounded-2xl py-4.5 text-white text-md font-semibold outline-none focus:border-yellow-400" />
              </div>

              {message && <div className="bg-red-500/10 border border-red-500/40 text-red-400 px-5 py-4 rounded-xl text-sm font-bold">{message}</div>}

              <div className="w-full pt-2">
                <button onClick={() => setMessage("Low balance. Minimum withdrawal is 1500 PKR")} style={{ paddingTop: '18px', paddingBottom: '18px' }} className="w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black rounded-xl text-md font-black tracking-widest hover:brightness-110">SUBMIT WITHDRAW</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-zinc-950/95 border-t border-zinc-800/80 text-center text-[11px] text-zinc-500 py-4">&copy; {new Date().getFullYear()} Baba Casino.</footer>
    </div>
  )
}

export default Withdraw