<template>
	<div class="transition" :class="dark ? 'dark' : 'light'">
		<Nuxt />
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["dark"]),
	},
};
</script>
