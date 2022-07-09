<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
    <div v-for="repo in repos" :key="repo.name"
      class="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
      <a :href="repo.html_url" target="_blank">
        <h1 class="font-semibold mb-1">{{ repo.name }}</h1>
        <p class="text-sm text-gray-800/70 dark:text-gray-100/70 mb-4">{{ repo.description }}</p>
        <div class="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
          <div class="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
            <div class="flex flex-row items-center">
              <div class="w-3 h-3 rounded-full mr-2" :style="{ background: languageColor(repo.language) }"></div>
              {{ repo.language }}
            </div>
            <div class="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {{ repo.stargazers_count }}
            </div>
            <div v-if="repo.fork">
              <p class="italic">Forked</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GithubProjectCard',


  data() {
    return {
      repos: null,
      colors: null
    }
  },

  mounted() {
    const repoReq = axios.get('https://api.github.com/users/kozou4ever/repos?type=owner')
    const languageColorReq = axios.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json')

    axios.all([repoReq, languageColorReq]).then(axios.spread((...responses) => {

      const repos = responses[0]
      this.repos = repos.data
      this.repos.shift()

      const languageColors = responses[1]
      this.colors = languageColors.data

    })).catch(errors => {
      console.log(errors)
    })
  },

  methods: {
    languageColor(language) {
      return this.colors[language].color
    }
  }
}
</script>
