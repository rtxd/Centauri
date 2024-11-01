<template>
	<div
		class="container mx-auto px-4 max-w-3xl min-h-screen flex flex-col justify-center"
	>
		<div class="space-y-12">
			<h1
				class="text-5xl md:text-6xl font-extrabold text-center tracking-tight"
			>
				<span
					class="font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
					>Welcome to
				</span>
				<span
					class="font-playwrite bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
					>Centauri</span
				>
			</h1>

			<div class="space-y-6">
				<p
					class="text-xl md:text-2xl text-center text-gray-300 font-light leading-relaxed font-sans"
				>
					A place to explore the wonders of the universe.
				</p>

				<p
					class="text-lg md:text-xl text-center text-gray-400 font-light leading-relaxed font-sans"
				>
					Learn about the universe, our solar system, galaxies and our home
					planet.
				</p>
			</div>

			<div class="flex justify-center">
				<NuxtLink
					to="/nasa"
					class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium text-lg"
				>
					View NASA Picture of the Day
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup>
useHead({
	link: [
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&display=swap",
		},
	],
});
</script>

<style>
.font-display {
	font-family: "Open Sans", sans-serif;
}

.font-sans {
	font-family: "Open Sans", sans-serif;
}

.font-playwrite {
	font-family: "Playwrite GB S", sans-serif;
	font-weight: 400;
}
</style>
