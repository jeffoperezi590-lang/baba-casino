import { useState } from "react"
import { useNavigate } from "react-router-dom"

function FreeGame() {
  const navigate = useNavigate()
  const symbols = ["🍒", "🍋", "⭐", "7️⃣", "💎"]
  const [slot1, setSlot1] = useState("🍒")
  const [slot2, setSlot2] = useState("🍋")
  const [slot3, setSlot3] = useState("⭐")
  const [message, setMessage] = useState("Try your luck 😄")

  const randomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)]

  const spin = () => {
    let s1 = randomSymbol()
    let s2 = randomSymbol()
    let s3 = randomSymbol()
    
    setSlot1(s1)
    setSlot2(s2)
    setSlot3(s3)
    
    if (s1 === s2 && s2 === s3) {
      setMessage("🎉 BIG WIN! AMAZING!")
    } else {
      setMessage("❌ No Win! Try Again")
    }
  }

  return (
    <div className="w-full h-screen overflow-y-auto relative font-sans antialiased text-white select-none flex flex-col justify-between"
         style={{ backgroundImage: "url('/images/dashboard-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#0d0e12" }}>
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>

      {/* HEADER */}
      <header className="relative z-20 w-full bg-zinc-950/85 border-b border-zinc-800/60 backdrop-blur-xl py-3.5 flex items-center justify-between px-4 sm:px-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="/images/logo.png" alt="Baba Casino" className="h-7 sm:h-9 object-contain" onError={(e) => e.target.style.display = 'none'} />
          <span className="text-md sm:text-xl font-black tracking-wider text-yellow-400">BABA CASINO</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 font-bold">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Server Live
        </div>
      </header>

      {/* MAIN CONTAINER LAYOUT */}
      <main className="relative z-10 w-full flex-grow flex items-center justify-center px-4 sm:px-8 py-6">
        <div className="w-full max-w-md bg-zinc-900/90 border-2 border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl text-center box-border">
          
          {/* TITLE HEAD */}
          <h1 className="text-2xl sm:text-4xl font-black text-yellow-400 tracking-wide uppercase mb-10">🎰 CLASSIC SLOTS</h1>

          {/* THREE WHEEL SLOT EMOJI CONTAINERS */}
          <div className="flex justify-center gap-3 sm:gap-4 w-full mb-8">
            {[slot1, slot2, slot3].map((slot, i) => (
              <div key={i} className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl flex items-center justify-center text-4xl sm:text-5xl shadow-xl border-b-4 border-zinc-300 select-none">
                <span className="block">{slot}</span>
              </div>
            ))}
          </div>

          {/* STATUS LOGGER */}
          <div className="text-md sm:text-xl font-black tracking-wide text-amber-500 min-h-[28px] my-6">
            {message}
          </div>

          {/* ACTIONS INTERACTION SECTION */}
          <div className="flex flex-col gap-4 w-full mt-8">
            <button 
              onClick={spin} 
              className="w-full py-4 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black rounded-xl text-sm font-black tracking-widest uppercase shadow-md transition-all duration-200 active:scale-98 hover:brightness-110"
            >
              SPIN GAME
            </button>
            
            <button 
              onClick={() => navigate("/dashboard")} 
              className="w-full bg-zinc-950/80 hover:bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 py-3 rounded-xl text-xs font-black tracking-widest uppercase transition-colors"
            >
              BACK TO DASHBOARD
            </button>
          </div>

        </div>
      </main>

      <footer className="relative z-20 w-full bg-zinc-950/95 border-t border-zinc-800/80 text-center text-[10px] sm:text-[11px] text-zinc-500 py-4 mt-auto">
        &copy; {new Date().getFullYear()} Baba Casino. All Rights Reserved.
      </footer>
    </div>
  )
}

export default FreeGame