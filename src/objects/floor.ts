import * as THREE from 'three';
import { floorDimensions } from '@/utils/constants';

export function addFloor(scene: THREE.Scene) {
    const floorGeometry = new THREE.PlaneGeometry(floorDimensions.length, floorDimensions.width);
    const floorMaterial = new THREE.MeshLambertMaterial({
        color: new THREE.Color(0xffffff),
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);
}
