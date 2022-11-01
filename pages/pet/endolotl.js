import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Endolotl from "../../components/Endolotl";
import { Suspense } from "react";

export default function endolotl() {
    return (
        <div style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
            <h1>Endolotl</h1>
            <Canvas style={{ width: "100%", height: "100%" }}>
                <ambientLight />
                <OrbitControls />
                <Suspense fallback={null}>
                    <Endolotl />
                </Suspense>
            </Canvas>
        </div>
    );
}
