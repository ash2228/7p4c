"use client"
import { useEffect, useRef, useState } from "react"
import { Bebas_Neue,Roboto_Serif } from "next/font/google"

const font = Bebas_Neue({weight:"400",subsets:["latin"]})
const serif = Roboto_Serif({weight:"400",subsets:["latin"]});
export default function Home(){
  const [nav,setNav] = useState(null);
  const [para,setPara] = useState("");
  
  const word = "It is astonishing to see how billions of atoms could bond together in perfect combinations to form a single DNA – the core of a human life. This has been the inspiration behind seven-Pitstops-For-Change (7p4c), the world's first such journey for transformation set in the backdrop of incredible India. Be ready to experience hundreds of tiny and big travel experiences in India, woven together in the perfect combination and proportion and to be experienced in the perfect environment with the perfect blend of people with unimaginably diverse backgrounds.";
  useEffect(()=>{
    let i = 0;
    let newword = "";
    setInterval(()=>{
      if(i<word.length){
        newword += para+word[i++];
        setPara(newword);
      }
    },[10])
  },[])
  return(<>
  <div className={`list-none bg-[#F1EDEB] fixed w-full h-full flex ${nav!=null?nav?"navin":"navout":"hidden"} xl:pl-20 pl-6 flex-col justify-center gap-5 text-7xl`} style={serif.style}>
      <li className={`${nav!=null?nav?"first":"opacity-0 transition":"hidden"}`}>Index</li>
      <li className={`${nav!=null?nav?"second":"opacity-0 transition":"hidden"}`}>Journey</li>
      <li className={`${nav!=null?nav?"third":"opacity-0 transition":"hidden"}`}>Music</li>
      <li className={`${nav!=null?nav?"fourth":"opacity-0 transition":"hidden"}`}>Register</li>
  </div>
  <div className={`fixed text-white w-full flex pt-5 justify-center ${font.className}`}>
    <div className="flex flex-col">
    <span className={`mx-auto text-2xl ${nav&&"text-black xl:text-white"}`}>7P4C</span>
    </div>
    <div className={`select-none fixed text-3xl right-5 top-3 flex rounded-full h-[40px] w-[40px] justify-center hover:rotate-180 transition-all z-20 ${nav?"text-white bg-black":"bg-white text-black"}`} onClick={()=>{setNav(!nav)}}>
      <span className="-mt-[6px]">.</span>
      <span className="-mt-[6px]">.</span>
    </div>
    <div>
    </div>
  </div>
  <div className={`pt-20 px-5 text-white ${font.className} xl:ml-10 xl:pt-40`}>
  <h1 className="mt-10 text-7xl">7 Pistons for change</h1>
  <h1 className="mt-5 xl:w-[50%]">{para}</h1>
  </div>
  </>)
}