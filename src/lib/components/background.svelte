<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import vert from './vert.glsl?raw';
	import frag from './frag.glsl?raw';

	var scene: THREE.Scene;
	var camera: THREE.Camera;
	var renderer: THREE.Renderer;
	let canvasElement: HTMLCanvasElement;

	let uniform = {
		u_time: { value: 2.0 },
		u_resolution: {
			value: [0, 0]
		}
	};

	onMount(() => {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasElement, alpha: false });
		renderer.setSize(window.innerWidth, window.innerHeight);

		uniform.u_resolution.value = [window.innerWidth, window.innerHeight];

		const geometry = new THREE.PlaneGeometry(2, 2);
		const material = new THREE.ShaderMaterial({
			vertexShader: vert,
			fragmentShader: frag,
			uniforms: uniform,
			blending: THREE.AdditiveBlending
		});

		const plane = new THREE.Mesh(geometry, material);
		scene.add(plane);

		camera.position.z = 10;
	});

	$: if (renderer != undefined) {
		animate();
	}

	function animate() {
        uniform.u_time.value += 0.005
		renderer.render(scene, camera)
		requestAnimationFrame(animate)
	}
</script>

<canvas bind:this={canvasElement} />
