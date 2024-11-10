import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
const About = () => {
  return (
    <>
    
     <Navbar/> 
     <div className="h-[500] w-[700] flex justify-center bg-white ">
      <Image src="/images/pic33.png" height={450} width={1200} className="px-5" alt="pic"/> 
    </div>
    <div className="h-[1500] w-full py-5 text-center">
       <h1 className="font-bold text-4xl py-7">Our Story</h1>

     <p className=" font-normal p-2 py-3" >Since 2012 in a charming Hawaii Town, Serene Beauty emerged as a haven for beauty and tranquility.<br/> Founded by Sarah, a passionate hairstylist, the salons simple yet profound vision was to enhance natural<br/> beauty while providing a peaceful escape.<br/>

With time, Serene Beautys dedicated team grew, offering a range of services from esthetics to makeup. It<br/> became a beloved part of the community, known for its serene ambiance and commitment to giving back<br/> through charity events.</p>
    </div>
    <div className="flex justify-center h-[600] w-[600] gap-6">
    <Image src="/images/pic34.png" height={400} width={250} alt="pic"/>
    <Image src="/images/pic35.png" height={400} width={250} alt="pic"/>
    <Image src="/images/pic36.png" height={400} width={250} alt="pic"/> 
    </div>
    <div className="h-[500] w-[700] flex justify-center py-12 bg-white">
      <Image src="/images/pic40.png" height={450} width={800} className="px-5" alt="pic"/>
    </div>  
    <div className="h-[500] w-[700] flex justify-center space-x-10 px-8 items-center py-6 bg-white">
      <div className ="flex flex-col items-center">
      <h2 className="font-bold text-5xl px-4">Meet Our Team</h2>
      <p className=" font-normal p-2 py-3" >Allow me to introduce you to the talented individuals who<br/> make Serene Beauty the extraordinary place it is.</p>
      </div>
      <div className="p-10 h-[150] w-[200]" >
       <button className="font-bold text-white bg-black px-8 py-2 ">Explore All Team</button>
      </div>
      </div>
      <div className="flex justify-center h-[600] w-[600] gap-6">
    <Image src="/images/pic37.png" height={400} width={250} alt="pic"/>
    <Image src="/images/pic38.png" height={400} width={250} alt="pic"/>
    <Image src="/images/pic39.png" height={400} width={250} alt="pic"/> 
    </div>
    
  <div className="flex w-[700] h-[600] justify-center bg-slate-50 p-10">
  <div className="w-full p-250  text-center">
    <h1 className="font-bold text-xl text-orange-500">Brand</h1>
    <p className="p-3  font-sans">
      <ul>
      <li>Our Story</li>
      <li>Career</li>
      <li>Privacy Policy</li>
      </ul>
      </p>
  </div>
  <div className="w-full p-250  text-center">
    <h1 className="font-bold text-xl text-orange-500">Support</h1>
    <p className="p-3  font-sans">
      <ul>
      <li>Booking</li>
      <li>Exchange & Return</li>
      <li>Terms of Service</li>
      </ul>
      </p>
  </div>
  <div className="w-full p-250  text-center">
    <h1 className="font-bold text-xl text-orange-500">Connect</h1>
    <p className="p-3 font-sans"><ul>
      <li>Twitter</li>
      <li>Instagram</li>
      <li>Youtube</li>
      <li>Printerest</li></ul></p>
  </div>
  </div>
  <Footer/>
    </>
  )
}

export default About
