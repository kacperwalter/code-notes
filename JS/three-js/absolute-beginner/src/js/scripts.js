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

// 3D coordinates 
const axesHelper = new THREE.AxesHelper(3);

scene.add(axesHelper);

// camera.position.z = 5;
// camera.position.y = 2;

// (x, y, z)
camera.position.set(0, 2, 5);
// call the method everytime we move the camera
orbit.update();

const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

// geometric transofmation 
function animate() {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;
  renderer.render(scene, camera); 
}

renderer.setAnimationLoop(animate);