
import Link from "next/link";
import React from "react";
export const matadata = {
    tittle: "Auto Store"
}
const page = () => {
    return (
        <section >
            <div className="flex justify-center align-middle items-center ">
                <h1 className="text-4xl py-3 pt-4 items-center font-bold">Auto Store Car Parts & Accessories</h1>
            </div>
            <div>
                <ul className="flex space-x-8 font-medium pt-30 pl-4 text-2xl">
                    <li><Link href="/subCatogery" className="hover:bg-red-500 "> SUB Catogery</Link></li>

                    <li><Link href="/make" className="hover:bg-red-500">MAKE</Link></li>
                    <li><Link href="/model" className="hover:bg-red-500">MODEL</Link></li>
                    <li><Link href="/brand" className="hover:bg-red-500">BRAND</Link></li>

                </ul>
            </div>
            <div className="">
                <ul className="grid grid-cols-4 gap-4 h-23 w-23 ml-8 mr-8 pt-6">

                    <li><img src="./air-freshner.png"></img></li>
                    <li><img src="./bumpers.png"></img></li>
                    <li><img src="./car-top-covers.png"></img></li>
                    <li><img src="./coolants.png"></img></li>
                    <li><img src="./fenders.png"></img></li>
                    <li><img src="./floor-mats.png"></img></li>
                    <li><img src="./headlights.png"></img></li>
                    <li><img src="./hoses-pipes.png"></img></li>

                </ul>
            </div>
        </section>
    )
}
export default page