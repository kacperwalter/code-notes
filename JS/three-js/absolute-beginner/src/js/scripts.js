import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, // fov
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, 
  1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

// 3D coordinates - helpers are just helpers tool, not to use in prouction
const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

// camera.position.z = 5;
// camera.position.y = 2;

// (x, y, z)
camera.position.set(-10, 30, 30);
// call the method everytime we move the camera
orbit.update();

// mesh
const boxGeometry = new THREE.BoxGeometry(); // 1st stage - creating a geometry
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00}); // 2nd stage - adding material / MeshBasicMaterial doesn't need light to appear on the scene
const box = new THREE.Mesh(boxGeometry, boxMaterial); // 3rd stage - fusion of geometry and material (mesh is an 3D object in 3D world)
scene.add(box);

// mesh
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xEBECF0,
  side: THREE.DoubleSide, // without that plane is one sided
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI; // matching plane with the grid

// 1st argument - grid size, 2nd argument -> divide squares into smaller pieces
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

// mesh
const sphereGeometry = new THREE.SphereGeometry(4, 20, 20); // 2nd and 3rd argument - how detai;ed the sphere should be
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000FF,
  wireframe: false, // true displays only wirefire (octagons used to build geometry)
})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// geometric transofmation 
function animate() {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  renderer.render(scene, camera); 
}

renderer.setAnimationLoop(animate);