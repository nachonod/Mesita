/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/MesaFbx.glb')
  return (
    <group ref={group} {...props}>
      <mesh
        material={materials['Material #26']}
        geometry={nodes.Cylinder001.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        material={materials['Material #26']}
        geometry={nodes.Cylinder002.geometry}
        position={[0, 51.98, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        material={materials['Material #25']}
        geometry={nodes.Object.geometry}
        position={[0, 51.98, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
    </group>
  )
}

useGLTF.preload('/MesaFbx.glb')
