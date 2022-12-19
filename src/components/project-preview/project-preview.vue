<script setup>
  import ContentCard from '../content-card/content-card.vue';
  import ProjectButton from '../project-button/project-button.vue';
  import UnifiedContentList from '../unified-content-list/unified-content-list.vue'
  import { defineComponent } from 'vue';
</script>

<script >
    export default defineComponent({
        props: {
            projects: {
              type: Array,
              required: true
            },
            tagData: {
              type: Array,
              required: true
            }
        }
    })
</script>

<template>
  <div class='project-list rounded-t-xl' style='overflow:hidden;'>
    <UnifiedContentList
      :content="projects"
      :tagData="tagData"
    />
    <a href='./projects' class='p-5 inline-block hover:underline'>View more &raquo;</a>
  </div>
</template>
