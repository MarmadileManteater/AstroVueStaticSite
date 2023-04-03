<script lang='ts' setup>
import EmojiImage from '../emoji-image/emoji-image.vue'
</script>

<template>
  <div class='flex bg-black p-5 block lg:mt-5 w-full 2xl:justify-between 2xl:flex-row flex-col text-white '>
    <div >
      <p><a href='https://mutant.tech/' target='_blank' class='hover:underline dark:text-red-300 text-blue-300' rel='noreferrer' >Mutant Standard</a> emoji by <a href='https://dzuk.zone/' class='hover:underline dark:text-red-300 text-blue-300' target='_blank' rel='noreferrer'>Dzuk</a>, are licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' class='hover:underline dark:text-red-300 text-blue-300' rel='noreferrer'>CC BY-NC-SA 4.0 International</a>.</p>
      <p><em class='text-zinc-400'>Mutant Standard does not fully cover all of the emoji in the Unicode 14.0 spec, so Twemoji is used as a fallback for emoji not present in Mutant Standard.</em></p>
      <p><a href='https://twemoji.twitter.com/' target='_blank' rel='noreferrer' class='hover:underline dark:text-red-300 text-blue-300'>Twemoji</a> emoji by <a href='https://github.com/twitter' target='_blank' rel='noreferrer' class='hover:underline dark:text-red-300 text-blue-300'>Twitter, Inc and other contributors</a> are licensed under <a href='https://creativecommons.org/licenses/by/4.0/' target='_blank' rel='noreferrer' class='hover:underline dark:text-red-300 text-blue-300'>CC BY 4.0 International</a>.</p>
      <p><a href='https://godotengine.org/' target='_blank' rel='noreferrer' class='hover:underline dark:text-red-300 text-blue-300'>Godot</a> is licensed <a href='https://godotengine.org/license/' target='_blank' rel='noreferrer' class='hover:underline dark:text-red-300 text-blue-300'>under the MIT license</a>.</p>
    </div>
    <div class='flex flex-col justify-end 2xl:ml-5 2xl:mt-0 mt-5 ml-0'>
      <div >
        Made with <EmojiImage emoji='♥' /> and 
        <span >
          <a href='https://astro.build/' target='_blank' rel='noreferrer' class='hover:underline dark:text-red-300 text-blue-300'><EmojiImage emoji='👩‍🚀' />Astro</a> 
          + 
          <a href='https://vuejs.org/' target='_blank' rel='noreferrer' class='hover:underline dark:text-red-300 text-blue-300'>Vue.js</a>
        </span>
      </div>
      <div class='xl:mt-0 mt-3'>
        <a href='https://github.com/MarmadileManteater/AstroVueStaticSite' target='_blank' rel='noreferrer' class='hover:underline dark:text-red-300 text-blue-300'>View source &raquo;</a>
      </div>
    </div>
  </div>
</template>
