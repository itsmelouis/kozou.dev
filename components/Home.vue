<template>
	<div
		class="flex flex-row justify-center w-full h-full min-h-screen text-black dark:text-white bg-white dark:bg-[#12181d]"
	>
		<Header />
		<div class="mt-24 dark:bg-[#12181d]">
			<h1 class="mb-6 text-3xl font-extrabold">Home</h1>
		</div>
	</div>
</template>

<script>
import Header from "./Header.vue";

export default {
	name: "HomePage",
	components: {
		Header,
	},
};
</script>
