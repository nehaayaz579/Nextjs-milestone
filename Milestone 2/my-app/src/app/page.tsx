import Image from "next/image";
import React from 'react';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    
    
    <div className="h-[1500] w-full text-center">
       <p className="font-sans-70 font-normal p-2 text-orange-400" >Where Tranquility Meets Transformation.</p>
       <h1 className="font-semibold tracking-wide
         text-4xl font- p-3" >We show your skin, hair, and<br/> body the care and attention<br/> they deserve.</h1>
       <div className="p-10 h-[150] w-[200]" >
       <button className="font-bold text-white bg-black px-6 py-2">Book Now</button>
      </div>
    </div>
    <div className="h-[500] w-[700] flex justify-center bg-white ">
      <Image src="/images/pic1.png" height={450} width={800} className="px-5" alt="pic"/>
    </div>
    <div className="h-[500] w-[700] flex justify-center py-16 bg-white ">
      <h2 className="font-bold text-4xl">Enhance your inner radiance<br/> at our beauty sanctuary and<br/> let your true beauty shine.</h2>
      <div className="p-10 h-[150] w-[200]" >
       <button className="font-bold text-white bg-black px-6 py-2">Explore Service</button>
      </div> 
    </div>
    <div className="flex justify-center h-[600] w-[600] gap-6">
    <Image src="/images/pic2.png" height={250} width={300} alt="pic"/>
    <Image src="/images/pic3.png" height={250} width={300} alt="pic"/>
    <Image src="/images/pic4.png" height={250} width={300} alt="pic"/> 
    </div>
    <div className="h-[500] w-[700] flex justify-center bg-white">
      <Image src="/images/pic5.png" height={450} width={800} className="px-5" alt="pic"/>
    </div> 
    <div className="h-[500] w-[700] flex justify-center space-x-7 items-center py-6 bg-white">
      <h2 className="font-bold text-5xl py-8">Featured</h2>
      <div className="p-10 h-[150] w-[200]" >
       <button className="font-bold text-white bg-black px-8 py-2 ">Explore Collection</button>
      </div>
      </div>
      <div className="flex justify-center h-[600] w-[600] space-x-20">
        <Image src="/images/pic01.png" height={250} width={300} alt="pic"/>
        <Image src="/images/pic02.png" height={250} width={300} alt="pic"/>
      </div>
      <Footer/> 

    </>
  );
}
