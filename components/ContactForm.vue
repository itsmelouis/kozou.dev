<template>
  <div class="md:col-span-2 row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50">
    <h1 class="font-bold text-sm dark:text-slate-500 mb-1">EMAIL</h1>
    <p v-if="emailError" class="text-red-500 font-medium italic mb-1">Please enter a valid email address.</p>
    <input v-model="email" placeholder="example@mail.com" type="text" class="w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600
    dark:placeholder:text-slate-200/20" />

    <h1 class="font-bold text-sm dark:text-slate-500 mb-1">MESSAGE</h1>
    <p v-if="msgError" class="text-red-500 font-medium italic mb-1">Please provide at least 50 characters.</p>
    <textarea v-model="message" placeholder="Hello Kozou, do you know flies can actually fly?"
      class="w-full p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20" />
    <p v-if="formError" class="text-red-500 font-medium italic mb-1">Please complete the entire form.</p>
    <div class="w-full flex flex-row justify-between items-center">
      <p class="text-gray-900 dark:text-gray-300 text-sm"></p>

      <button
        class="border border-gray-800 hover:bg-gray-200 dark:border-indigo-600/80 dark:bg-indigo-600/70 dark:hover:bg-indigo-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75"
        @click="sendMessage()">
        <span class="mt-[2px]">Send</span>
        <v-icon class="ml-2 mt-0.5" name="io-send" scale="0.8" />
      </button>
    </div>
  </div>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoSend } from "oh-vue-icons/icons"

addIcons(IoSend)

export default {
  name: 'ContactForm',

  components: {
    "v-icon": OhVueIcon
  },

  data() {
    return {
      email: "",
      emailError: false,
      message: "",
      msgError: false,
      formError: false,
    }
  },

  methods: {
    sendMessage() {
      const emailRegex = (/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      if (!emailRegex.test(this.email)) {
        this.emailError = true
        // eslint-disable-next-line no-return-assign
        setTimeout(() => this.emailError = false, 5000)
      }
      if (this.email === "" || this.message === "") {
        this.msgError = true
        // eslint-disable-next-line no-return-assign
        setTimeout(() => this.msgError = false, 5000)
      }

      if (this.message.length < 50) {
        this.formError = true
        // eslint-disable-next-line no-return-assign
        setTimeout(() => this.formError = false, 5000)
      }

    }
  }
}
</script>

<style>
</style>
