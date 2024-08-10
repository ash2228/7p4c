"use client"
import { Canvas,extend, useFrame } from "@react-three/fiber"
import { EffectComposer,Bloom,Glitch,ChromaticAberration } from "@react-three/postprocessing"
import {Vector2, Raycaster,Vector3, Camera} from "three"
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect, useState } from "react";
import Loading from "./loadingscreen"
export default function Page(){
	const [z,setZ] = useState(30);
	const [y,setY] = useState(0);
	const [x,setX] = useState(-15);
	useEffect(()=>{
		if(window.innerWidth<1200){
			setZ(60);
			setY(12);
			setX(0);
		}
		if(document!== undefined){
			document.body.style.overflow = "hidden"
		}
		
	},[])
    return(<>
    <div className="h-[100vh] w-full bg-black">
		<Canvas camera={{position:[0,0,z],fov:50}}>
			<Effects/>
			<Text
          position={[x, y, 0]}
          fontSize={2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          7 Pistons Of Change
        </Text>
		  <Sphere/>
		  <CameraController/>
		</Canvas>
		<div className="flex">
			<div className="h-[400px] w-[350px] bg-white">

			</div>
		</div>
	</div>
    </>)
}
function Sphere(){
	return(
		<mesh>
			<sphereGeometry args={[10, 46, 46]} />
			<meshBasicMaterial wireframe/>
		</mesh>
	)
}
function Effects(){
	let [strength,setStrength]= useState(1);
	let [active,setActive] = useState(true)
	useEffect(() => {
		let i = 0
		let interval = setInterval(() => {
		  setStrength(prev => Math.max(0, prev - 0.05)); // Reduce by 0.01 every interval
		  i++;
		  if(i>24){
			  setActive(false)
		  }
		}, 100); // 100ms interval
	
		return () => clearInterval(interval); // Cleanup the interval on unmount
	  }, []);
	return(
		<EffectComposer>
			<Bloom/>
			<Glitch strength={strength} active={active} />
			<ChromaticAberration
            offset={new Vector2(0.01, 0.001)} // Adjust the offset for the RGB split
            radialModulation={true} // Enable radial modulation if you want the effect to intensify towards the edges
          />
		</EffectComposer>
	)
}
function CameraController(){
	let {camera} = useThree();
	useEffect(()=>{
		window.addEventListener("mousemove",(event)=>{
			const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
			const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
			camera.lookAt(2,0,5);
			const mouse = new Vector2(mouseX, mouseY);
			camera.lookAt(mouse.x,mouse.y)
		})
	},[])
}