import * as THREE from 'three';
import { floorDimensions } from '@/utils/configs';

interface Config {
    x: number;
    y: number;
    z: number;
    rotation: number;
}

export function addFloor(scene: THREE.Scene, config?: Config) {
    const floorGeometry = new THREE.PlaneGeometry(floorDimensions.length, floorDimensions.width);
    const floorMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xffffff),
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    if (config) {
        floor.position.set(config.x, config.y, config.z);
        floor.rotation.x = config.rotation;
    } else {
        floor.rotation.x = -Math.PI / 2;
    }
    floor.receiveShadow = true;
    scene.add(floor);
}
