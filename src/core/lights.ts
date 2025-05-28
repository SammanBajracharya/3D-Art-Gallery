import * as THREE from 'three';
import GUI from 'lil-gui';

export function addLights(scene: THREE.Scene, gui?: GUI) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    if (gui) {
        const ambientFolder = gui.addFolder('Ambient Light');
        ambientFolder.add(ambientLight, 'intensity', 0, 1).name('Intensity');
        ambientFolder.addColor({ color: ambientLight.color.getHex() }, 'color')
            .onChange((value) => ambientLight.color.set(value));
    }

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    if (gui) {
        const directionalFolder = gui.addFolder('Directional Light');
        directionalFolder.add(directionalLight, 'intensity', 0, 2).name('Intensity');
        directionalFolder.add(directionalLight.position, 'x', -10, 10).name('Position X');
        directionalFolder.add(directionalLight.position, 'y', -10, 10).name('Position Y');
        directionalFolder.add(directionalLight.position, 'z', -10, 10).name('Position Z');
        directionalFolder.addColor({ color: directionalLight.color.getHex() }, 'color')
            .onChange((value) => directionalLight.color.set(value));

        // Adjust shadow properties for better quality (optional, but recommended)
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        directionalLight.shadow.camera.left = -10;
        directionalLight.shadow.camera.right = 10;
        directionalLight.shadow.camera.top = 10;
        directionalLight.shadow.camera.bottom = -10;
        directionalLight.shadow.bias = -0.001; // Helps with shadow artifacts

        // Helper to visualize the light's direction and shadow camera (useful for debugging)
        const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
        scene.add(directionalLightHelper);
        const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
        scene.add(directionalLightCameraHelper);
    }
}
