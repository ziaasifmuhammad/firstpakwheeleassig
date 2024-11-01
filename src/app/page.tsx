import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sell from "./components/Sell";

 import Footer from "./components/Footer";
 import Body from "./components/Body";
 
import Thanks from "./components/Thanks"

import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>

<div className="h-[80vh]">
<Hero/>
</div>
  <Navbar />
  

  <Body/>

  <Sell/>

  <Thanks/>

  <Footer/>

    </div>
  )
}
