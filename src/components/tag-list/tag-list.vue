
<script lang="ts" setup>
import TagItem from '../tag/tag-item.vue'
import type { ITag } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
const props = defineProps({
  tags: {
    type: Array,
    required: true
  },
  tagData: {
    type: Object,
    required: true,
  } 
})

const getTagData = (givenName: string) : ITag => {
  return props.tagData.find(({name} : ITag) => { return name === givenName })
}

// Get an array of tag data from an array of tag names
const getTagArray = (tagArray: string[]) : ITag[] => {
  const dataArray = []
  for (let i = 0; i < tagArray.length; i++) {
    dataArray.push(getTagData(tagArray[i]))
  }
  return dataArray
}
</script>

<template>
  <span
    v-for="tag in getTagArray(tags as string[])"
    :key="tag.name"
  >
    <TagItem
      v-if="tag !== undefined"
      :link="tag.link"
      :name="tag.name"
    />
  </span>
</template>
