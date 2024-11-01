<template>
	<div class="container mx-auto px-4 max-w-3xl">
		<div v-if="pending" class="text-center">Loading...</div>
		<div v-else-if="error" class="text-center">Error: {{ error.message }}</div>
		<div v-else class="space-y-6 text-center">
			<h1
				class="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
			>
				{{ data.data.title }}
			</h1>
			<p class="text-gray-300">{{ data.data.explanation }}</p>
			<p class="text-sm text-gray-400">Date: {{ data.data.date }}</p>
			<div class="relative p-4 my-8">
				<NuxtImg
					:src="data.data.url"
					:alt="data.data.title"
					class="max-w-full rounded-lg shadow-xl mx-auto relative z-10 border-4 border-purple-500/20"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-lg blur-sm"
				></div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { data, pending, error } = await useFetch("/api/nasa/apod");
</script>
