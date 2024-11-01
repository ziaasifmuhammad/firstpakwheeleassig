

import React from "react";
import Navbar from "./Navbar";
 
const Sell = () => {
    return(
        
   <section className="">
    <Navbar/>
<div className="px-2 py-2 m-3 p-2 border-x-4 border-y-4 grid grid-cols-1 divide-y">
    <h1 className="text-center font-bold text-4xl py-3 pb-10 ">Sell Your Car on PakWheels and Get the Best Price</h1>
    <h2 className="font-semibold  text-3xl ">Post your Ad on PakWheels</h2>
    <ul className="list-outside"> 
        <li className="m-3">Post your Ad for Free in 3 Easy Steps</li>
        <li className="m-3">Get Genuine offers from Verified Buyers</li>
        <li className="m-3">Sell your car Fast at the Best Price</li>
    
    <button className="bg-blue-500 text-white hover:bg-slate-500 m-3 font-bold-h-15 w-40 rounded-3xl py-3 px-2">POST YOUR ADD</button>
    </ul>
    <br />

    <br />
    <br />

    <h2 className="font-semibold text-3xl">Try PakWheels Sell It For Me</h2>
    <ul className="list-outside">
        <li className="m-3">Dedicated Sales Expert to Sell your Car</li>
        <li className="m-3">Get Genuine offers from Verified Buyers</li>
        <li className="m-3">We ensure Safe & Secure Transaction</li>
    
    <button className="bg-red-600 text-white hover:bg-slate-500 m-3 font-bold-h-15 w-35 rounded-3xl py-3 px-2">REGISTER YOUR CAR</button>
</ul>
</div>
</section>
                               
    )
}

export default Sell;
