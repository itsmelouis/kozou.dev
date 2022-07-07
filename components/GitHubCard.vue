<template>
  <div class="ease-linear duration-1000">
    <img :src="dark ? getGithubCard('') : getGithubCard('dracula')" alt="Github Card Stats" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GithubCard',

  data() {
    return {
      username: 'Kozou4ever',
      show_icons: true
    }
  },

  computed: {
    ...mapGetters(['dark'])
  },

  methods: {
    getGithubCard(theme) {
      return `https://github-readme-stats.vercel.app/api?username=${this.username}&show_icons=${this.show_icons}&theme=${theme}`
    }
  }
}
</script>
