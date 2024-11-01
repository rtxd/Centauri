<template>
	<div class="astronomy-page">
		<div class="hero-section">
			<h1 class="title">Explore the Cosmos</h1>
			<p class="subtitle">Journey through the wonders of astronomy</p>
		</div>
		<div class="content-grid">
			<!-- Topics Section -->
			<div class="topics-section">
				<h2>Key Topics in Astronomy</h2>
				<div class="topic-cards">
					<div
						v-for="topic in astronomyTopics"
						:key="topic.title"
						class="topic-card"
					>
						<img :src="topic.image" :alt="topic.title" class="topic-image" />
						<h3>{{ topic.title }}</h3>
						<p>{{ topic.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	tags: ["space", "science", "astronomy"],
	description: "Learn about the wonders of astronomy",
	appCard: {
		title: "Learn about Astronomy",
		description: "Explore the wonders of astronomy and learn about our cosmos.",
		to: "/learn/astronomy",
	},
});

const astronomyTopics = [
	{
		title: "Solar System",
		description:
			"Explore our cosmic neighborhood, including planets, moons, asteroids, and comets.",
		image: "/images/solar-system.webp",
	},
	{
		title: "Stars & Galaxies",
		description:
			"Discover the life cycles of stars and the vast collections of stellar systems.",
		image: "/images/galaxies.jpg",
	},
	{
		title: "Space Exploration",
		description:
			"Learn about human achievements in space and ongoing missions.",
		image: "/images/space-exploration.jpg",
	},
	{
		title: "Cosmic Phenomena",
		description:
			"Understand black holes, supernovas, and other fascinating space events.",
		image: "/images/phenomena.jpg",
	},
];
</script>

<style scoped>
.astronomy-page {
	min-height: 100vh;
	color: #fff;
}

.hero-section {
	padding: 4rem 2rem;
	text-align: center;
	background-image: radial-gradient(
			circle at center,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(0, 0, 0, 0.8) 70%,
			rgba(0, 0, 0, 0.95) 100%
		),
		url("/images/stars-bg.jpg");
	background-size: cover;
	background-position: center;
}

.title {
	font-size: 3.5rem;
	margin-bottom: 1rem;
	background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.subtitle {
	font-size: 1.5rem;
	color: #8ec5fc;
}

.content-grid {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
}

.topics-section {
	margin-bottom: 4rem;
}

.topic-cards {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
}

.topic-card {
	background: rgba(255, 255, 255, 0.1);
	border-radius: 1rem;
	padding: 1.5rem;
	transition: transform 0.3s ease;
}

.topic-card:hover {
	transform: translateY(-5px);
	background: rgba(255, 255, 255, 0.15);
}

.topic-image {
	width: 100%;
	height: 150px;
	object-fit: cover;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
}

.topic-card h3 {
	color: #8ec5fc;
	margin-bottom: 0.5rem;
}

.facts-section {
	background: rgba(255, 255, 255, 0.05);
	padding: 2rem;
	border-radius: 1rem;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
	color: #e0c3fc;
}

@media (max-width: 768px) {
	.title {
		font-size: 2.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
	}

	.topic-cards {
		grid-template-columns: 1fr;
	}
}
</style>
