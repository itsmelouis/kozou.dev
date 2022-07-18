<template>
  <div
    class="w-full flex flex-wrap flex-row justify-center p-0.5 border border-slate-800 rounded-md bg-white/10 dark:bg-black/10 mb-12">

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'TypeScript', classes: 'a' }">
        <v-icon class="flex p-2" name="co-typescript" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'JavaScript', classes: 'a' }">
        <v-icon class="flex p-2" name="co-javascript" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'NPM', classes: 'a' }">
        <v-icon class="flex p-2" name="co-npm" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'Yarn', classes: 'a' }">
        <v-icon class="flex p-2" name="co-yarn" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'PHP', classes: 'a' }">
        <v-icon class="flex p-2" name="co-php" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'Git', classes: 'a' }">
        <v-icon class="flex p-2" name="bi-git" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'VS Code', classes: 'a' }">
        <v-icon class="flex p-2" name="co-visual-studio-code" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'Node JS', classes: 'a' }">
        <v-icon class="flex p-2" name="fa-node-js" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'Insomnia', classes: 'a' }">
        <v-icon class="flex p-2" name="si-insomnia" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'TailwindCSS', classes: 'a' }">
        <v-icon class="flex p-2" name="si-tailwindcss" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'Nuxt.js', classes: 'a' }">
        <v-icon class="flex p-2" name="co-nuxt-js" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'Vue', classes: 'a' }">
        <v-icon class="flex p-2" name="co-vue-js" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'Angular', classes: 'a' }">
        <v-icon class="flex p-2" name="co-angular" scale="2.5" />
      </div>
    </li>

    <li class="flex p-1.5">
      <div v-tooltip="{ content: 'MySQL', classes: 'a' }">
        <v-icon class="flex p-2" name="co-mysql" scale="2.5" />
      </div>
    </li>


  </div>
</template>

<script>
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoTypescript, CoJavascript, CoNpm, CoYarn, CoPhp, BiGit, CoVisualStudioCode, FaNodeJs, SiInsomnia, SiTailwindcss, CoNuxtJs, CoVueJs, CoAngular, CoMysql } from "oh-vue-icons/icons"

addIcons(CoTypescript, CoJavascript, CoNpm, CoYarn, CoPhp, BiGit, CoVisualStudioCode, FaNodeJs, SiInsomnia, SiTailwindcss, CoNuxtJs, CoVueJs, CoAngular, CoMysql)

export default {
  name: 'ToolsIcons',
  components: {
    "v-icon": OhVueIcon
  }
}
</script>

<style>
.a {
  background-color: #374151;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: white;
  font-weight: 500;
}
</style>
