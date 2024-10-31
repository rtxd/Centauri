<template>
	<div class="min-h-screen bg-[#101214] relative overflow-hidden">
		<Navbar />
		<main class="container mx-auto px-4 py-8 text-white relative">
			<NuxtPage />
		</main>
	</div>
</template>

<style scoped>
/* Add any global styles here */
body {
	margin: 0;
	padding: 0;
	overflow-x: hidden;
}
</style>
