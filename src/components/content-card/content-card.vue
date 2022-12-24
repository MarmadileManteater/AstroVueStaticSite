
<script setup>
import TagList from '../tag-list/tag-list.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: false,
    default: null
  },
  tags: {
    type: Array,
    required: false,
    default: () => []
  },
  tagData: {
    type: Array,
    required: false,
    default: () => []
  },
  titleLink: {
    type: String,
    required: false,
    default: ''
  },
  summary: {
    type: String,
    required: false,
    default: ''
  },
  index: {
    type: Number,
    required: false,
    default: 0
  }
})
</script>

<template>
  <div
    :class="['outer-grid', 'project-card', 'md:pt-0', thumbnail !== null?'pt-4':'pt-0' , index % 2 === 0?'dark:bg-zinc-800':'dark:bg-zinc-900', index % 2 === 0?'bg-zinc-100':'bg-white', 'dark:text-white']"
  >
    <div
      v-if="thumbnail !== null"
      class="p-4 pr-0 image-grid"
    >
      <a 
        :href="titleLink"
      >
        <img 
          :src="thumbnail"
          :alt="title"
        >
      </a>
    </div>
    <div class="p-4 pl-4">
      <TagList
        :tags="tags"
        :tag-data="tagData"
      />
      <a
        :href="titleLink"
        class="hover:underline"
      >
        <h2 :class="['font-bold', 'text-2xl', 'mb-4', title.search(' ') === -1?'break-all':'break-words']">{{ title }}</h2>
      </a>
      <p class="mb-3">
        {{ summary }}
      </p>
      <slot />
    </div>
  </div>
</template>
