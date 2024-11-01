<template>
	<div class="max-w-4xl mx-auto px-4 py-12">
		<h1 class="text-4xl font-bold mb-6 text-gray-100">About Me</h1>

		<div class="prose prose-invert">
			<p class="text-xl mb-6 text-gray-300">
				Hi, I'm Alejandro Munoz! I'm a passionate software engineer based in
				Sydney, Australia, currently working at WiseTech Global. I love creating
				beautiful, functional websites and have an insatiable curiosity about
				our universe.
			</p>

			<div class="flex items-center gap-4 mb-8">
				<a
					href="https://github.com/rtxd"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 px-4 py-2 bg-[#2A2D2F] rounded-lg hover:bg-[#3A3D3F] transition-colors"
				>
					<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					<span class="text-gray-300">Follow me on GitHub</span>
				</a>
			</div>

			<h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-100">
				Why This Website?
			</h2>

			<p class="mb-6 text-gray-300">
				I created this digital space to document my journey of discovery and
				learning. As someone who's deeply fascinated by the big questions about
				our existence, I'm on a mission to understand:
			</p>

			<ul class="space-y-3 text-gray-300">
				<li>🌌 The mysteries of astronomy and our cosmic neighborhood</li>
				<li>🌍 The formation and evolution of Earth</li>
				<li>👤 The story of human origins and our place in the universe</li>
				<li>
					🧬 The journey of life itself and how we became who we are today
				</li>
			</ul>

			<p class="mt-6 text-gray-300">
				This website serves as both a personal knowledge base and a platform to
				share what I learn. As a software engineer, I believe in making complex
				topics accessible and visually engaging, combining my technical skills
				with my passion for learning and sharing knowledge.
			</p>

			<p class="mt-6 text-gray-300">
				Join me on this journey of exploration as we dive into the fascinating
				stories of our universe, our planet, and ourselves.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	description:
		"Learn about Alejandro Munoz, a software engineer at WiseTech Global exploring the mysteries of astronomy, Earth's formation, and human origins.",
	tags: ["about", "personal", "introduction", "portfolio"],
});
</script>
