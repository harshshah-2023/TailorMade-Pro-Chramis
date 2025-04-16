import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='w-full'>
      {/* Marquee Section */}
      <div className="bg-black text-white text-sm overflow-hidden whitespace-nowrap py-2">
        <div className="inline-flex animate-marquee gap-12 min-w-full px-4">
          <span>💎 New arrival: Crystal Anklets – limited stock!</span>
          <span>🔥 Flat 20% off on waist chains – this week only!</span>
          <span>✨ Buy 2, Get 1 FREE – on all cute charms!</span>
          <span>👜 Handcrafted bags dropping this Friday – stay tuned!</span>
          <span>💖 Free shipping above ₹2000 – slay without delay!</span>
        </div>
      </div>

      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-center px-10 py-6 border-b border-gray-300">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-2xl font-bold tracking-widest">CHARMIS</h1>
          
          {/* Hamburger Menu for Mobile */}
          <button 
            className="md:hidden text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`space-y-4 md:space-x-6 md:flex md:space-y-0 mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="border-b-2 border-[#3b2e28] pb-1">HOME</a>
          <a href="#">SHOP</a>
          <a href="#">NEW COLLECTION</a>
          <a href="#">ORDER</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-lg mt-4 md:mt-0">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </header>
    </div>
  )
}

export default Navbar;
