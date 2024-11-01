<template>
	<div class="max-w-7xl mx-auto px-4 py-8">
		<h1 class="text-4xl font-bold mb-6 text-gray-100">Earth</h1>

		<EarthExplorer />

		<div class="mt-8 prose prose-invert">
			<!-- Add your earth-related content here -->
			<p class="text-gray-300">
				Explore the layers and history of our planet Earth.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import EarthExplorer from "~/components/EarthExplorer.vue";

definePageMeta({
	description: "Explore Earth's structure, formation, and geological history",
	tags: ["earth", "geology", "planets"],
});
</script>
