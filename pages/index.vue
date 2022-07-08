<template>
  <div class="transition duration-200 trans" :class="dark ? 'dark' : 'light'">
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
