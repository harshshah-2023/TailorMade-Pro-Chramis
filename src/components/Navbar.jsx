import React from 'react'

function Navbar() {
  return (
    <div className='w-full'>
      

      <div className="bg-black text-white text-sm overflow-hidden whitespace-nowrap py-2">
  <div className="inline-flex animate-marquee gap-12 min-w-full px-4">
    <span>💎 New arrival: Crystal Anklets – limited stock!</span>
    <span>🔥 Flat 20% off on waist chains – this week only!</span>
    <span>✨ Buy 2, Get 1 FREE – on all cute charms!</span>
    <span>👜 Handcrafted bags dropping this Friday – stay tuned!</span>
    <span>💖 Free shipping above ₹2000 – slay without delay!</span>
  </div>
</div>



      
            <header className="flex flex-col justify-between items-center px-10 py-6 border-b border-gray-300">
                <div>
        <h1 className="text-2xl font-bold tracking-widest">CHARMIS</h1>
        <div className=""></div>
        </div>
        <nav className="space-x-6">
          <a href="#" className="border-b-2 border-[#3b2e28] pb-1">HOME</a>
          <a href="#">SHOP</a>
          <a href="#">NEW COLLECTION</a>
          <a href="#">ORDER</a>
          <a href="#">CONTACT</a>
        </nav>
        <div className="flex space-x-4 text-lg">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </header>


    </div>
  )
}

export default Navbar