import * as THREE from 'three';
import GUI from 'lil-gui';

import { scene } from './core/scene.js';
import { camera } from './core/camera.js';
import { renderer } from './core/renderer.js';
import { addLights } from './core/lighting.js';
import { addFloor } from './objects/floor.js';
import { addFlowerPot } from './objects/flower-pot.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { addDoor } from './objects/door.js';

function init() {
    const gui = new GUI()
    addLights(scene, gui);
    addFloor(scene, gui);
    addFlowerPot(scene, gui);
    addDoor(scene, gui);

    const axesHelper = new THREE.AxesHelper(5);
    const gridHelper = new THREE.GridHelper(10, 10);

    scene.add(axesHelper);
    scene.add(gridHelper);

    const controller = new OrbitControls(camera, renderer.domElement);
    controller.enableDamping = true;

    const animate = () => {
        requestAnimationFrame(animate);
        controller.update();
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

init();
