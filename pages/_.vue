<template>
  <div :class="dark ? 'dark' : 'light'">
    <div
      class="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen">
      <Header />
      <div class="mt-32 w-[80%] md:w-[45rem]">
        <h1 class="text-black dark:text-white font-bold text-3xl mb-3">Oops.. Something's wrong here ☢️</h1>
        <p class="text-black dark:text-white text-lg mb-96">Do you mean
          <a :href="googleSearch" rel="noreferrer" target="_blank"
            class="text-blue-500 hover:text-blue-800 transition-colors duration-300 font-medium underline">
            this</a>?
        </p>
        <FooterPageVue />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header.vue'
import FooterPageVue from '../components/FooterPage.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    FooterPageVue,
  },
  data() {
    return {
      googleSearch: null
    }
  },
  head() {
    return {
      title: 'Unknown | kozou.dev'
    }
  },
  computed: {
    ...mapGetters(['dark'])
  },
  mounted() {
    this.googleSearch = `https://www.google.com/search?q=${document.location.pathname.split('/').join('')}`
  },

}
</script>
