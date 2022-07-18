<template>
  <div
    v-if="spotify"
    class="fixed left-6 -bottom-0 w-[20rem] h-[7rem] hidden lg:flex flex-col items-start justify-start"
  >
    <h1
      class="text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center"
    >
      Listening to Spotify
      <span class="ml-2 w-2 h-2">
        <span class="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
        <span class="absolute w-2 h-2 bg-red-600 rounded-full" />
      </span>
    </h1>

    <div class="w-full h-[6rem] flex flex-row items-center justify-start">
      <img
        :src="albumURL"
        class="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none"
        :alt="album"
      />
      <div class="w-56 h-full flex flex-col items-start justify-center">
        <a
          :href="songURL"
          target="_blank"
          rel="noreferrer"
          class="w-full font-medium text-gray-900 dark:text-[#e1eafd] hover:underline truncate"
        >
          {{ song }}
        </a>
        <p class="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
          {{ artist }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpotifyCard',
  data() {
    return {
      userId: '379362415428632576',
      lanyardSocket: null,
      spotify: null,
      song: null,
      artist: null,
      albumURL: null,
      songURL: null,
      album: null
    }
  },

  beforeDestroy() {
    this.lanyardSocket?.close()
  },

  async mounted() {
    this.lanyardSocket = await this.$lanyard({
      userId: this.userId,
      // Enable socket option
      socket: true
    })
    this.lanyardSocket.addEventListener('message', ({ data }) => {
      const { d: status } = JSON.parse(data)
      this.spotify = status.spotify
      this.song = status.spotify?.song
      this.artist = status.spotify?.artist
      this.albumURL = status.spotify?.album_art_url
      this.songURL = `https://open.spotify.com/track/${status.spotify?.track_id}`
      this.album = status.spotify?.album
    })
  }
}
</script>
