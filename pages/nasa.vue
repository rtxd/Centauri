<template>
	<div v-if="pending">Loading...</div>
	<div v-else-if="error">Error: {{ error.message }}</div>
	<div v-else class="space-y-4">
		<h1 class="text-2xl font-bold">{{ data.data.title }}</h1>
		<img
			:src="data.data.url"
			:alt="data.data.title"
			class="max-w-full rounded-lg shadow-lg"
		/>
		<p class="text-gray-300">{{ data.data.explanation }}</p>
		<p class="text-sm text-gray-400">Date: {{ data.data.date }}</p>
	</div>
</template>

<script setup>
const { data, pending, error } = await useFetch("/api/nasa/apod");
</script>
