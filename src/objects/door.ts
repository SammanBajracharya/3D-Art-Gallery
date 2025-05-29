import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import GUI from 'lil-gui';

import { doorConfig } from '@/utils/configs';

export const addDoor = (scene: THREE.Scene, gui: GUI) => {
    const loader = new GLTFLoader();

    loader.load('/door.glb', (gltf) => {
        const model = gltf.scene;

        model.position.set(doorConfig.x, doorConfig.y, doorConfig.z);
        model.scale.set(1, 1, 1);
        model.rotation.set(0, 0, 0);

        model.traverse(child => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        const folder = gui.addFolder('Door');

        const positionFolder = folder.addFolder('Position');
        positionFolder.add(model.position, 'x', -10, 10, 1);
        positionFolder.add(model.position, 'y', -10, 10, 1);
        positionFolder.add(model.position, 'z', -10, 10, 1);

        const rotationFolder = folder.addFolder('Rotation');
        rotationFolder.add(model.rotation, 'x', 0, Math.PI * 2, 0.01).name('X');
        rotationFolder.add(model.rotation, 'y', 0, Math.PI * 2, 0.01).name('Y');
        rotationFolder.add(model.rotation, 'z', 0, Math.PI * 2, 0.01).name('Z');

        const scaleFolder = folder.addFolder('Scale');
        scaleFolder.add(model.scale, 'x', 0.1, 5, 1).name('X');
        scaleFolder.add(model.scale, 'y', 0.1, 5, 1).name('Y');
        scaleFolder.add(model.scale, 'z', 0.1, 5, 1).name('Z');

        folder.open();

        scene.add(model);
    }, undefined, (error) => {
        console.error('An error occurred while loading the GLTF model:', error);
    });
}
