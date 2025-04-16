const Footer = () => {
    return (
      <footer className="bg-[#1f1f1f] text-white py-12 font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Tagline */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide text-whit-400">Charmis</h2>
            <p className="mt-3 text-sm text-gray-400">
              Where elegance meets bold. Unleash your inner goddess with every piece.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white transition-all cursor-pointer">Home</li>
              <li className="hover:text-white transition-all cursor-pointer">Shop</li>
              <li className="hover:text-white transition-all cursor-pointer">Collections</li>
              <li className="hover:text-white transition-all cursor-pointer">Contact</li>
            </ul>
          </div>
  
          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white transition-all cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-white transition-all cursor-pointer">FAQs</li>
              <li className="hover:text-white transition-all cursor-pointer">Size Guide</li>
              <li className="hover:text-white transition-all cursor-pointer">Support</li>
            </ul>
          </div>
  
          {/* Stay Connected */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-yellow-800">Stay Connected</h4>
            <p className="text-sm text-gray-400 mb-4">Get the latest drops, offers, and behind-the-scenes love.</p>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-full text-sm bg-gray-700 text-white focus:outline-none placeholder:text-gray-400"
              />
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} CHARMIS. All rights reserved. | Made with 💖
        </div>
      </footer>
    );
  };
  
  export default Footer;
  