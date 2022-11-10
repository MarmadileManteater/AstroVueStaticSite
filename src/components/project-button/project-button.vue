
<script setup>
  defineProps({
    link: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: false,
      defaultValue: 'self'
    },
    index: {
      type: Number,
      required: false,
      defaultValue: 0
    }
  })
</script>

<template>
  <a
    :href="link"
    :target="target"
    :class="['p-3', 'inline-block', 'hover:underline', index % 2 === 0?'dark:bg-zinc-900':'dark:bg-zinc-700', index % 2 === 0?'bg-blue-400':'bg-red-400', 'text-white', 'dark:bg-zinc-600', 'rounded-lg', 'mr-5', 'mb-3']"
    ><slot/> &raquo;</a>
</template>
