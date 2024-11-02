<template>
	<div class="relative w-3/4 h-[500px] bg-[#1A1D1F] rounded-lg overflow-hidden">
		<ClientOnly>
			<TresCanvas>
				<TresPerspectiveCamera :position="[0, 0, 10]" />
				<TresAmbientLight :intensity="0.8" />
				<TresDirectionalLight :position="[5, 5, 5]" :intensity="0.5" />
				<OrbitControls :autoRotate="true" :autoRotateSpeed="0.5" />

				<EarthModel :selectedLayer="selectedLayer" />
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
import { ref } from "vue";
import { OrbitControls } from "@tresjs/cientos";
import { TresCanvas } from "@tresjs/core";
import EarthModel from "./EarthModel.vue";

const selectedLayer = ref("crust");
</script>

<style scoped></style>
