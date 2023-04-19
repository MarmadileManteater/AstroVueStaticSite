<script lang="ts" setup>
import EmojiImage from '../emoji-image/emoji-image.vue'
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    videoId: {
      type: String,
      required: true
    },
    server: {
      type: String,
      required: false,
      default: 'https://invidious.sethforprivacy.com'
    },
    itag: {
      type: String,
      required: false,
      default: '22'
    }
  },
  data() {
    return {
      internalServer: this.server
    }
  },
  computed: {
    videoUrl() {
      return `${this.internalServer}/latest_version?id=${this.videoId}&itag=${this.itag}&local=true`
    },
    invidiousUrl() {
      return `${this.internalServer}/watch?v=${this.videoId}`
    }
  },
  mounted() {
    this.internalServer = this.server
    const invidiousInstanceList = [
      'https://invidious.sethforprivacy.com',
      'https://vid.puffyan.us',
      'https://yt.artemislena.eu'
    ]
    const onFirstInteraction = () => {
      const video = this.$refs.video as HTMLVideoElement
      const timeUpdate = () => {
        if (video.currentTime > 3) {
          video.parentElement?.setAttribute('data-active', 'true')
          video.removeEventListener('timeupdate', timeUpdate)
        }
      }
      const onError = async () => {
        console.warn(`Issue loading from instance '${this.server}'; attempting another . . . `)
        try {
          let tryServer = this.server
          while (tryServer === this.server) {
            tryServer = invidiousInstanceList[Math.floor(invidiousInstanceList.length * Math.random())]
          }
          this.internalServer = tryServer
          // in the browser, play the video whenever it's attributes change
          new MutationObserver((_, observer) => {
            video.play()
            observer.disconnect()
          }).observe(video, { attributes: true, characterData: false, characterDataOldValue: false, childList: false })
        } catch (error) {
          console.error(error)
        }
      }
      
      video.addEventListener('error', onError)
      video.addEventListener('timeupdate', timeUpdate)
      setTimeout(() => {
        if (video.currentTime == 0) {
          // Timeout error
          onError()
        }
      }, 6000)
      cleanUp()
      video.play()
    }
    const cleanUp = () => {
      window.removeEventListener('click', onFirstInteraction)
      window.removeEventListener('keypress', onFirstInteraction)
    }
    window.addEventListener('click', onFirstInteraction)
    window.addEventListener('keypress', onFirstInteraction)
  }
})
</script>

<template>
  <div class='flex justify-center fixed top-0 left-0 w-screen h-screen'>
    <video 
      ref="video"
      loop
      muted
      :src="videoUrl"
    ></video>
  </div>
  <a
    target="_blank"
    class="hover:underline text-blue text-blue-600 dark:text-red-300 dark:bg-zinc-900 bg-white p-3 z-10 fixed top-0 left-0"
    :href="invidiousUrl"
  >
    Watch this video on <span class="icon link"><EmojiImage emoji="🔗" /></span><span class="icon"><EmojiImage emoji="📺" /></span>Invidious
  </a>
</template>

<style scoped>


a, video {
  position: fixed;
  opacity: 0;
  transition: opacity 1s ease;
  font-size: 0;
}

div[data-active="true"] + a {
  top: 0px;
  left: 0px;
  right: auto;
  bottom: auto;
  border-radius: 0 0 5px 0;
  position: fixed;
  border-top: 0;
  border-left: 0;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 1em;
}

div[data-active="true"] + a span.link { 
  display: none;
}

@media (max-width: 1500px) {
  div[data-active="true"] + a {
    position: absolute;
  }
}

@media (max-width: 1368px) {
  div[data-active="true"] + a {
    top: 0px;
    left: 0px;
    right: auto;
    bottom: auto;
    border-radius: 0 0 5px 0;
    padding: 3px;
    font-size: 0;
  }
  div[data-active="true"] + a .icon {
    font-size: initial;
  }
  div[data-active="true"] + a span.link { 
    display: inline;
  }
}

video {
  z-index: -1;
  top: 0;
  left: 50%;
  margin-left: -50%;
  min-width: 100%;
  height: 100vh;
}

div[data-active="true"] video, div[data-active="true"] + a {
  opacity: 1;
}

@media (max-width: 768px) {
  video {
    top: -100px;
    width: 100%;
    height: auto;
  }
}

@media (max-width: 500px) {
  video {
    top: -50px;
    width: 100%;
    height: auto;
  }
}

</style>
