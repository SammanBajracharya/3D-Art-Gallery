import * as THREE from 'three';
import GUI from 'lil-gui';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { baseWallHeight } from '@/utils/configs';

export function addLights(scene: THREE.Scene, gui?: GUI) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const loader = new GLTFLoader();

    const ceilingLight = new THREE.RectAreaLight(0xffffff, 15, 5, 2); // color, intensity, width, height
    ceilingLight.position.set(0, baseWallHeight - 1, 0); // ceiling height
    ceilingLight.lookAt(0, 0, 0); // aim down toward the floor
    scene.add(ceilingLight);

    loader.load("/lights.glb", (gltf) => {
        const frame = gltf.scene;
        frame.position.set(ceilingLight.position.x, baseWallHeight, ceilingLight.position.z);
        scene.add(frame);
    });
}
