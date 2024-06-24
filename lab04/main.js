import * as THREE from "https://cdn.skypack.dev/three@0.132.2"
import * as dat from 'https://unpkg.com/dat.gui@0.7.7/build/dat.gui.module.js';


function getPlane(size) {
	var geometry = new THREE.PlaneGeometry(size, size);
	var material = new THREE.MeshBasicMaterial({
		color: "rgb(128,128,128)",
		side: THREE.DoubleSide
	});
	var mesh = new THREE.Mesh(
		geometry,
		material
	);
	return mesh;
}

function getCylinder(radiusTop, radiusBot, height, radialSegments) {
	var geometry = new THREE.CylinderGeometry(radiusTop, radiusBot, height, radialSegments);
	var material = new THREE.MeshBasicMaterial({
		color: "rgb(51, 255, 255)"
	});
	var mesh = new THREE.Mesh(
		geometry,
		material
	);
	return mesh;
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

var plane = getPlane(8); 
plane.rotation.x = Math.PI/2;

var cylinder = getCylinder(1, 1, 2, 32);
cylinder.position.set(0, 2, 0);

scene.add(plane);
scene.add(cylinder);


var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("webgl").appendChild(renderer.domElement);

var gui = new dat.GUI();

// Lấy phần tử gốc của dat.GUI
var guiDom = gui.domElement;

// Tạo một container bao ngoài để chứa dat.GUI và điều chỉnh vị trí
var container = document.createElement('div');
container.style.position = 'absolute';
container.style.top = '0';
container.style.left = '0';
container.style.margin = '10px';
container.style.padding = '10px';
container.appendChild(guiDom);

// Chèn container vào body hoặc phần tử cha của bạn
document.body.appendChild(container);

var cameraParameters = {
    fov: 75,
    aspectRatio: window.innerWidth / window.innerHeight,
    nearPlane: 0.1,
    farPlane: 1000,
    cameraPositionX: 1,
    cameraPositionY: 6,
    cameraPositionZ: -5
};
  
  
gui.add(cameraParameters, 'cameraPositionX', -20, 20).onChange(function(value) {
    camera.position.x = value;
});
  
gui.add(cameraParameters, 'cameraPositionY', -20, 20).onChange(function(value) {
    camera.position.y = value;
});
  
gui.add(cameraParameters, 'cameraPositionZ', -20, 20).onChange(function(value) {
    camera.position.z = value;
});
  
var camera = new THREE.PerspectiveCamera(
    cameraParameters.fov,
    cameraParameters.aspectRatio,
    cameraParameters.nearPlane,
    cameraParameters.farPlane
);
  
camera.position.set(
    cameraParameters.cameraPositionX,
    cameraParameters.cameraPositionY,
    cameraParameters.cameraPositionZ
);


var cameraLookAt = {
    lookAtX: 0,
    lookAtY: 0,
    lookAtZ: 0
};

gui.add(cameraLookAt, 'lookAtX', -20, 20).onChange(function(value) {
    camera.lookAt(value, cameraLookAt.lookAtY, cameraLookAt.lookAtZ);
  });
  
gui.add(cameraLookAt, 'lookAtY', -20, 20).onChange(function(value) {
    camera.lookAt(cameraLookAt.lookAtX, value, cameraLookAt.lookAtZ);
});
  
gui.add(cameraLookAt, 'lookAtZ', -20, 20).onChange(function(value) {
    camera.lookAt(cameraLookAt.lookAtX, cameraLookAt.lookAtY, value);
});

camera.lookAt(new THREE.Vector3(cameraLookAt.lookAtX, cameraLookAt.lookAtY, cameraLookAt.lookAtZ));

var objectMoveOn = {
    moveOnX: 0,
    moveOnY: 0,
    moveOnZ: 0
};

gui.add(objectMoveOn, 'moveOnX', -0.05, 0.05).onChange(function (value) {
    cylinder.position.x += value;
});

gui.add(objectMoveOn, 'moveOnY', -0.05, 0.05).onChange(function (value) {
    cylinder.position.y += value;
});

gui.add(objectMoveOn, 'moveOnZ', -0.05, 0.05).onChange(function (value) {
    cylinder.position.z += value;
});

var objectScale = {
    scaleOnX: 1,
    scaleOnY: 1,
    scaleOnZ: 1
};

gui.add(objectScale, 'scaleOnX', 0.1, 10).onChange(function (value) {
    cylinder.scale.x = value;
});

gui.add(objectScale, 'scaleOnY', 0.1, 10).onChange(function (value) {
    cylinder.scale.y = value;
});

gui.add(objectScale, 'scaleOnZ', 0.1, 10).onChange(function (value) {
    cylinder.scale.z = value;
});

var objectRotation = {
    rotationOnX: 1,
    rotationOnY: 1,
    rotationOnZ: 1
};

gui.add(objectRotation, 'rotationOnX', 0, 1).onChange(function (value) {
    cylinder.rotation.x += value;
});

gui.add(objectRotation, 'rotationOnY', 0, 1).onChange(function (value) {
    cylinder.rotation.y += value;
});

gui.add(objectRotation, 'rotationOnZ', 0, 1).onChange(function (value) {
    cylinder.rotation.z += value;
});

function init() {
    requestAnimationFrame(init); 

	renderer.render(
		scene,
		camera
	);
}

init();