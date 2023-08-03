/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
	const gltf = useLoader(GLTFLoader, './3dModels/model1.glb');
	const modelRef = useRef();

	useFrame(() => {
		modelRef.current.rotation.y -= 0.003;
	});

	useEffect(() => {
		console.log(gltf.scene);
	}, [gltf]);

	return (
		<group ref={modelRef} position={[0, -1.5, 0.6]}>
			<primitive object={gltf.scene} />
		</group>
	);
};

export default Model;
