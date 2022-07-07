<template>
  <div
    class="flex flex-row justify-center w-full h-full min-h-screen text-black dark:text-white bg-white dark:bg-gray-900"
    :class="dark ? 'dark' : 'light'"
  >
    <HomePage />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomePage from '../components/Home.vue'

export default {
  name: 'IndexPage',
  components: { HomePage },
  head() {
    return {
      title: 'Home | kozou.dev'
    }
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>
