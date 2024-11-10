import React from 'react';
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <div className="bg-slate-300 w-full h-[50px]">
      <div className="flex w-full">
      <div className=" pt-[15px] ml-[20px] max-w-30%">
        <Image src="/images/logo.png" width={250} height={300} alt="logo" />
      </div>
      <div className="flex pt-{40px} w-[70%] text-sans text-xl">
        <ul className="flex gap-20 ml-[30%] text-[20px] font-semibold text-black-500  p-3">
          <li className ="hover:text-orange-400 "><Link href="/">Home</Link></li>
          <li className ="hover:text-orange-400"><Link href="/Service">Services</Link></li>
          <li className ="hover:text-orange-400"><Link href="/About">About Us</Link></li>
          <li className ="hover:text-orange-400"><Link href="/Contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className=" pt-[15px] ml-[20px] max-w-30%">
        <Image src="/images/icons.png" width={150} height={200} alt="logo" />
      </div>
     </div>
     </div>
    </div>
  )
}

export default Navbar
