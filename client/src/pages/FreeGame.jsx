import { useState } from "react"
import { useNavigate } from "react-router-dom"

function FreeGame() {
  const navigate = useNavigate()
  const symbols = ["🍒", "🍋", "⭐", "7️⃣", "💎"]
  const [slot1, setSlot1] = useState("🍒")
  const [slot2, setSlot2] = useState("🍋")
  const [slot3, setSlot3] = useState("⭐")
  const [balance, setBalance] = useState(1000)
  const [message, setMessage] = useState("Try your luck 😄")

  const randomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)]

  const spin = () => {
    if (balance <= 0) { return }
    let s1, s2, s3
    do { s1 = randomSymbol(); s2 = randomSymbol(); s3 = randomSymbol(); } while (s1 === s2 && s2 === s3)
    setSlot1(s1); setSlot2(s2); setSlot3(s3);
    setBalance((prev) => prev - 50)
    if (balance - 50 <= 0) setMessage("Game Over 💀")
    else setMessage("❌ No Win! Try Again")
  }

  return (
    <div className="w-full h-screen overflow-y-auto relative font-sans antialiased text-white select-none flex flex-col justify-between"
         style={{ backgroundImage: "url('/images/dashboard-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#0d0e12" }}>
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* HEADER */}
      <header className="relative z-20 w-full bg-zinc-950/85 border-b border-zinc-800/60 py-4 flex items-center justify-between px-6 sm:px-10">
        <div className="flex items-center gap-2"><span className="text-md sm:text-xl font-black text-yellow-400">BABA CASINO</span></div>
        <div className="text-xs text-zinc-400 font-bold">Server Live</div>
      </header>

      {/* MAIN LAYOUT */}
      <main className="relative z-10 w-full flex-grow flex flex-col items-center justify-center px-4 sm:px-8 py-6">
        <div className="w-full max-w-md bg-zinc-900/90 border-2 border-zinc-800/80 rounded-3xl px-5 sm:px-8 pb-8 shadow-2xl text-center" style={{ paddingTop: '40px' }}>
          <h1 className="text-3xl sm:text-4xl font-black text-yellow-400 tracking-wide uppercase mb-8">🎰 CLASSIC SLOTS</h1>

          {/* THREE WHEEL SLOT EMOJI CONTAINERS */}
          <div className="flex justify-center gap-3 sm:gap-4 w-full mb-8">
            {[slot1, slot2, slot3].map((slot, i) => (
              <div key={i} className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl flex items-center justify-center text-4xl sm:text-5xl shadow-xl select-none">
                <span className="block mt-[-1px]">{slot}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 w-full" style={{ marginTop: '25px' }}>
            <button onClick={spin} disabled={balance <= 0} className={`w-full py-3.5 rounded-xl text-sm font-black tracking-widest uppercase shadow-md ${balance <= 0 ? "bg-zinc-800 text-zinc-500" : "bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black"}`}>SPIN</button>
            <button onClick={() => navigate("/dashboard")} className="w-full bg-zinc-950/80 text-zinc-400 border border-zinc-800 py-3 rounded-xl text-xs font-black tracking-widest">BACK TO DASHBOARD</button>
          </div>

          <div className="mt-6 text-lg font-black tracking-wide text-amber-500">{message}</div>
        </div>
      </main>

      <footer className="w-full bg-zinc-950/95 border-t border-zinc-800/80 text-center text-[10px] text-zinc-500 py-4">&copy; {new Date().getFullYear()} Baba Casino.</footer>
    </div>
  )
}

export default FreeGame