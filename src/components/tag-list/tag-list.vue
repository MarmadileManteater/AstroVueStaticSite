
<script setup>
import TagItem from '../tag/tag-item.vue'
const props = defineProps({
  tags: {
    type: Array,
    required: true
  },
  tagData: {
    type: Array,
    required: true
  } 
})

const getTagData = (givenName) => {
  return props.tagData.find(({name}) => { return name === givenName })
}

// Get an array of tag data from an array of tag names
const getTagArray = (tagArray) => {
  const dataArray = []
  for (let i = 0; i < tagArray.length; i++) {
    dataArray.push(getTagData(tagArray[i]))
  }
  return dataArray
}
</script>

<template>
  <span
    v-for="tag in getTagArray(tags)"
    :key="tag.name"
  >
    <TagItem
      v-if="tag !== undefined"
      :link="tag.link"
      :name="tag.name"
    />
  </span>
</template>
