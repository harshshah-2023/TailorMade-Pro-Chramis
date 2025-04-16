import React from "react";
import { FaShippingFast, FaHeadset, FaExchangeAlt } from "react-icons/fa";
import { BsShieldShaded } from "react-icons/bs";
import { Button } from "../components/ui/button";
import lehenga from "../assets/Lehenga.jfif";
import earring2 from "../assets/earing2.jpg";
import handring from "../assets/handring.jfif";
import pendant from "../assets/pendant.jfif";
import pink from "../assets/pink.jfif";
import morden from "../assets/morden.jfif";
import spaghetti from "../assets/Spaghetti.jfif";
import cutejewl from "../assets/cuteJewl.jfif";
import modeljewl from "../assets/modelJewl.jfif";
import legjewl from "../assets/legac.jfif";
import waistchain from "../assets/waistchain.jfif";

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#f8f1ea] text-[#3b2e28] font-serif">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:px-10">
    {/* Hide these images on small screens */}
    <img
      src={earring2}
      className="rounded-md w-full h-auto max-h-[300px] object-cover md:block hidden"
      alt="earring"
    />
    <div>
      <h2 className="text-3xl md:text-5xl font-light leading-snug">
        The New Charmis <br /> collection is live!
      </h2>
    </div>
    <img
      src={handring}
      className="rounded-md w-full h-auto max-h-[300px] object-cover md:block hidden"
      alt="hand ring"
    />
  </div>
  <p className="text-lg mt-6 tracking-widest uppercase">Shop Now</p>
</section>

      {/* Welcome Section */}
      <section className="bg-[#bb8e72] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src={pendant} alt="model" className="rounded-t-full w-[250px] md:w-[400px] object-cover mx-auto" />
          <div>
            <h3 className="text-3xl md:text-4xl font-normal mb-4">Welcome</h3>
            <p className="mb-6 text-xl md:text-2xl">
              Unleash your inner muse with pieces that celebrate your unique beauty.
            </p>
            <Button className="bg-white text-[#bb8e72] hover:bg-gray-100">
              Step into style
            </Button>
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="py-14 bg-[#f9f6f3] px-4">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-light pb-4">Choose Your Style</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{ img: lehenga, title: "Lehenga", desc: "Elegant designs for special occasions" },
            { img: pink, title: "Kurti", desc: "Comfort meets style in everyday wear" },
            { img: morden, title: "Tops", desc: "Trendy tops for every vibe" },
            { img: spaghetti, title: "Jeans", desc: "Bold & chic — for your everyday fit" }]
            .map((item, idx) => (
              <div key={idx} className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md">
                <img src={item.img} className="rounded-md w-full h-[250px] object-cover" alt={item.title} />
                <p className="mt-2 text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* On Sale Banner */}
      <section
        className="relative bg-cover bg-center py-24 text-center text-white"
        style={{ backgroundImage: `url(${pendant})` }}
      >
        <div className="bg-black bg-opacity-30 py-10">
          <p className="text-lg tracking-wider mb-2">So many choices</p>
          <h2 className="text-3xl md:text-5xl font-light">ON SALE</h2>
          <Button className="mt-6 bg-white text-black hover:bg-gray-200">
            SHOP NOW
          </Button>
        </div>
      </section>

      {/* Choose Your Adventure Section */}
      <section className="py-16 px-4 text-center bg-[#f8f1ea]">
        <h3 className="text-2xl md:text-3xl font-light mb-4">Find Your Perfect Look</h3>
        <p className="mb-8 max-w-xl mx-auto text-sm text-gray-700">
          From bold statements to subtle charm, explore styles that elevate every moment.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[legjewl, cutejewl, waistchain].map((imgSrc, index) => (
            <img key={index} src={imgSrc} className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md w-full h-[250px] object-cover" alt={`look${index + 1}`} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 text-black py-16 font-serif">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <FaShippingFast />, title: "Free Shipping", desc: "Free shipping on orders above ₹2000" },
            { icon: <BsShieldShaded />, title: "Guarantee", desc: "We guarantee perfect fit! 100% satisfaction" },
            { icon: <FaExchangeAlt />, title: "Exchange", desc: "Easy 5 day exchange policy" },
            { icon: <FaHeadset />, title: "Support", desc: "Get help 24/7" }
          ].map((feature, i) => (
            <div key={i}>
              <div className="text-yellow-950 text-4xl mx-auto mb-4">{feature.icon}</div>
              <h4 className="uppercase tracking-widest mb-2">{feature.title}</h4>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
