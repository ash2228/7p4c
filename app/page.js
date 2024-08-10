"use client"
import { useEffect, useRef, useState } from "react"
import { Bebas_Neue,Roboto_Serif } from "next/font/google"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import {useRouter} from "next/navigation"

const font = Bebas_Neue({weight:"400",subsets:["latin"]})
const serif = Roboto_Serif({weight:"400",subsets:["latin"]});
let trans = false
export default function Home(){
  const [nav,setNav] = useState(null);
  const [para,setPara] = useState("");
  const word = "It is astonishing to see how billions of atoms could bond together in perfect combinations to form a single DNA - the core of a human life. This has been the inspiration behind seven-Pitstops-For-Change (7p4c), the world's first such journey for transformation set in the backdrop of incredible India. Be ready to experience hundreds of tiny and big travel experiences in India, woven together in the perfect combination and proportion and to be experienced in the perfect environment with the perfect blend of people with unimaginably diverse backgrounds.";
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
  useEffect(()=>{
    if(document!==undefined){
      document.body.style.overflow = "auto"
    }
    trans=false
  },1000)
  const canvasRef = useRef();

  return(<>
  <div className={`fixed h-[100vh] w-[100vw] backdrop-blur-sm ${nav?"block":"hidden"}`} onClick={()=>{setNav(!nav)}}></div>
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
  <div className={`pt-20 px-5 text-white ${font.className} xl:ml-10 xl:pt-40 h-[80vh]`}>
  <h1 className="mt-10 text-7xl">7 Pistons for change</h1>
  <h1 className="mt-5 xl:w-[50%]">{para}</h1>
  <img src="dna.png" alt="" className="xl:h-60 floating xl:right-20 rotate-45 xl:top-52 absolute -z-30 h-40 top-72 blur-sm xl:blur-0" />
  </div>
  <div className={`text-white ${serif.className} px-5 xl:ml-10`}>
  <h1 className={`text-sm image-bg`}>See below how 7p4c with its chemistry of perfection can leave you with a newborn vision, impact and wisdom to lead life.</h1>
  </div>
  <div className="h-[100vh] w-full absolute -z-10 py-32 xl:py-0">
    <Canvas camera={{position:[0,0,20]}} className="cursor-grab w-full h-full" ref={canvasRef}>
      <Sphere/>
      <OrbitControls enablePan={false} enableZoom={false}/>
    </Canvas>
    <div className="flex items-center justify-center xl:pb-20">
    <button
    onClick={()=>{trans=true}}
  style={{
    WebkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4))'
  }}
  className="absolute px-10 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-xl group-hover:shadow-2xl group-hover:shadow-red-600 shadow-red-600 uppercase font-serif tracking-widest overflow-hidden group text-transparent cursor-pointer z-10 after:absolute after:rounded-full after:bg-red-200 after:h-[85%] after:w-[95%] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 hover:saturate-[1.15] active:saturate-[1.4]"
