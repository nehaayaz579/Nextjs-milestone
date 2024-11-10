import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
const Service = () => {
  return (
    <>
    <Navbar/>
     <div className="h-[500] w-[700] text-center bg-white ">
       <h1 className="font-semibold tracking-wide
         text-4xl p-3 text-orange-400">Services & Quiries</h1>
         <div className="flex justify-center p-5">
          <Image src="/images/pic41.png" height={450} width={800} className="px-5" alt="pic"/>
         </div> 
       
    </div>

    <div className="h-[500] w-[700] flex justify-center space-x-10 px-8 items-center py-6 bg-white">
      <div className ="flex flex-col items-center">
      <h2 className="font-bold text-4xl px-4 space-x-4">Everyday Makeup</h2>
      </div>
      <div className="p-10 h-[150] w-[200]" >
       <button className="font-bold text-white bg-black px-8 py-2 ">Explore All</button>
      </div>
      </div>
      <div className="flex justify-center h-[600] w-[600] gap-6">
        <Image src="/images/pic42.png" height={400} width={250} alt="pic"/>
        <Image src="/images/pic43.png" height={400} width={250} alt="pic"/>
        <Image src="/images/pic44.png" height={400} width={250} alt="pic"/> 
    </div>
      
    <div className="h-[500] w-[700] flex justify-center space-x-10 px-8 items-center py-6 bg-white">
      <div className ="flex flex-col items-center">
      <h2 className="font-bold text-4xl px-4 space-x-4">Bridal Makeup</h2>
      </div>
      <div className="p-10 h-[150] w-[200]" >
       <button className="font-bold text-white bg-black px-8 py-2 ">Explore All</button>
      </div>
      </div>
      <div className="flex justify-center h-[600] w-[600] gap-6">
        <Image src="/images/pic45.png" height={400} width={250} alt="pic"/>
        <Image src="/images/pic46.png" height={400} width={250} alt="pic"/>
        <Image src="/images/pic47.png" height={400} width={250} alt="pic"/> 
    </div>
     
    <div className="h-[500] w-[700] flex justify-center space-x-10 px-8 items-center py-6 bg-white">
      <div className ="flex flex-col items-center">
      <h2 className="font-bold text-4xl px-4 space-x-4">Special Occassion Makeup</h2>
      </div>
      <div className="p-10 h-[150] w-[200]" >
       <button className="font-bold text-white bg-black px-8 py-2 ">Explore All</button>
      </div>
      </div>
      <div className="flex justify-center h-[600] w-[600] gap-6">
        <Image src="/images/pic48.png" height={400} width={250} alt="pic"/>
        <Image src="/images/pic49.png" height={400} width={250} alt="pic"/>
        <Image src="/images/pic50.png" height={400} width={250} alt="pic"/> 
    </div>
    
    <div className="h-[500] w-[700] flex justify-center space-x-10 px-8 items-center py-6 bg-white">
      <div className ="flex flex-col items-center">
      <h2 className="font-bold text-4xl px-4 space-x-4">Theatrical Makeup</h2>
      </div>
      <div className="p-10 h-[150] w-[200]" >
       <button className="font-bold text-white bg-black px-8 py-2 ">Explore All</button>
      </div>
      </div>
      <div className="flex justify-center h-[600] w-[600] gap-6">
        <Image src="/images/pic42.png" height={400} width={250} alt="pic"/>
        <Image src="/images/pic43.png" height={400} width={250} alt="pic"/>
        <Image src="/images/pic44.png" height={400} width={250} alt="pic"/> 
    </div>
    
    <div className="w-full p-8 h-[600] text-center">
    <h1 className="font-bold text-xl text-orange-500">By Categories</h1>
    <p className="p-3  font-sans">
      <ul>
      <li>Makeup</li>
      <li>Hair</li>
      <li>Skincare</li>
      <li>Waxing</li>
      <li>Spa</li>
      </ul>
      </p>
  </div> 
  <Footer/>
  
    </>
  )
}

export default Service
