import * as THREE from 'three';
import GUI from 'lil-gui';

import { baseWallHeight } from '@/utils/configs';

interface Config {
    x: number;
    y: number;
    z: number;
    width: number;
    xrotation: number;
    yrotation: number;
}

export function addWall(scene: THREE.Scene, gui: GUI, config: Config) {
    const wallGeometry = new THREE.PlaneGeometry(config.width, baseWallHeight);
    const wallMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xeb9486),
        blending: THREE.NormalBlending,
    });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.rotation.x = config.xrotation;
    wall.rotation.y = config.yrotation;
    wall.position.set(config.x, config.y, config.z);
    wall.receiveShadow = true;
    scene.add(wall);

    // GUI controls for the wall
    const folder = gui.addFolder('Wall');
    const positionFolder = folder.addFolder('Position');
    positionFolder.add(wall.position, 'x', -10, 10, 0.01).name('X');
    positionFolder.add(wall.position, 'y', -10, 10, 0.01).name('Y');
    positionFolder.add(wall.position, 'z', -10, 10, 0.01).name('Z');
    const rotationFolder = folder.addFolder('Rotation');
    rotationFolder.add(wall.rotation, 'x', 0, Math.PI * 2, 0.01).name('X Rotation');
    rotationFolder.add(wall.rotation, 'y', 0, Math.PI * 2, 0.01).name('Y Rotation');
    rotationFolder.add(wall.rotation, 'z', 0, Math.PI * 2, 0.01).name('Z Rotation');
    const scaleFolder = folder.addFolder('Scale');
    scaleFolder.add(wall.scale, 'x', 0.1, 5, 0.01).name('X Scale');
    scaleFolder.add(wall.scale, 'y', 0.1, 5, 0.01).name('Y Scale');
    scaleFolder.add(wall.scale, 'z', 0.1, 5, 0.01).name('Z Scale');

    folder.open();
}

