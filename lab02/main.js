import * as THREE from "./node_modules/three/build/three.module.js";

function getBox(w, h, d) {
	var geometry = new THREE.BoxGeometry(w, h, d);
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff00
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

function getSphere(radius, widthSeg, heightSeg) {
	var geometry = new THREE.SphereGeometry(radius, widthSeg, heightSeg);
	var material = new THREE.MeshBasicMaterial({
		color:"rgb(0, 0, 204)"
	});
	var mesh = new THREE.Mesh(
		geometry,
		material
	);
	return mesh;
}

function getPlane(size) {
	var geometry = new THREE.PlaneGeometry(size, size);
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff0000,
		side: THREE.DoubleSide
	});
	var mesh = new THREE.Mesh(
		geometry,
		material
	);
	return mesh;
}


function init() {
	var scene = new THREE.Scene();

	var box = getBox(2, 2, 2); // Tạo đối tượng thứ nhất

	var plane = getPlane(8); // Tạo đối tượng thứ hai
	plane.rotation.x = Math.PI/2;

	var cylinder = getCylinder(1, 1, 2, 32);
	cylinder.position.x = 3;

	var sphere1 = getSphere(1, 64, 32); // Tạo đối tượng thứ ba
	sphere1.position.x = 3;
	sphere1.position.y = 1;

	var sphere2 = getSphere(1, 64, 32); // Tạo đối tượng thứ tư
	sphere2.position.x = 0;
	sphere2.position.y = 2;

	scene.add(box);
	scene.add(plane);
	scene.add(cylinder);
	scene.add(sphere1);
	scene.add(sphere2);

	var camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);

	camera.position.x = 1;
	camera.position.y = 3;
	camera.position.z = -5;

	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var renderer = new THREE.WebGLRenderer();

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById("webgl").appendChild(renderer.domElement); 

	renderer.render(
		scene,
		camera
	);
}

init();