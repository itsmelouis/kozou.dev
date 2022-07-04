<template>
	<div
		class="flex flex-row justify-center w-full h-full min-h-screen text-black dark:text-white bg-white dark:bg-gray-900"
		:class="dark ? 'dark' : 'light'"
	>
		<ContactVue />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import ContactVue from "../components/Contact.vue";

export default {
	name: "ContactView",
	components: {
		ContactVue,
	},
	head() {
		return {
			title: "Contact | kozou.dev",
		};
	},
	computed: {
		...mapGetters(["dark"]),
	},
};
</script>
