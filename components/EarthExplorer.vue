<template>
	<div class="relative w-3/4 h-[500px] bg-[#1A1D1F] rounded-lg overflow-hidden">
		<ClientOnly>
			<TresCanvas>
				<TresPerspectiveCamera :position="[0, 0, 10]" />
				<TresAmbientLight :intensity="0.8" />
				<TresDirectionalLight :position="[5, 5, 5]" :intensity="0.5" />
				<OrbitControls :autoRotate="true" :autoRotateSpeed="0.5" />

				<!-- Core (inner) -->
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
			</TresCanvas>
		</ClientOnly>

		<!-- Layer Controls -->
		<div class="absolute top-4 right-4 flex gap-2 bg-black/30 p-4 rounded-lg">
			<button
				v-for="layer in ['crust', 'mantle', 'core']"
				:key="layer"
				@click="selectedLayer = layer"
				class="px-4 py-2 rounded-lg transition-colors"
				:class="
					selectedLayer === layer
						? 'bg-blue-500 text-white'
						: 'bg-gray-700 text-gray-300 hover:bg-gray-600'
				"
			>
				{{ layer.charAt(0).toUpperCase() + layer.slice(1) }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { OrbitControls } from "@tresjs/cientos";
import { useTexture } from "@tresjs/core";
import type { Texture } from "three";

defineComponent({
	name: "EarthExplorer",
});

const earthTexture = ref<Texture | null>(null);
const mantleTexture = ref<Texture | null>(null);
const coreTexture = ref<Texture | null>(null);
const selectedLayer = ref("crust");
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

<style scoped></style>
