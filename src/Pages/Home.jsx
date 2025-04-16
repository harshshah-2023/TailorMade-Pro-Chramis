import React from "react";
import { FaShippingFast, FaHeadset, FaExchangeAlt } from "react-icons/fa";
import { BsShieldShaded } from "react-icons/bs";
import { Button } from "../components/ui/button";
import lehenga from "../assets/Lehenga.jfif"
import earring2 from "../assets/earing2.jpg"
import handring from "../assets/handring.jfif"
import pendant from "../assets/pendant.jfif"
import pink from "../assets/pink.jfif"
import morden from "../assets/morden.jfif"
import spaghetti from "../assets/Spaghetti.jfif"
import cutejewl from "../assets/cuteJewl.jfif"
import modeljewl from "../assets/modelJewl.jfif"
import legjewl from "../assets/legac.jfif"
import waistchain from "../assets/waistchain.jfif"

const HomePage = () => {
  return (
    <div className="w-full">
    <div className="w-full overflow-x-hidden bg-[#f8f1ea] text-[#3b2e28] font-serif">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <div className="grid grid-cols-3 gap-4  md:px-10 items-center">
          <img src={earring2} className="rounded-md h-[300px] w-[600px]" alt="earring" />
          <div>
            <h2 className="text-5xl font-light leading-snug">
              The New Charmis <br /> collection is live!
            </h2>
          </div>
          <img src={handring} className="rounded-md h-[300px] w-[600px] " alt="hand ring" />
        </div>
        <p className="text-lg mt-6 tracking-widest uppercase">Shop Now</p>
      </section>

      {/* Welcome Section */}
      <section className="bg-[#bb8e72] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img src={pendant} alt="model" className="rounded-t-full w-[400px] h-82 object-cover mx-auto" />
          <div>
            <h3 className="text-4xl font-normal mb-4">Welcome</h3>
            <p className="mb-6 text-2xl">
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
      <div class="flex justify-center items-center">
  <h2 class="text-4xl font-light pb-4">Choose Your Style</h2>
</div>
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center cursor-pointer">

    {/* Lehenga */}
    <div className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md">
      <img src={lehenga} className="rounded-md h-65 w-[500px] object-contain" alt="Lehenga" />
      <p className="mt-2 text-xl font-semibold">Lehenga</p>
      <p className="text-base text-gray-600">Elegant designs for special occasions</p>
    </div>

    {/* Kurti */ }
    <div className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md">
      <img src={pink} className="rounded-md h-65 w-[500px]  object-contain" alt="Kurti" />
      <p className="mt-2 text-xl font-semibold">Kurti</p>
      <p className="text-base text-gray-600">Comfort meets style in everyday wear</p>
    </div>

    {/* Tops */}
    <div className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md">
      <img src={morden} className="rounded-md h-65 w-[500px]  object-contain" alt="Tops" />
      <p className="mt-2 text-xl font-semibold">Tops</p>
      <p className="text-base text-gray-600">Trendy tops for every vibe</p>
    </div>

    {/* Jeans */}
    <div className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md">
      <img src={spaghetti} className="rounded-md h-65 w-[500px]  object-contain" alt="Jeans" />
      <p className="mt-2 text-xl font-semibold">Jeans</p>
      <p className="text-base text-gray-600">Bold & chic — for your everyday fit</p>
    </div>
  </div>
</section>

      {/* On Sale Banner */}
      <section
  className="relative bg-cover bg-center py-24 text-center text-white"
  style={{ backgroundImage: `url(${pendant})` }}
>
  <div className="bg-black bg-opacity-30 py-10">
    <p className="text-xl tracking-wider mb-2">So many choices</p>
    <h2 className="text-5xl font-light">ON SALE</h2>
    <Button className="mt-6 bg-white text-black hover:bg-gray-200">
      SHOP NOW
    </Button>
  </div>
</section>










      {/* Choose Your Adventure Section */}
      <section className="py-16 px-4 text-center bg-[#f8f1ea]">
        <h3 className="text-3xl font-light mb-4">Find Your Perfect Look
</h3>
        <p className="mb-8 max-w-xl mx-auto text-sm text-gray-700">
        From bold statements to subtle charm, explore styles that elevate every moment.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 ">
          <img src={legjewl} className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md" alt="look1" />
          <img src={cutejewl} className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md" alt="look2" />
          <img src={waistchain} className="cursor-pointer overflow-hidden rounded-md transition-transform duration-500 hover:scale-105 hover:shadow-md" alt="look3" />
        </div>
      </section>

      <section className="bg-gray-200 text-black py-16 font-serif">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Free Shipping */}
        <div>
          <FaShippingFast className="text-yellow-950 text-4xl mx-auto mb-4" />
          <h4 className="uppercase tracking-widest mb-2">Free Shipping</h4>
          <p className="text-sm">Free shipping on orders above ₹2000</p>
        </div>

        {/* Guarantee */}
        <div>
          <BsShieldShaded className="text-yellow-950  text-4xl mx-auto mb-4" />
          <h4 className="uppercase tracking-widest mb-2">Guarantee</h4>
          <p className="text-sm">We guarantee perfect fit! 100% satisfaction</p>
        </div>

        {/* Exchange */}
        <div>
          <FaExchangeAlt className="text-yellow-950  text-4xl mx-auto mb-4" />
          <h4 className="uppercase tracking-widest mb-2">Exchange</h4>
          <p className="text-sm">Easy 5 day exchange policy</p>
        </div>

        {/* Support */}
        <div>
          <FaHeadset className="text-yellow-950 text-4xl mx-auto mb-4" />
          <h4 className="uppercase tracking-widest mb-2">Support</h4>
          <p className="text-sm">Get help 24/7</p>
        </div>
      </div>
    </section>

      
    </div>
    </div>
  );
};

export default HomePage;
