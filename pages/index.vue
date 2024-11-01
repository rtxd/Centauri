<template>
	<main
		class="container mx-auto px-4 max-w-3xl min-h-screen flex flex-col justify-center"
	>
		<section class="space-y-12">
			<AppTitle />
			<AppDescription />
			<AppCarousel />
		</section>
	</main>
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
