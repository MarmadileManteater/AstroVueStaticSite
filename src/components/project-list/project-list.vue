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
    },
    clientSideSorting: {
      type: Boolean,
      required: false,
      default: false
    },
    givenSortType: {
      type: String,
      required: false,
      default: 'featured'
    }
  },
  data() {
    return {
      sortType: this.givenSortType
    }
  },
  computed: {
    projectsList() {
      switch (this.sortType) {
      default:
      case 'featured':
        return this.projects.map(p => p)
      case 'lastUpdate':
        return (this.projects as IProject[]).map(p => p).sort((a, b) => { return new Date(b.lastUpdate).getTime() - new Date(a.lastUpdate).getTime() })
      }
    }
  },
  watch: {
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
    <span v-if="clientSideSorting">
      <a 
        :class="[sortType === 'featured'?'decoration-solid underline cursor-default':'cursor-pointer', 'select-none', 'p-4', 'inline-block']"
        @click="sortByFeatured"
      >Sort by featured</a>
      <a 
        :class="[sortType === 'lastUpdate'?'decoration-solid underline cursor-default':'cursor-pointer', 'select-none', 'p-4', 'inline-block']"
        @click="sortByLatest"
      >Sort by last updated</a>
    </span>
    <slot/>
    <UnifiedContentList
      :content="projectsList"
      :tag-data="tagData"
      :start-index="0"
    />
  </div>
</template>
