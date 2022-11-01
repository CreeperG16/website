import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cubee from "../../components/Cubee";
import { Suspense } from "react";

export default function cubee() {
    return (
        <div style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
            <h1>Cubee</h1>
            <Canvas>
                <ambientLight />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Cubee />
                </Suspense>
            </Canvas>
        </div>
    );
}
