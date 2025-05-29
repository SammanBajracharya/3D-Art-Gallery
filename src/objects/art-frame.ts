import * as THREE from 'three';
import GUI from 'lil-gui';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ArtworkConfig {
    url: string;
    scale: { x: number; y: number };
    pos: { x: number; y: number; z: number; };
    rotation?: { x: number; y: number; z: number; };
};

export function addArtFrame(scene: THREE.Scene, config: ArtworkConfig, gui?: GUI) {
    const loader = new GLTFLoader();
    console.log(!!config.rotation);

    loader.load("/art-frame.glb", (gltf) => {
        const frame = gltf.scene;
        frame.position.set(config.pos.x, config.pos.y, config.pos.z);
        scene.add(frame);

        const frameBacking = frame.getObjectByName('FrameBacking') as THREE.Mesh;
        if (!frameBacking) {
            console.warn('FrameBacking mesh not found in model');
            return;
        }

        const box = new THREE.Box3().setFromObject(frame);
        const frameWidth = box.max.x - box.min.x;
        const frameHeight = box.max.y - box.min.y;

        const artworkWidth = frameWidth * 0.9;
        const artworkHeight = frameHeight * 0.9;

        const artworkGeometry = new THREE.PlaneGeometry(artworkWidth, artworkHeight);
        const artworkTexture = new THREE.TextureLoader().load(`arts/${config.url}`);
        const artworkMaterial = new THREE.MeshBasicMaterial({
            map: artworkTexture,
            transparent: true
        });

        const artworkPlane = new THREE.Mesh(artworkGeometry, artworkMaterial);

        // Position it slightly in front of the frame backing
        artworkPlane.position.z = .1; // Adjust based on your frame depth

        // Add to frame or scene
        frame.add(artworkPlane); // This way it moves with the frame

        frame.scale.set(config.scale.x, config.scale.y, 1);

        if (config.rotation) {
            frame.rotation.set(config.rotation.x, config.rotation.y, config.rotation.z);
        }
    });
}
