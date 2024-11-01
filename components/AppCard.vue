<template>
	<div
		class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700"
	>
		<h3
			class="text-2xl font-bold mb-4 bg-clip-text text-transparent gradient-text"
		>
			{{ title }}
		</h3>
		<p class="text-gray-300">{{ description }}</p>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});
</script>
