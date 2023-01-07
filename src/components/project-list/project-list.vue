<script lang="ts" setup>
import UnifiedContentList from '../unified-content-list/unified-content-list.vue'
import type { IProject } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

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
  },
  data() {
    return {
      workingArray: this.projects.map(p => p),
      exposedArray: this.projects.map(p => p),
      sortType: 'featured'
    }
  },
  watch: {
    sortType() {
      switch (this.sortType) {
      case 'featured':
        this.workingArray = this.projects.map(p => p)
        break
      case 'lastUpdate':
        this.workingArray = (this.projects as IProject[]).map(p => p).sort((a, b) => { return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime() })
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
      @click="sortByFeatured"
    >Sort by featured</a>
    <a 
      :class="[sortType === 'lastUpdate'?'decoration-solid underline cursor-default':'cursor-pointer', 'select-none', 'p-4', 'inline-block']"
      @click="sortByLatest"
    >Sort by last updated</a>
    <UnifiedContentList
      :content="exposedArray"
      :tag-data="tagData"
      :start-index="0"
    />
  </div>
</template>
