import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cubee from "../../components/Cubee";
import { Suspense } from "react";

export default function cubee() {
    return (
        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
            <Canvas style={{ width: "100vw", height: "100vh" }}>
                <ambientLight />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Cubee />
                </Suspense>
            </Canvas>
        </div>
    );
}
