<template>
	<TresGroup :position="[900, 200, -1900]">
		<!-- Sun core with texture -->
		<TresMesh>
			<TresSphereGeometry :args="[100, 64, 32]" />
			<TresMeshStandardMaterial
				:map="sunTexture"
				:emissive="0xff5722"
				:emissiveMap="sunTexture"
				:emissiveIntensity="2"
				:metalness="0"
				:roughness="1"
			/>
		</TresMesh>

		<!-- Inner glow -->
		<TresMesh>
			<TresSphereGeometry :args="[102, 64, 32]" />
			<TresMeshBasicMaterial
				:transparent="true"
				:opacity="0.4"
				:color="0xff7b00"
			/>
		</TresMesh>

		<!-- Outer glow -->
		<TresMesh>
			<TresSphereGeometry :args="[105, 64, 32]" />
			<TresMeshBasicMaterial
				:transparent="true"
				:opacity="0.2"
				:color="0xff5722"
			/>
		</TresMesh>

		<!-- Multiple lights for better illumination -->
		<TresPointLight :intensity="10" :distance="3000" :color="0xff7b00" />
		<TresPointLight :intensity="5" :distance="1500" :color="0xff5722" />
	</TresGroup>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTexture } from "@tresjs/core";
import type { Texture } from "three";

defineComponent({
	name: "SunModel",
});

const sunTexture = ref<Texture | null>(null);

onMounted(async () => {
	try {
		sunTexture.value = await useTexture(["/textures/sun.jpg"]);
	} catch (error) {
		console.error("Error loading sun texture:", error);
	}
});
</script>
