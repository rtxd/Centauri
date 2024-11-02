<template>
	<TresGroup>
		<!-- Moon Orbit -->
		<TresGroup :rotation-x="0.4" :rotation-y="0.2" ref="moonOrbit">
			<!-- Moon -->
			<TresMesh :position="[5, 0, 0]">
				<TresSphereGeometry :args="[0.27, 32, 32]" />
				<!-- Moon is roughly 27% the size of Earth -->
				<TresMeshStandardMaterial
					:map="moonTexture"
					:roughness="0.8"
					:metalness="0"
				/>
			</TresMesh>
		</TresGroup>
	</TresGroup>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useTexture } from "@tresjs/core";
import { useRenderLoop } from "@tresjs/core";
import type { Texture } from "three";
import type { Group } from "three";

const moonTexture = ref<Texture | null>(null);
const moonOrbit = ref<Group | null>(null);

// Animation
const { onLoop } = useRenderLoop();
onLoop(() => {
	if (moonOrbit.value) {
		moonOrbit.value.rotation.y += 0.0015; // Adjust speed as needed
	}
});

// Register cleanup first
onUnmounted(() => {
	if (moonTexture.value) {
		moonTexture.value.dispose();
		moonTexture.value = null;
	}
});

// Load texture
onMounted(async () => {
	try {
		moonTexture.value = await useTexture(["/textures/moon.jpg"]);
	} catch (error) {
		console.error("Error loading moon texture:", error);
	}
});
</script>
