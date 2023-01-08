<script lang="ts" setup>
import { convertEmojiToImages } from '@marmadilemanteater/gh-static-site-lib/src/helpers/emoji'

defineProps({
  emoji: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span v-html="convertEmojiToImages(emoji)"></span>
</template>
