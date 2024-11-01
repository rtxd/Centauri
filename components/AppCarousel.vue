<template>
	<div class="relative w-full max-w-4xl mx-auto px-4">
		<!-- Navigation Buttons -->
		<button
			@click="prevSlide"
			class="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/50 hover:bg-gray-800 rounded-full"
		>
			<span class="sr-only">Previous</span>
			←
		</button>

		<button
			@click="nextSlide"
			class="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/50 hover:bg-gray-800 rounded-full"
		>
			<span class="sr-only">Next</span>
			→
		</button>

		<!-- Cards Container -->
		<div class="overflow-hidden">
			<TransitionGroup
				tag="div"
				class="flex transition-transform duration-500 ease-in-out"
				:style="{ transform: `translateX(-${currentIndex * 100}%)` }"
			>
				<div
					v-for="card in cards"
					:key="card.id"
					class="w-full flex-shrink-0 px-4"
				>
					<AppCard :title="card.title" :description="card.description" />
				</div>
			</TransitionGroup>
		</div>

		<!-- Dots Navigation -->
		<div class="flex justify-center gap-2 mt-4">
			<button
				v-for="(_, index) in cards"
				:key="index"
				@click="currentIndex = index"
				class="w-2 h-2 rounded-full transition-colors duration-200"
				:class="
					currentIndex === index
						? 'bg-purple-500'
						: 'bg-gray-600 hover:bg-gray-500'
				"
			>
				<span class="sr-only">Slide {{ index + 1 }}</span>
			</button>
		</div>
	</div>
</template>

<script setup>
const cards = ref([
	{
		id: 1,
		title: "Exploring Mars",
		description:
			"Discover the latest findings from the Red Planet, including evidence of ancient water and potential signs of life.",
	},
	{
		id: 2,
		title: "Black Holes",
		description:
			"Journey into the most mysterious objects in our universe, where gravity is so strong that even light cannot escape.",
	},
	{
		id: 3,
		title: "Exoplanets",
		description:
			"Explore worlds beyond our solar system, from super-Earths to gas giants orbiting distant stars.",
	},
	{
		id: 4,
		title: "Northern Lights",
		description:
			"Understand the science behind Earth's most spectacular light show, the Aurora Borealis.",
	},
]);

const currentIndex = ref(0);

const nextSlide = () => {
	currentIndex.value = (currentIndex.value + 1) % cards.value.length;
};

const prevSlide = () => {
	currentIndex.value =
		currentIndex.value === 0 ? cards.value.length - 1 : currentIndex.value - 1;
};

// Auto-advance slides (optional)
onMounted(() => {
	const interval = setInterval(nextSlide, 5000);
	onUnmounted(() => clearInterval(interval));
});
</script>
