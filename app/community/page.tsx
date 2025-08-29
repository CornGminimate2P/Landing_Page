'use client'

export default function Community() {
  return (
    <main className="min-h-screen bg-[#0a1628] pt-20 flex items-center justify-center">
      <div className="text-center">
        <style jsx>{`
          @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes dots {
            0%, 20% { content: '.'; }
            40% { content: '..'; }
            60%, 100% { content: '...'; }
          }
          
          .floating-emoji {
            animation: floating 3s ease-in-out infinite;
          }
          
          .animated-dots::after {
            content: '...';
            animation: dots 1.5s infinite;
          }
        `}</style>
        
        <h1 className="text-5xl md:text-6xl font-black text-[#ffd54f] mb-4">
          <span className="inline-block floating-emoji text-6xl md:text-7xl mb-2">😴</span>
          <br />
          <span>Taking a quick nap</span>
          <span className="animated-dots"></span>
        </h1>
        <p className="text-xl text-gray-300 animate-[fadeIn_1s_ease-in_0.5s_forwards]">
          Be back soon with something awesome!
        </p>
      </div>
    </main>
  )
}
