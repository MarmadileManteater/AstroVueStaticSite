<script lang='ts' setup>
import InvidiousVideoBackground from '../invidious-background-video/invidious-video-background.vue'
import GodotSceneBackground from '../godot-scene-background/godot-scene-background.vue'
import EmojiImage from '../emoji-image/emoji-image.vue'
</script>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    sceneUrl: {
      type: String,
      required: true
    },
    videoId: {
      type: String,
      required: true
    },
    itag: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      loadGodot: false
    }
  },
  methods: {
    enableGodot() {
      this.loadGodot = true
    }
  }
})
</script>
<template>
  <div
    v-if="loadGodot"  
  >
    <GodotSceneBackground :sceneUrl="sceneUrl" />
  </div>
  <div
    v-if="!loadGodot"  
  >
    <InvidiousVideoBackground 
      :videoId="videoId"
    />
    <a class='text-white absolute top-2 right-5 z-10 hover:underline cursor-pointer hidden lg:inline' @click="enableGodot">Load <EmojiImage emoji='🤖' />Godot background scene in browser</a>
  </div>
</template>
