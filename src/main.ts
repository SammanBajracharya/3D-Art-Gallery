import * as THREE from 'three';
import GUI from 'lil-gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { scene } from './core/scene';
import { camera } from './core/camera';
import { renderer } from './core/renderer';
import { addLights } from './core/lights';
import { addFloor } from './objects/floor';
import { addFlowerPot } from './objects/flower-pot';
import { addDoor } from './objects/door';

import { addWall } from './objects/wall';

import { wallConfigs } from '@/utils/constants';

function init() {
    const gui = new GUI()
    addLights(scene, gui);
    addFloor(scene);
    addWall(scene, gui, wallConfigs[1]);
    addWall(scene, gui, wallConfigs[2]);
    addWall(scene, gui, wallConfigs[3]);
    addWall(scene, gui, wallConfigs[4]);
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
