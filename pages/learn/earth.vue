<template>
	<div class="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
		<h1 class="text-4xl font-bold mb-6 text-gray-100">Welcome to Earth</h1>
		<p class="text-gray-300">
			Our home planet, Earth, is a dynamic and fascinating world that has shaped
			life and civilization for billions of years.
		</p>

		<EarthExplorer class="my-8" />
	</div>
</template>

<script setup lang="ts">
import EarthExplorer from "~/components/EarthExplorer/index.vue";

definePageMeta({
	description: "Explore Earth's structure, formation, and geological history",
	tags: ["earth", "geology", "planets"],
});
</script>
