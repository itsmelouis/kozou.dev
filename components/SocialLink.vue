<template>
  <div class="row-start-1 md:row-auto">
    <div v-for="social in socials" :key="social.title" class="hover:scale-110">
      <a :href="social.link" rel="noreferrer noopener" :style="`:hover {border-color: ${social.color}}`" target="_blank"
        class="shadow-white shadow-none hover:shadow-lg mb-4 row-start-3 flex flex-row items-center bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50 cursor-pointer transition-colors duration-150">
        <v-icon :name="social.logo" scale="1.4" class="text-[#5865f2]" :style="`{color: ${social.color}}`" />
        <h1 class="font-medium text-sm text-black/80 dark:text-slate-400 mx-3">{{ social.title }}</h1>
        <v-icon name="fa-external-link-alt" scale="1" class="text-gray-600" />
      </a>
    </div>
  </div>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoMailOpen, BiDiscord, BiTwitter, FaExternalLinkAlt } from "oh-vue-icons/icons"

addIcons(IoMailOpen, BiDiscord, BiTwitter, FaExternalLinkAlt)

export default {
  name: 'SocialLink',
  components: {
    "v-icon": OhVueIcon
  },
  data() {
    return {
      socials: [
        {
          logo: 'bi-discord',
          link: 'https://discord.com/users/379362415428632576379362415428632576',
          title: 'Kozou#0001 ',
          color: '5865f2'
        },
        {
          logo: 'bi-twitter',
          link: 'https://twitter.com/kozou4ever',
          title: '@Kozou4ever',
          color: '1da1f2'
        },
        {
          logo: 'io-mail-open',
          link: 'mailto:contact@kozou.dev',
          title: 'contact@kozou.dev',
          color: '9CA3A1'
        }
      ]
    }
  },

}
</script>

<style>
</style>
