<template>
  <transition>
    <div v-if="activity"
      class="fixed left-6 -bottom-0 w-[20rem] h-[7rem] hidden lg:flex flex-col items-start justify-start">
      <h1 class="text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center">
        Currently listening to Spotify
        <span class="ml-2 w-2 h-2">
          <span class="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
          <span class="absolute w-2 h-2 bg-red-600 rounded-full" />
        </span>
      </h1>

      <div class="w-full h-[6rem] flex flex-row items-center justify-start">
        <img :src="cover" class="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none" />
        <div class="w-56 h-full flex flex-col items-start justify-center">
          <a :href="trackUrl" target="_blank" rel="noreferrer"
            class="w-full font-medium text-gray-900 dark:text-[#e1eafd] hover:underline truncate">
            {{ title }}
          </a>
          <p class="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
            {{ artist }}
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SpotifyCard',
  data() {
    return {
      activity: null,
      cover: null,
      title: null,
      artist: null,
      trackUrl: null
    }
  },
  created() {
    setInterval(() => {
      axios
        .get('https://api.lanyard.rest/v1/users/379362415428632576')
        .then(response => {
          this.activity = response.data.data.spotify
          if (this.activity) {
            this.cover = this.activity.album_art_url
            this.title = this.activity.song
            this.artist = this.activity.artist
            this.trackUrl = `https://open.spotify.com/track/${this.activity.track_id}`
          }
        })
        .catch(error => console.log(error))
    }, 5000)
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
