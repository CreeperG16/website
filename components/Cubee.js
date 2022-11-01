/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/cubee.gltf");
    const { actions } = useAnimations(animations, group);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="blockbench_export">
                <group>
                    <group name="root" position={[0, 0.06, 0]}>
                        <group name="rotation" position={[0, 0.94, 0]}>
                            <group name="bee" position={[0, -0.94, 0]}>
                                <group name="eyes" position={[0, 0.06, -0.26]}>
                                    <group name="rightEye" position={[0.13, 0.06, 0]}>
                                        <mesh
                                            name="rightEye_1"
                                            geometry={nodes.rightEye_1.geometry}
                                            material={nodes.rightEye_1.material}
                                            position={[-0.13, -0.19, 0.26]}
                                        />
                                    </group>
                                    <group name="leftEye" position={[-0.13, 0.06, 0]}>
                                        <mesh
                                            name="leftEye_1"
                                            geometry={nodes.leftEye_1.geometry}
                                            material={nodes.leftEye_1.material}
                                            position={[0.13, -0.19, 0.26]}
                                        />
                                    </group>
                                </group>
                                <group name="rightAntenna" position={[0.13, 0.38, -0.25]} rotation={[0, -0.17, 0]}>
                                    <mesh
                                        name="rightAntenna_1"
                                        geometry={nodes.rightAntenna_1.geometry}
                                        material={nodes.rightAntenna_1.material}
                                        position={[-0.13, -0.44, 0.25]}
                                    />
                                </group>
                                <group name="leftAntenna" position={[-0.13, 0.38, -0.25]} rotation={[0, 0.17, 0]}>
                                    <mesh
                                        name="leftAntenna_1"
                                        geometry={nodes.leftAntenna_1.geometry}
                                        material={nodes.leftAntenna_1.material}
                                        position={[0.13, -0.44, 0.25]}
                                    />
                                </group>
                                <group name="wings" position={[0, 0.25, 0]}>
                                    <group
                                        name="rightWing"
                                        position={[0.25, -0.03, -0.06]}
                                        rotation={[0, -Math.PI / 4, 0]}
                                    >
                                        <mesh
                                            name="rightWing_1"
                                            geometry={nodes.rightWing_1.geometry}
                                            material={nodes.rightWing_1.material}
                                            position={[-0.25, -0.28, 0.06]}
                                        />
                                    </group>
                                    <group
                                        name="leftWing"
                                        position={[-0.25, -0.03, -0.06]}
                                        rotation={[0, Math.PI / 4, 0]}
                                    >
                                        <mesh
                                            name="leftWing_1"
                                            geometry={nodes.leftWing_1.geometry}
                                            material={nodes.leftWing_1.material}
                                            position={[0.25, -0.28, 0.06]}
                                        />
                                    </group>
                                </group>
                                <group name="stinger" position={[0, 0.31, 0.25]}>
                                    <mesh
                                        name="stinger_1"
                                        geometry={nodes.stinger_1.geometry}
                                        material={nodes.stinger_1.material}
                                        position={[0, -0.38, -0.25]}
                                    />
                                    <mesh
                                        name="stinger_2"
                                        geometry={nodes.stinger_2.geometry}
                                        material={nodes.stinger_2.material}
                                        position={[0, -0.38, -0.25]}
                                    />
                                </group>
                                <group name="rightLegs" position={[0.13, 0, 0]} rotation={[0, 0, 0.44]}>
                                    <mesh
                                        name="rightLegs_1"
                                        geometry={nodes.rightLegs_1.geometry}
                                        material={nodes.rightLegs_1.material}
                                        position={[-0.13, -0.06, 0]}
                                    />
                                </group>
                                <group name="leftLegs" position={[-0.13, 0, 0]} rotation={[0, 0, -0.44]}>
                                    <mesh
                                        name="leftLegs_1"
                                        geometry={nodes.leftLegs_1.geometry}
                                        material={nodes.leftLegs_1.material}
                                        position={[0.13, -0.06, 0]}
                                    />
                                </group>
                                <mesh
                                    name="bee_1"
                                    geometry={nodes.bee_1.geometry}
                                    material={nodes.bee_1.material}
                                    position={[0, -0.06, 0]}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/cubee.gltf");
