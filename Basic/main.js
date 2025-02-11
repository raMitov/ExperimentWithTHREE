import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

2
const geometry = new THREE.ConeGeometry( 2, 2, 3 );
const material = new THREE.MeshLambertMaterial( { color: '#76448A' , emissive: '#76448A'} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

camera.position.z = 5;

const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

function animate() {
    renderer.setAnimationLoop( animate );

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    renderer.render( scene, camera );
}

animate();