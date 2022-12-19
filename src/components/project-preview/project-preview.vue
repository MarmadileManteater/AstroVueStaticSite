<script setup>
  import ContentCard from '../content-card/content-card.vue';
  import ProjectButton from '../project-button/project-button.vue';
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
    <div class='project-list'>
      <ContentCard
      v-for="(project, index) in projects"
      :title="project.title"
      :titleLink="project.buttons.at(-1).link"
      :summary="project.summary"
      :thumbnail="project.thumbnail"
      :tags="project.tags"
      :tagData="tagData"
      :index="index + 1"
      >
      <p class="mb-3">{{project.summary}}</p>
      <ProjectButton
        v-for="(button, index) in project.buttons"
        :link="button.link"
        :target="button.target"
        :index="index + 1"
      >{{button.prefix}} <strong>{{button.locationName}}</strong></ProjectButton>
      </ContentCard>
    </div>
    <a href='./projects' class='p-5 inline-block hover:underline'>View more &raquo;</a>
  </div>
</template>
