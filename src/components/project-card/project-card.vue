
<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false,
      defaultValue: []
    },
    tagData: {
      type: Array,
      required: false,
      defaultValue: []
    },
    titleLink: {
      type: String,
      required: false,
      defaultValue: ''
    },
    summary: {
      type: String,
      required: false,
      defaultValue: ''
    },
    index: {
      type: Number,
      required: false,
      defaultValue: 0
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
  <div
    :class="['outer-grid', 'project-card', 'md:pt-0', 'pt-4', index % 2 === 0?'dark:bg-zinc-800':'dark:bg-zinc-900', index % 2 === 0?'bg-zinc-100':'bg-white', 'dark:text-white']"
  >
    <div class='p-4 pr-0 image-grid'>
      <a :href="titleLink"><img :src="thumbnail" :alt="title" /></a>
    </div>
    <div class="p-4 pl-4">
      <a 
        v-for="tag in getTagArray(tags)"
        :href="tag.link"
        target="_blank"
        >
        <span :class="[tag.name, 'align-top', 'hover:underline', 'p-2', 'rounded-xl', 'mr-3', 'mb-2', 'mt-2', 'inline-block', 'bg-zinc-200', 'dark:bg-zinc-700', 'dark:text-white']">
          {{tag.name}}
        </span>
      </a>
      <a
        :href="titleLink"
        class="hover:underline"
        >
        <h2 :class="['font-bold', 'text-2xl', 'mb-4', title.search(' ') === -1?'break-all':'break-words']">{{title}}</h2>
      </a>
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .outer-grid {
      display: flex;
  }

  .image-grid {
      min-width: 200px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
  }

  .image-grid img {
      max-height: 153px;
      display: inline-block;
  }

  .csharp {
      background-image: url('../../images/csharp-logo.png');
      background-color: transparent;
      background-size: 40px;
      background-repeat: no-repeat;
      width: 40px;
      height: 40px;
      color: transparent;
      user-select: none;
      overflow: hidden;
  }

  .javascript {
      background-image: url('../../images/js-logo.png');
      background-color: transparent;
      background-size: 40px;
      background-repeat: no-repeat;
      width: 40px;
      height: 40px;
      color: transparent;
      user-select: none;
      overflow: hidden;
      border-radius: 0;
  }

  .python {
      background-image: url('../../images/python-logo.png');
      background-color: transparent;
      background-size: 40px;
      background-repeat: no-repeat;
      width: 40px;
      height: 40px;
      color: transparent;
      user-select: none;
      overflow: hidden;
      border-radius: 0;
  }

  @media (max-width: 768px) {
      .outer-grid {
          display: block;
      }
  }

</style>
