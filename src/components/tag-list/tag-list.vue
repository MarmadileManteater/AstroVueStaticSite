
<script setup>
  import Tag from '../tag/tag.vue'
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
  <Tag 
    v-for="tag in getTagArray(tags)" 
    :link="tag.link"
    :name="tag.name"
  />
</template>
