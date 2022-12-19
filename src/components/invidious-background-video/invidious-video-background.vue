
<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: {
      videoId: {
        type: String,
        required: true
      },
      server: {
        type: String,
        required: false,
        default: 'http://localhost:8081'
      },
      itag: {
        type: String,
        required: false,
        default: '22'
      }
    },
    data() {
      return {
        internalServer: ''
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
        'https://invidious.namazso.eu',
        'https://yt.artemislena.eu'
      ]
      const onFirstInteraction = () => {
        const timeUpdate = () => {
          if (this.$refs.video.currentTime > 3) {
            this.$refs.video.setAttribute('data-active', 'true')
            this.$refs.video.removeEventListener('timeupdate', timeUpdate)
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
              this.$refs.video.play()
              observer.disconnect()
            }).observe(this.$refs.video, { attributes: true, characterData: false, characterDataOldValue: false, childList: false })
          } catch (error) {
            console.error(error)
          }
        }
        this.$refs.video.addEventListener('error', onError)
        this.$refs.video.addEventListener('timeupdate', timeUpdate)
        setTimeout(() => {
          if (this.$refs.video.currentTime == 0) {
            // Timeout error
            onError()
          }
        }, 6000)
        cleanUp()
        this.$refs.video.play()
      }
      const cleanUp = () => {
        window.removeEventListener('click', onFirstInteraction)
        window.removeEventListener('keypress', onFirstInteraction)
      }
      window.addEventListener('click', onFirstInteraction)
      window.addEventListener('keypress', onFirstInteraction)
      this.$refs.video.play()
    }
  })
  
</script>

<template>
  <video 
    ref="video"
    loop
    muted
    :src="videoUrl"
  ><slot/></video>
  <a
    target='_blank'
    class='hover:underline text-blue text-blue-600 dark:text-red-300 dark:bg-zinc-900 bg-white p-3'
    :href='invidiousUrl'
  >
    Watch this video on <span class='icon link' >🔗</span><span class='icon'>📺</span>Invidious
  </a>
</template>

<style scoped>

a, video {
  position: fixed;
  opacity: 0;
  transition: opacity 1s ease;
}

video[data-active="true"] + a {
  opacity: 1;
  bottom: 0px;
  right: 0px;
  border-radius: 5px 0 0 0;
}

video[data-active="true"] + a span.link { 
  display: none;
}

@media (max-width: 1530px) {
  video[data-active="true"] + a {
    top: 0px;
    left: 0px;
    right: auto;
    bottom: auto;
    border-radius: 0 0 5px 0;
    position: absolute;
  }
}

@media (max-width: 1368px) {
  video[data-active="true"] + a {
    top: 0px;
    left: 0px;
    right: auto;
    bottom: auto;
    border-radius: 0 0 5px 0;
    padding: 3px;
    font-size: 0;
  }
  video[data-active="true"] + a .icon {
    font-size: initial;
  }
  video[data-active="true"] + a span.link { 
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
  max-width: initial;
}

video[data-active="true"] {
  opacity: 1;
}

@media (max-width: 768px) {
  video {
    width: 100%;
    height: auto;
  }
}


</style>
