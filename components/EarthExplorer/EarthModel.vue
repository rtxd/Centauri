<template>
	<TresMesh v-if="selectedLayer === 'core'">
		<TresSphereGeometry :args="[1.4, 64, 32]" />
		<TresMeshStandardMaterial
			:map="coreTexture"
			:metalness="0.1"
			:roughness="0.9"
		/>
	</TresMesh>

	<!-- Core outer surface -->
	<TresMesh>
		<TresSphereGeometry :args="[1.4, 64, 32]" />
		<TresMeshStandardMaterial
			:map="coreTexture"
			emissive="#ff3d00"
			:emissiveIntensity="1.2"
			:roughness="0.7"
			:transparent="true"
			:opacity="selectedLayer === 'core' ? 0.7 : 0.1"
		/>
	</TresMesh>

	<!-- Mantle (middle) -->
	<TresMesh v-if="selectedLayer === 'mantle'">
		<TresSphereGeometry :args="[1.7, 64, 32]" />
		<TresMeshStandardMaterial :map="mantleTexture" />
	</TresMesh>

	<!-- Crust (outer) -->
	<TresMesh v-if="selectedLayer === 'crust' && isTextureLoaded">
		<TresSphereGeometry :args="[2, 64, 32]" />
		<TresMeshStandardMaterial :map="earthTexture" />
	</TresMesh>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useTexture } from "@tresjs/core";
import type { Texture } from "three";

const props = defineProps<{
	selectedLayer: string;
}>();

const earthTexture = ref<Texture | null>(null);
const mantleTexture = ref<Texture | null>(null);
const coreTexture = ref<Texture | null>(null);
const isTextureLoaded = ref(false);

onMounted(async () => {
	try {
		[earthTexture.value, mantleTexture.value, coreTexture.value] =
			await useTexture([
				"/textures/earth.jpg",
				"/textures/mantle.jpg",
				"/textures/core.jpg",
			]);
		isTextureLoaded.value = true;
	} catch (error) {
		console.error("Error loading texture:", error);
	}
});
</script>
