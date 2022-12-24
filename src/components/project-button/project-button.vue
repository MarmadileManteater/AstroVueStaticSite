
<script setup>
defineProps({
  link: {
    type: String,
    required: true
  },
  target: {
    type: String,
    required: false,
    default: 'self'
  },
  index: {
    type: Number,
    required: false,
    default: 0
  }
})
</script>

<template>
  <a
    :href="link"
    :target="target"
    :class="['p-3', 'inline-block', 'hover:underline', index % 2 === 0?'dark:bg-zinc-900':'dark:bg-zinc-700', index % 2 === 0?'bg-green-700':'bg-red-700', 'text-white', 'dark:bg-zinc-600', 'rounded-lg', 'mr-5', 'mb-3']"
  ><slot /> &raquo;</a>
</template>
