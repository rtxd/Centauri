<template>
	<div class="relative">
		<input
			type="text"
			placeholder="Search..."
			class="w-full px-4 py-2 bg-[#1A1D1F] text-gray-300 rounded-lg border border-[#3E4142] focus:outline-none focus:border-gray-500 placeholder-gray-500"
			v-model="searchQuery"
			@input="handleSearch"
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

		<!-- New Dropdown Menu -->
		<div
			v-if="searchQuery && results.length > 0"
			class="absolute z-10 w-full mt-2 bg-[#1A1D1F] border border-[#3E4142] rounded-lg shadow-lg"
		>
			<div
				v-for="result in results"
				:key="result.path"
				@click="navigateToPage(result.path)"
				class="p-3 hover:bg-[#2A2D2F] cursor-pointer border-b border-[#3E4142] last:border-b-0"
			>
				<div class="font-medium text-gray-200">{{ result.title }}</div>
				<div v-if="result.meta.description" class="text-sm text-gray-400">
					{{ result.meta.description }}
				</div>
				<div v-if="result.meta.tags?.length" class="mt-1 flex gap-2">
					<span
						v-for="tag in result.meta.tags"
						:key="tag"
						class="text-xs px-2 py-1 bg-[#2A2D2F] text-gray-400 rounded"
					>
						{{ tag }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
import { usePages } from "~/composables/usePages";
import { useRouter } from "vue-router";

const router = useRouter();
const searchQuery = ref("");
const results = ref<Array<ReturnType<typeof usePages>["pages"][0]>>([]);
const { pages } = usePages();

const handleSearch = () => {
	const query = searchQuery.value.toLowerCase();

	results.value = query
		? pages.filter((page) => {
				const description = (page.meta.description || "").toLowerCase();
				const tags = (page.meta.tags || []).map((tag) => tag.toLowerCase());
				const title = page.title.toLowerCase();

				return (
					description.includes(query) ||
					tags.some((tag) => tag.includes(query)) ||
					title.includes(query)
				);
		  })
		: [];
};

const navigateToPage = (path: string) => {
	router.push(path);
	searchQuery.value = "";
	results.value = [];
};
</script>
