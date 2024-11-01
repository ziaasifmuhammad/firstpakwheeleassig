
import React from "react";
 export const matadata ={
    tittle: "Login Forum"
 }
const page  = () => {
    return(
        <div>




<h1 className="text-5xl font-semibold text-center uppercase py-20">
                Enter Your Detail
            </h1>

            <div>
            <form className="mt-10 flex gap-6 justify-center items-center flex-col border">
                <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Email" />

                <input type="password" className="p-2 rounded-2xl w-2/5 border border-red-800" 
                placeholder="Enter your Password" />

                <button className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Place your order</button>
            </form>
            </div>
        
        </div>
    )
}
    export default page