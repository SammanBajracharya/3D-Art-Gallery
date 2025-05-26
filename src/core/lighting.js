import * as THREE from 'three';

export function addLights(scene, gui) {
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5);
    directionalLight.position.set(-1.5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Helper to visualize directional light
    const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
    scene.add(directionalLightHelper);

    // GUI controls
    const lightFolder = gui.addFolder('Lights');

    // Ambient Light Intensity slider
    lightFolder.add(ambientLight, 'intensity', 0, 2, 0.01).name('Ambient Intensity');

    // Directional Light controls
    lightFolder.add(directionalLight.position, 'x', -20, 20, 0.1).name('Dir Light X');
    lightFolder.add(directionalLight.position, 'y', 0, 20, 0.1).name('Dir Light Y');
    lightFolder.add(directionalLight.position, 'z', -20, 20, 0.1).name('Dir Light Z');
    lightFolder.add(directionalLight, 'intensity', 0, 5, 0.01).name('Dir Intensity');

    lightFolder.open();
}
