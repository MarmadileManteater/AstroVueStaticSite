<script setup>
  import ProjectCard from '../project-card/project-card.vue';
  import ProjectButton from '../project-button/project-button.vue';
</script>

<script >
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
          return {
            projectsSorted: this.projects,
            sortType: 'featured'
          }
        },
        props: {
            projects: {
              type: Array,
              required: true
            },
            tagData: {
              type: Array,
              required: true
            }
        },
        watch: {
          sortType() {
            switch (this.sortType) {
              case 'featured':
                this.projectsSorted = this.projects.map(p => p)
                break
              case 'lastUpdate':
                this.projectsSorted = this.projects.map(p => p).sort((a, b) => { return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime() })
                break
            }
          }
        },
        methods: {
          sortByFeatured() {
            this.sortType = 'featured'
          },
          sortByLatest() {
            this.sortType = 'lastUpdate'
          }
        }
    })
</script>

<template>
  <div class="project-list">
    <a 
      :class="[sortType === 'featured'?'decoration-solid underline cursor-default':'cursor-pointer', 'select-none', 'p-4', 'inline-block']"
      v-on:click="sortByFeatured"
    >Sort by featured</a>
    <a 
      :class="[sortType === 'lastUpdate'?'decoration-solid underline cursor-default':'cursor-pointer', 'select-none', 'p-4', 'inline-block']"
      v-on:click="sortByLatest"
    >Sort by last updated</a>
    <ProjectCard
      v-for="(project, index) in projectsSorted"
      :title="project.title"
      :titleLink="project.buttons.at(-1).link"
      :summary="project.summary"
      :thumbnail="project.thumbnail"
      :tags="project.tags"
      :tagData="tagData"
      :index="index"
    >
      <p class="mb-3">{{project.summary}}</p>
      <ProjectButton
        v-for="(button, index) in project.buttons"
        :link="button.link"
        :target="button.target"
        :index="index"
      >{{button.prefix}} <strong>{{button.locationName}}</strong></ProjectButton>
    </ProjectCard>
  </div>
</template>
