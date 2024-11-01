<template>
	<NuxtLink
		:to="to"
		class="block bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-800/70 transition-colors"
	>
		<img
			v-if="image"
			:src="image"
			:alt="title"
			class="w-full h-48 object-cover rounded-lg mb-4"
		/>
		<h3
			class="text-2xl font-bold mb-4 bg-clip-text text-transparent gradient-text"
		>
			{{ title }}
		</h3>
		<p class="text-gray-300">{{ description }}</p>
	</NuxtLink>
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
	to: {
		type: [String, Object],
		required: true,
	},
	image: {
		type: String,
		default: null,
	},
});
</script>
