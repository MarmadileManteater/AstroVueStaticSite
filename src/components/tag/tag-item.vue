<script lang="ts" setup>
defineProps({
  link: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a 
    :href="link"
  >
    <span
      :class="[name, 'align-top', 'hover:underline', 'p-2', 'bg-zinc-200', 'dark:bg-zinc-700', 'dark:text-white', 'rounded-xl', 'mr-3','mb-2','mt-2', 'inline-block']"
    >
      {{ name }}
    </span>    
  </a>
</template>
