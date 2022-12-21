
<script setup>
  import ContentCard from '../content-card/content-card.vue';
  import ProjectButton from '../project-button/project-button.vue';
  const props = defineProps({
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
    v-for="(contentItem, index) in content"
  >
    <ContentCard
      v-if="contentItem.type === 'IProject'"
      :title="contentItem.title"
      :titleLink="contentItem.buttons.at(-1).link"
      :summary="contentItem.summary"
      :thumbnail="contentItem.thumbnail"
      :tags="contentItem.tags"
      :tagData="tagData"
      :index="index + startIndex"
    >
      <ProjectButton
        v-for="(button, index) in contentItem.buttons"
        :link="button.link"
        :target="button.target"
        :index="index"
      >
        {{button.prefix}} <strong>{{button.locationName}}</strong>
      </ProjectButton>
    </ContentCard>
    <ContentCard
      v-if="contentItem.type === 'IBlogPost'"
      :title="contentItem.title"
      :titleLink="`/blog/${contentItem.id}`"
      :summary="contentItem.shortDescription"
      :tags="contentItem.tags"
      :tagData="tagData"
      :index="index + startIndex"
    >
      <p class='pb-2 text-zinc-500 dark:text-zinc-400'><em>Last updated {{new Date(contentItem.gittime).toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'GMT' })}} GMT</em></p>
    </ContentCard>
  </div>
</template>
