<template>
	<div class="relative w-3/4 h-[500px] bg-[#1A1D1F] rounded-lg overflow-hidden">
		<ClientOnly>
			<TresCanvas>
				<!-- Increase background scene size -->
				<TresMesh>
					<TresSphereGeometry :args="[2500, 32, 32]" />
					<TresMeshBasicMaterial :map="starsTexture" :side="2" />
				</TresMesh>

				<TresPerspectiveCamera :position="[0, 0, 10]" :far="10000" :fov="75" />
				<TresAmbientLight :intensity="0.8" />
				<TresDirectionalLight :position="[5, 5, 5]" :intensity="0.5" />
				<OrbitControls :autoRotate="isAutoRotating" :autoRotateSpeed="0.5" />

				<EarthModel :selectedLayer="selectedLayer" />
				<MoonModel />
				<SunModel />
			</TresCanvas>
		</ClientOnly>

		<!-- Layer Controls -->
		<div class="absolute top-4 right-4 flex flex-col gap-2">
			<div class="flex gap-2 bg-black/30 p-4 rounded-lg">
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

			<!-- Rotation Control -->
			<button
				@click="isAutoRotating = !isAutoRotating"
				class="px-4 py-2 rounded-lg transition-colors bg-black/30 text-gray-300 hover:bg-black"
			>
				{{ isAutoRotating ? "Stop Rotation" : "Start Rotation" }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { OrbitControls } from "@tresjs/cientos";
import { TresCanvas, useTexture } from "@tresjs/core";
import EarthModel from "./EarthModel.vue";
import MoonModel from "./MoonModel.vue";
import SunModel from "./SunModel.vue";
import type { Texture } from "three";

const selectedLayer = ref("crust");
const starsTexture = ref<Texture | null>(null);
const isAutoRotating = ref(true);

onUnmounted(() => {
	if (starsTexture.value) {
		starsTexture.value.dispose();
		starsTexture.value = null;
	}
});

onMounted(async () => {
	try {
		starsTexture.value = await useTexture(["/textures/stars.jpg"]);
	} catch (error) {
		console.error("Error loading stars texture:", error);
	}
});
</script>

<style scoped></style>
