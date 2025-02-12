import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import {useRef} from "react";
const RotatingCube = () => {
    const meshRef = useRef();
    useFrame(() => {
        if(meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    })
    return (
        <mesh ref={meshRef}>
            <cylinderGeometry args={[1, 1, 1]} />
            <meshLambertMaterial color = '#468585' emissive= '#468686'/>
            <Sparkles count={100} scale={1.3} speed={0.02} size={2} color="orange"/>
        </mesh>
    )
}
const App = () => {
    return <Canvas style={{height: '100vh', width: '100vw', display: 'flex',
    justifyContent: 'center', alignItems: 'center'}}>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true}/>
        <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
        <color attach="background" args={['#F0F0F0']} />
        <RotatingCube />
    </Canvas>
}

export default App;