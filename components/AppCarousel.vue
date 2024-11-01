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
					v-for="page in learnPages"
					:key="page.path"
					class="w-full flex-shrink-0 px-4"
				>
					<AppCard
						:title="page.title"
						:description="page.meta.description || ''"
						:image="page.meta.image"
						:to="page.path"
					/>
				</div>
			</TransitionGroup>
		</div>

		<!-- Dots Navigation -->
		<div class="flex justify-center gap-2 mt-4">
			<button
				v-for="(_, index) in learnPages"
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
const { pages } = usePages("learn");
const learnPages = ref(pages);
const currentIndex = ref(0);

const nextSlide = () => {
	currentIndex.value = (currentIndex.value + 1) % learnPages.value.length;
};

const prevSlide = () => {
	currentIndex.value =
		currentIndex.value === 0
			? learnPages.value.length - 1
			: currentIndex.value - 1;
};

// Auto-advance slides (optional)
onMounted(() => {
	const interval = setInterval(nextSlide, 5000);
	onUnmounted(() => clearInterval(interval));
});
</script>
