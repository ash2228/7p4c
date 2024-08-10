"use client"
import * as THREE from "three"
import { Canvas,extend, useFrame } from "@react-three/fiber"
import { EffectComposer,Bloom,Glitch,ChromaticAberration } from "@react-three/postprocessing"
import {Vector2, Raycaster,Vector3, Camera} from "three"
import { Loader, OrbitControls, Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect, useState,Suspense, useRef } from "react";
let i = false
export default function Page(){
	const [z,setZ] = useState(30);
	const [y,setY] = useState(0);
	const [x,setX] = useState(-15);
	const section = useRef();
	const section1 = useRef();
	const [s,setS] = useState(true);
	const [enabled,setEnabled] = useState(false);
	useEffect(()=>{
		if(window.innerWidth<1200){
			setZ(60);
			setY(12);
			setX(0);
			setEnabled(true)
		}
		if(document!== undefined){
			document.body.style.overflow = "hidden"
		}
	},[])
	const movementHandler = ()=>{
		if(s){
			setS(false);
			section.current.scrollIntoView({behavior:"smooth"});
			i=true;
		}
		else{
			i=false;
			setS(true);
			section1.current.scrollIntoView({behavior:"smooth"});
		}
	}
    return(<>
    <div className={`h-[100vh] w-full bg-black`} ref={section1}>
		<Canvas camera={{position:[0,0,z],fov:50}} className={`cursor-none ${!s&&"brightness-50"} transition`}>
			<Suspense fallback={null}>

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
		  <Loader/>
			</Suspense>
			<OrbitControls enablePan={false} enableZoom={false} enabled={enabled} />
			<Cursor/>
		</Canvas>
		<div className="absolute bottom-0 backdrop-blur-sm h-[10vh] w-full cursor-pointer" ref={section}>
			<h1 className={`text-center text-4xl text-white ${!s&&"rotate-180"} transition`} onClick={movementHandler}>v</h1>
		</div>
		<div className="flex gap-5 overflow-x-scroll backdrop-blur-3xl bg-[#000002] p-20">
			<div className="h-[400px] w-[350px] bg-gradient-to-r flex-shrink-0 from-slate-950 to-gray-900 rounded-xl">

			</div>
			<div className="h-[400px] w-[350px] bg-gradient-to-r flex-shrink-0 from-slate-950 to-gray-900 rounded-xl">

			</div>
			<div className="h-[400px] w-[350px] bg-gradient-to-r flex-shrink-0 from-slate-950 to-gray-900 rounded-xl">

			</div>
			<div className="h-[400px] w-[350px] bg-gradient-to-r flex-shrink-0 from-slate-950 to-gray-900 rounded-xl">

			</div>
			<div className="h-[400px] w-[350px] bg-gradient-to-r flex-shrink-0 from-slate-950 to-gray-900 rounded-xl">

			</div>
			<div className="h-[400px] w-[350px] bg-gradient-to-r flex-shrink-0 from-slate-950 to-gray-900 rounded-xl">

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
function Cursor() {
    let { camera, scene } = useThree();
    let [mousePos, setMousePos] = useState(new Vector3(0, 0, 0));
	const [visible,setVisible] = useState(false)

    useEffect(() => {
		const handleMouseMove = (event) => {
			setVisible(true)
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            const mouse = new Vector2(mouseX, mouseY);

            // Create a ray from the camera through the mouse position
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera);

            // Determine where the ray intersects the z=0 plane
            const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
            const intersection = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, intersection);

            // Update the mesh position
            setMousePos(intersection);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [camera]);
    return (
        <mesh position={mousePos.toArray()} visible={visible} >
            <sphereGeometry args={[1,8,8]}/>
            <meshBasicMaterial />
        </mesh>
    );
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
	useEffect(()=>{
		if(i){
			
		}
	},[i])
}