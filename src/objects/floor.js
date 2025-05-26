import * as THREE from 'three';

export function addFloor(scene, gui) {
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshStandardMaterial({
            color: 0xfbf4e2,
            roughness: 0.8,
            metalness: 0.2,
        })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const floorFolder = gui.addFolder('Floor');

    floorFolder.add(floor.material, 'roughness', 0, 1, 0.01).name('Roughness');
    floorFolder.add(floor.material, 'metalness', 0, 1, 0.01).name('Metalness');
    floorFolder.addColor(floor.material, 'color').name('Color');

    floorFolder.open();
}
