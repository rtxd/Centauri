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
					<SearchBar />
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
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts"></script>
