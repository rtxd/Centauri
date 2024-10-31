<template>
	<nav class="bg-[#0E1113] shadow-lg border-b border-[#3E4142]">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between items-center h-16">
				<!-- Logo/Brand -->
				<div class="flex items-center">
					<div class="h-16 w-16 flex items-center justify-center">
						<SolarSystem class="h-12 w-12" />
					</div>
					<NuxtLink to="/" class="text-xl font-bold text-white">
						Centauri
					</NuxtLink>
				</div>

				<!-- Search Bar -->
				<div class="flex-1 max-w-lg mx-8">
					<div class="relative">
						<input
							type="text"
							placeholder="Search..."
							class="w-full px-4 py-2 bg-[#1A1D1F] text-gray-300 rounded-lg border border-[#3E4142] focus:outline-none focus:border-gray-500 placeholder-gray-500"
							v-model="searchQuery"
						/>
						<button
							class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>

				<!-- Navigation Links -->
				<div class="hidden md:flex items-center space-x-8">
					<NuxtLink
						to="/"
						class="text-gray-300 hover:text-white transition duration-150"
					>
						Home
					</NuxtLink>
					<NuxtLink
						to="/about"
						class="text-gray-300 hover:text-white transition duration-150"
					>
						About
					</NuxtLink>
					<NuxtLink
						to="/contact"
						class="text-gray-300 hover:text-white transition duration-150"
					>
						Contact
					</NuxtLink>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
const searchQuery = ref("");
</script>
