import * as THREE from 'three';
import GUI from 'lil-gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface SpotlightConfig {
    pos: { x: number; y: number; z: number; };
    rotation?: { x: number; y: number; z: number; };
};

export function addSpotlights(scene: THREE.Scene, config: SpotlightConfig, gui?: GUI) {
    const loader = new GLTFLoader();

    loader.load("/spotlights.glb", (gltf) => {
        const frame = gltf.scene;
        frame.position.set(config.pos.x, config.pos.y, config.pos.z);
        scene.add(frame);

        if (config.rotation) {
            frame.rotation.set(config.rotation.x, config.rotation.y, config.rotation.z);
        }
    });
}
