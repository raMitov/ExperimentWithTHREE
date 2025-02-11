import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
const canvas = document.getElementById('canvas');

//create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#85929e');
//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// object
const geometry = new THREE.OctahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#76448A', emissive: '#76448A' });
const DCDG = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#A569BD', emissive: '#A569BD' });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;
scene.add(DCDG);
scene.add(box);

//light
const Light = new THREE.SpotLight(0x006769, 100);
Light.position.set(1, 1, 1);
scene.add(Light);

//rendered
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.render(scene, camera);

//orbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//animations
function animate() {
    requestAnimationFrame(animate);
    DCDG.rotation.x += 0.01;
    DCDG.rotation.y += 0.01;

    box.rotation.y += 0.005;
    controls.update();
    renderer.render(scene, camera);
}
//window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})
animate();