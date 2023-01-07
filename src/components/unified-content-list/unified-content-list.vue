<script lang="ts" setup>
import ContentCard from '../content-card/content-card.vue'
import ProjectButton from '../project-button/project-button.vue'
import type { IProject } from '@marmadilemanteater/gh-static-site-lib/src/models/project'
import type { IBlogPost } from '@marmadilemanteater/gh-static-site-lib/src/models/blog'

defineProps({
  content: {
    type: Array,
    required: true
  },
  tagData: {
    type: Array,
    required: true
  },
  startIndex: {
    type: Number,
    required: false,
    default: 1
  }
})
</script>

<template>
  <div
    v-for="(contentItem, index) in content  as Array<IProject|IBlogPost>"
    :key="index"
  >
    <ContentCard
      v-if="contentItem.type === 'IProject'"
      :title="contentItem.title"
      :title-link="contentItem.buttons.at(-1)?.link"
      :summary="contentItem.summary"
      :thumbnail="contentItem.thumbnail"
      :tags="contentItem.tags"
      :tag-data="tagData"
      :index="index + startIndex"
    >
      <ProjectButton
        v-for="(button, button_index) in contentItem.buttons"
        :key="button_index"
        :link="button.link"
        :target="button.target"
        :index="button_index"
      >
        {{ button.prefix }} <strong>{{ button.locationName }}</strong>
      </ProjectButton>
    </ContentCard>
    <ContentCard
      v-if="contentItem.type === 'IBlogPost'"
      :title="contentItem.title"
      :title-link="`/blog/${contentItem.id}`"
      :summary="contentItem.shortDescription"
      :tags="contentItem.tags"
      :tag-data="tagData"
      :index="index + startIndex"
    >
      <p class="pb-2 text-zinc-500 dark:text-zinc-400">
        <em>Last updated {{ new Date(contentItem.gittime).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'GMT' }) }} GMT</em>
      </p>
    </ContentCard>
  </div>
</template>