>
  Button
  <p
    className="absolute z-40 font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-full h-full w-full transition-all duration-300 -translate-y-[30%] tracking-widest"
  >
    Enter
  </p>
  <p
    className="absolute z-40 top-1/2 left-1/2 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent -translate-x-1/2 translate-y-full h-full w-full transition-all duration-300 group-hover:-translate-y-[40%] tracking-widest font-extrabold"
  >
    7P4C
  </p>
  <svg
    className="absolute w-full h-full scale-x-125 rotate-180 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:animate-none animate-pulse group-hover:-translate-y-[45%] transition-all duration-300"
    viewBox="0 0 2400 800"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sssurf-grad" y2="100%" x2="50%" y1="0%" x1="50%">
        <stop
          offset="0%"
          stopOpacity="1"
          stopColor="hsl(37, 99%, 67%)"
        ></stop>
        <stop
          offset="100%"
          stopOpacity="1"
          stopColor="hsl(316, 73%, 52%)"
        ></stop>
      </linearGradient>
    </defs>
    <g transform="matrix(1,0,0,1,0,-91.0877685546875)" fill="url(#sssurf-grad)">
      <path
        opacity="0.05"
        transform="matrix(1,0,0,1,0,35)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.21"
        transform="matrix(1,0,0,1,0,70)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.37"
        transform="matrix(1,0,0,1,0,105)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.53"
        transform="matrix(1,0,0,1,0,140)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.68"
        transform="matrix(1,0,0,1,0,175)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="0.84"
        transform="matrix(1,0,0,1,0,210)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
      <path
        opacity="1"
        transform="matrix(1,0,0,1,0,245)"
        d="M 0 305.9828838196134 Q 227.6031525693441 450 600 302.17553022897005 Q 1010.7738828515054 450 1200 343.3024459932802 Q 1379.4406250195766 450 1800 320.38902780838214 Q 2153.573162029817 450 2400 314.38564046970816 L 2400 800 L 0 800 L 0 340.3112176762882 Z"
      ></path>
    </g>
  </svg>
  <svg
    className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] group-hover:-translate-y-[33%] group-hover:scale-95 transition-all duration-500 z-40 fill-red-500"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >    <path
  d="M0,288L9.2,250.7C18.5,213,37,139,55,133.3C73.8,128,92,192,111,224C129.2,256,148,256,166,256C184.6,256,203,256,222,250.7C240,245,258,235,277,213.3C295.4,192,314,160,332,170.7C350.8,181,369,235,388,229.3C406.2,224,425,160,443,122.7C461.5,85,480,75,498,74.7C516.9,75,535,85,554,101.3C572.3,117,591,139,609,149.3C627.7,160,646,160,664,165.3C682.5,171,701,181,719,202.7C737.2,224,756,256,774,250.7C792.6,245,811,203,829,165.3C847.7,128,866,96,884,106.7C903.1,117,921,171,939,202.7C957.5,235,976,245,994,234.7C1012.3,224,1031,192,1049,154.7C1067.7,117,1086,75,1104,69.3C1122.5,64,1141,96,1159,101.3C1177.7,107,1196,85,1214,101.3C1232.3,117,1251,171,1269,170.7C1287.7,171,1306,117,1324,117.3C1342.5,117,1361,171,1379,186.7C1397.2,203,1416,181,1432,165.3L1440,149.3L1440,320L1432,320C1413.8,320,1397,320,1379,320C1360.8,320,1344,320,1326,320C1307.7,320,1291,320,1272,320C1253.8,320,1237,320,1219,320C1200.8,320,1184,320,1166,320C1147.7,320,1131,320,1113,320C1094.8,320,1078,320,1060,320C1041.7,320,1025,320,1007,320C988.8,320,972,320,954,320C935.7,320,919,320,901,320C882.8,320,866,320,848,320C829.7,320,813,320,795,320C776.8,320,760,320,742,320C723.7,320,707,320,689,320C670.8,320,654,320,636,320C617.7,320,601,320,583,320C564.8,320,548,320,530,320C511.7,320,495,320,477,320C458.8,320,442,320,424,320C405.7,320,389,320,371,320C352.8,320,336,320,318,320C299.7,320,283,320,265,320C246.8,320,230,320,212,320C193.7,320,177,320,159,320C140.8,320,124,320,106,320C87.7,320,71,320,53,320C34.8,320,18,320,9.2,320L0,320Z"
></path>
</svg>
<svg
className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%] group-hover:-translate-y-[18%] group-hover:scale-95 transition-all duration-500 z-50 fill-orange-500"
viewBox="0 0 1440 320"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M0,320L10.7,298.7C21.3,277,43,235,64,202.7C85.3,171,107,149,128,170.7C149.3,192,171,256,192,272C213.3,288,235,256,256,213.3C277.3,171,299,117,320,128C341.3,139,363,213,384,229.3C405.3,245,427,203,448,176C469.3,149,491,139,512,160C533.3,181,555,235,576,245.3C597.3,256,619,224,640,213.3C661.3,203,683,213,704,224C725.3,235,747,245,768,213.3C789.3,181,811,117,832,122.7C853.3,128,875,192,896,192C917.3,192,939,128,960,138.7C981.3,149,1003,235,1024,240C1045.3,245,1067,171,1088,138.7C1109.3,107,1131,117,1152,138.7C1173.3,160,1195,192,1216,213.3C1237.3,235,1259,245,1280,213.3C1301.3,181,1323,107,1344,112C1365.3,117,1387,203,1408,234.7C1429.3,267,1440,245,1440,224L1440,0L1429.3,0C1418.7,0,1397,0,1376,0C1354.7,0,1333,0,1312,0C1290.7,0,1269,0,1248,0C1226.7,0,1205,0,1184,0C1162.7,0,1141,0,1120,0C1098.7,0,1077,0,1056,0C1034.7,0,1013,0,992,0C970.7,0,949,0,928,0C906.7,0,885,0,864,0C842.7,0,821,0,800,0C778.7,0,757,0,736,0C714.7,0,693,0,672,0C650.7,0,629,0,608,0C586.7,0,565,0,544,0C522.7,0,501,0,480,0C458.7,0,437,0,416,0C394.7,0,373,0,352,0C330.7,0,309,0,288,0C266.7,0,245,0,224,0C202.7,0,181,0,160,0C138.7,0,117,0,96,0C74.7,0,53,0,32,0C10.7,0,5.3,0,0,0L0,320Z"
></path>
</svg>
</button>
    </div>
  </div>
  </>)
}
function Sphere(){
  const router = useRouter();
  const sphereRef = useRef();
  useFrame((state,delta)=>{
    if(trans){
      sphereRef.current.rotation.y += delta;
      setTimeout(()=>{
        if(sphereRef.current){
        sphereRef.current.scale.x += delta;
        sphereRef.current.scale.y += delta;
        sphereRef.current.scale.z += delta;
        }
        router.push("/movie")
      },1000)
    }
  })
  

  return(
    <mesh ref={sphereRef}>
    <sphereGeometry args={[10, 46, 46]} />
    <meshBasicMaterial wireframe/>
  </mesh>
  )
}