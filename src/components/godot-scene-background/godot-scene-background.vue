<script lang='ts' setup>
import EmojiImage from '../emoji-image/emoji-image.vue'
</script>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    sceneUrl: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
      <span class='z-10 top-2 left-0 md:absolute'>
      <a href='https://github.com/MarmadileManteater/JustThreeBlocksBackground' target='_blank' class='pt-2 pl-2 hover:underline text-white'>Background</a> <a class='pt-2 hover:underline text-white' href='https://godotengine.org/'>made with <EmojiImage emoji='🤖' />Godot</a>
    </span>
    <iframe 
      :src="sceneUrl"
      class='w-screen h-screen fixed top-0 left-0 z-0'
    ></iframe>
</template>
