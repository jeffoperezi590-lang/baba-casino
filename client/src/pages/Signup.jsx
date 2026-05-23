import { useNavigate } from "react-router-dom"

function Signup() {
  const navigate = useNavigate()
  const whatsappNumber = "923407479740"

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}`,
      "_blank"
    )
  }

  return (
    <div 
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4 select-none font-sans antialiased relative"
      style={{
        backgroundImage: "url('/images/dashboard-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* CASINO BACKGROUND TRANSPARENCY LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none z-0"></div>

      {/* MAIN INTERACTIVE CONTENT LAYER */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-xl">
        
        {/* VIP ACCESS TITLE */}
        <h1 className="text-4xl sm:text-6xl font-black text-yellow-400 mb-6 sm:mb-8 tracking-wide drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
          VIP ACCESS
        </h1>

        {/* QR CODE CONTAINER */}
        <img
          src="/images/qr.png"
          alt="QR"
          className="w-64 sm:w-72 rounded-2xl border-4 border-yellow-400 shadow-[0_0_40px_rgba(255,215,0,0.5)] mb-6 sm:mb-8 transition-transform duration-300 hover:scale-[1.02]"
          onError={(e) => { e.target.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://wa.me/923496049566" }}
        />

        {/* DESCRIPTIVE TEXT */}
        <p className="text-lg sm:text-2xl text-zinc-300 leading-relaxed mb-8 sm:mb-10 font-bold px-4 tracking-wide">
          Scan the QR Code or contact the owner on WhatsApp <br />
          to receive your VIP Login credentials.
        </p>

        {/* CONTROLS BUTTONS SECTION */}
        <div className="flex flex-col items-center gap-5 w-full max-w-[420px] px-2">
          
          {/* WHATSAPP ACTION BUTTON (DYNAMIC RESPONSIVE RESTRUCTURING) */}
          <button
            onClick={openWhatsApp}
            style={{ boxSizing: 'border-box' }}
            className="w-full py-4.5 sm:py-6 min-h-[85px] sm:min-h-[95px] flex items-center justify-center bg-black/70 text-yellow-400 text-xl sm:text-3xl font-black rounded-[25px] sm:rounded-[30px] border-[3px] border-yellow-400 shadow-[0_5px_30px_rgba(255,215,0,0.3)] hover:bg-gradient-to-r hover:from-yellow-500 hover:via-amber-400 hover:to-yellow-500 hover:text-black hover:scale-[1.02] active:scale-98 transition duration-300 tracking-wider uppercase"
          >
            CLICK TO GET CREDENTIALS
          </button>

          {/* DYNAMIC BACK TO HOME ROUTING ACTION LINK */}
          <button
            onClick={() => navigate("/")}
            className="w-full text-zinc-400 hover:text-yellow-400 text-md sm:text-xl font-black tracking-widest uppercase transition-colors py-2 text-center active:scale-95"
          >
            BACK TO HOME
          </button>

        </div>

      </div>
    </div>
  )
}

export default Signup