/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/endolotl.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="blockbench_export">
        <group>
          <group name="root" position={[0, 0.06, 0]}>
            <group name="mass" position={[0, 0.25, 0]}>
              <group name="head" position={[0, 0, -0.38]}>
                <group name="topFin" position={[0, 0.25, -0.19]} rotation={[0.57, 0, 0]}>
                  <mesh name="topFin_1" geometry={nodes.topFin_1.geometry} material={nodes.topFin_1.material} position={[0, -0.56, 0.56]} />
                </group>
                <group name="rightEye" position={[0.16, 0.03, -0.32]}>
                  <mesh name="rightEye_1" geometry={nodes.rightEye_1.geometry} material={nodes.rightEye_1.material} position={[-0.16, -0.34, 0.69]} />
                </group>
                <group name="leftEye" position={[-0.16, 0.03, -0.32]}>
                  <mesh name="leftEye_1" geometry={nodes.leftEye_1.geometry} material={nodes.leftEye_1.material} position={[0.16, -0.34, 0.69]} />
                </group>
                <group name="rightFin" position={[0.25, 0.06, -0.13]} rotation={[0, -0.7, 0]}>
                  <mesh name="rightFin_1" geometry={nodes.rightFin_1.geometry} material={nodes.rightFin_1.material} position={[-0.25, -0.38, 0.5]} />
                </group>
                <group name="leftFin" position={[-0.25, 0.06, -0.13]} rotation={[0, 0.7, 0]}>
                  <mesh name="leftFin_1" geometry={nodes.leftFin_1.geometry} material={nodes.leftFin_1.material} position={[0.25, -0.38, 0.5]} />
                </group>
                <group name="back1" position={[0, 0.25, -0.25]} />
                <group name="back2" position={[0, 0.25, -0.06]} />
                <group name="head_2" position={[0, -0.13, -0.31]} />
                <mesh name="head_1" geometry={nodes.head_1.geometry} material={nodes.head_1.material} position={[0, -0.31, 0.38]} />
              </group>
              <group name="body" position={[0, 0, -0.31]}>
                <group name="tail" position={[0, 0.13, 0.75]} rotation={[0.17, 0, 0]}>
                  <group name="back7" position={[0, 0.06, 0.06]} />
                  <group name="back8" position={[0, 0.13, 0.31]} />
                  <group name="back9" position={[0, 0.13, 0.56]} />
                  <mesh name="tail_1" geometry={nodes.tail_1.geometry} material={nodes.tail_1.material} position={[0, -0.44, -0.44]} />
                  <mesh name="tail_2" geometry={nodes.tail_2.geometry} material={nodes.tail_2.material} position={[0, -0.44, -0.44]} />
                  <mesh name="tail_3" geometry={nodes.tail_3.geometry} material={nodes.tail_3.material} position={[0, -0.44, -0.44]} />
                </group>
                <group name="rightLeg" position={[0.19, -0.06, 0.13]} rotation={[0, 0, Math.PI / 9]}>
                  <mesh name="rightLeg_1" geometry={nodes.rightLeg_1.geometry} material={nodes.rightLeg_1.material} position={[-0.19, -0.25, 0.19]} />
                </group>
                <group name="leftLeg" position={[-0.19, -0.06, 0.13]} rotation={[0, 0, -Math.PI / 9]}>
                  <mesh name="leftLeg_1" geometry={nodes.leftLeg_1.geometry} material={nodes.leftLeg_1.material} position={[0.19, -0.25, 0.19]} />
                </group>
                <group name="rightBackLeg" position={[0.19, -0.06, 0.5]} rotation={[0, 0, Math.PI / 9]}>
                  <mesh name="rightBackLeg_1" geometry={nodes.rightBackLeg_1.geometry} material={nodes.rightBackLeg_1.material} position={[-0.19, -0.25, -0.19]} />
                </group>
                <group name="leftBackLeg" position={[-0.19, -0.06, 0.5]} rotation={[0, 0, -Math.PI / 9]}>
                  <mesh name="leftBackLeg_1" geometry={nodes.leftBackLeg_1.geometry} material={nodes.leftBackLeg_1.material} position={[0.19, -0.25, -0.19]} />
                </group>
                <group name="body_2" position={[0, -0.06, 0.44]} />
                <group name="back3" position={[0, 0.19, 0.06]} />
                <group name="back4" position={[0, 0.25, 0.25]} />
                <group name="back5" position={[0, 0.25, 0.44]} />
                <group name="back6" position={[0, 0.19, 0.69]} />
                <group name="backFin" position={[0, 0.13, 0.31]}>
                  <mesh name="backFin_1" geometry={nodes.backFin_1.geometry} material={nodes.backFin_1.material} position={[0, -0.44, 0]} />
                </group>
                <mesh name="body_1" geometry={nodes.body_1.geometry} material={nodes.body_1.material} position={[0, -0.31, 0.31]} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/endolotl.gltf')
