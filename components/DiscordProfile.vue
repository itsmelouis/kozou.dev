<template>

  <div v-if="loading" class="animate-pulse flex flex-row items-center">
    <div></div>
    <div class="rounded-full h-14 w-14 bg-slate-200"></div>
  </div>
  <div v-else class="flex flex-row items-center">
    <p class="text-black dark:text-white font-bold text-base mr-2">{{ getDiscordStatus() }}</p>
    <img v-if="avatar" :src="avatar" alt="Discord profile" class="rounded-full h-14 w-14 border-4"
      :class="getDiscordStatusColor()">
  </div>
</template>



<script>
export default {
  name: 'DiscordProfile',
  data() {
    return {
      userId: "379362415428632576",
      lanyardSocket: null,
      lanyard: {},
      avatar: null,
      statusColor: "",
      loading: true

    };
  },

  beforeDestroy() {
    this.lanyardSocket?.close();
  },

  async created() {
    this.lanyardSocket = await this.$lanyard({
      userId: this.userId,
      // Enable socket option
      socket: true,
    });
    this.lanyardSocket.addEventListener("message", ({ data }) => {
      const { d: status } = JSON.parse(data);
      this.lanyard = status
      this.avatar = `https://cdn.discordapp.com/avatars/${this.userId}/${status.discord_user?.avatar}.gif`
      this.statusColor = status?.discord_status
      this.loading = false

    });
  },
  methods: {
    getDiscordStatusColor() {
      switch (this.statusColor) {
        case "online":
          return "border-[#3ba55d]"
        case "idle":
          return "border-[#faa81a]"
        case "dnd":
          return "border-[#ed4245]"
        default:
          return "border-[#747f8d]"
      }
    },
    getDiscordStatus() {
      switch (this.statusColor) {
        case "online":
          return "Online"
        case "idle":
          return `Online (${this.statusColor.toUpperCase()})`
        case "dnd":
          return `Online (${this.statusColor.toUpperCase()})`
        case "offline":
          return "Offline"
        default:
          return ""
      }
    },
  }
}
</script>

<style>
</style>
