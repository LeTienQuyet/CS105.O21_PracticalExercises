import * as THREE from "https://cdn.skypack.dev/three@0.132.2"
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({});
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 1));
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 3, -6);
light.castShadow = true;
scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

var textureLoader = new THREE.TextureLoader()
var texture4box = textureLoader.load("./texture/box_texture.jpg");
var texture4coin = textureLoader.load("./texture/coin_texture.jpg");
var texture4ball = textureLoader.load("./texture/ball_texture.jpg");

function getPlane(width, height, depth) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({
        color: "rgb(123, 122, 110)",
        side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.receiveShadow = true;
    return plane;
};

function getCoin(radiusTop , radiusBottom, height, radialSegments) {
    const geometry = new THREE.CylinderGeometry(radiusTop , radiusBottom, height, radialSegments)
    const material = new THREE.MeshStandardMaterial({
        map: texture4coin
    });
    const coin = new THREE.Mesh(geometry, material);
    coin.castShadow = true;
    return coin;
};

function getBox(width, height, depth) {
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshStandardMaterial({
        map: texture4box
    });
    const box = new THREE.Mesh(geometry, material);
    box.castShadow = true;
    return box;
};

function getBall(radius, widthSegments, heightSegments) {
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    const material = new THREE.MeshStandardMaterial({
        map: texture4ball
    });
    const ball = new THREE.Mesh(geometry, material);
    ball.castShadow = true;
    return ball;
};

const plane = getPlane(10, 0.5, 10);
scene.add(plane);

const coin = getCoin(1, 1, 0.1, 100);
coin.position.set(2, 1.25, 0);
scene.add(coin);

const box = getBox(1, 1, 1);
box.position.set(-3, 1, 0);
scene.add(box);

const ball = getBall(0.5, 32, 64);
ball.position.set(3, 1, 3);
scene.add(ball);

camera.position.set(2, 4, 6);
camera.lookAt(0, 0, 0);

var time = 0;

function rotateObject(object, angle) {
    object.rotation.x += angle;
}

function translateObject(object, amplitude, frequency, deltaY) {
    object.position.y = amplitude * Math.cos(2*Math.PI*frequency*time) + deltaY;
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

    rotateObject(coin, Math.PI/30);
    translateObject(box, 1, 3, 1.75);
    time += 0.001;
}
animate();