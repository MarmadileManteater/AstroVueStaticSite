<script setup>
  import ContentCard from '../content-card/content-card.vue';
  import ProjectButton from '../project-button/project-button.vue';
  import UnifiedContentList from '../unified-content-list/unified-content-list.vue';
</script>

<script >
    import { defineComponent } from 'vue';

    export default defineComponent({
        data() {
          return {
            workingArray: this.projects.map(p => p),
            exposedArray: this.projects.map(p => p),
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
                this.workingArray = this.projects.map(p => p)
                break
              case 'lastUpdate':
                this.workingArray = this.projects.map(p => p).sort((a, b) => { return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime() })
                break
            }
          },
          workingArray() {
            for (let i = 0; i < this.workingArray.length; i++) {
              this.exposedArray[i] = this.workingArray[i]
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
    <UnifiedContentList
      :content="exposedArray"
      :tagData="tagData"
      :startIndex="0"
    />
  </div>
</template>
