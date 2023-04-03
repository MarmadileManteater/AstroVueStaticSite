<template>
  <header>
    <a href="/">
      <h2 class='z-1 relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl p-8 text-center pb-10'>
          <span><span class='colour1 text-outline text-red-400 drop-shadow-lg'>Marma</span><span class='colour2 text-outline text-green-400 drop-shadow-lg'>dile</span></span>
          <span><span class='colour2 text-outline text-green-400 drop-shadow-lg'>M</span><span class='colour3 text-outline text-blue-400'>anteater</span></span>
      </h2>
    </a>
  </header>
</template>

<style scoped>
  :root {
    --outline-color: #000;
  }

  header h2 {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 420px) {
    header h2 {
      flex-direction: column;
    }
  }

  .red {
    --outline-color: #00247d;
  }

  .green {
    --outline-color: #0a3083;
  }


  .text-outline {
    /*
        style adapted from this answer by Elvin Mammadov
        https://stackoverflow.com/a/47884204
    */
    text-shadow: 4px 0 0 var(--outline-color),
                -4px 0 0 var(--outline-color),
                0 4px 0 var(--outline-color),
                0 -4px 0 var(--outline-color),
                2px 2px var(--outline-color),
                -2px -2px 0 var(--outline-color),
                2px -2px 0 var(--outline-color),
                -2px 2px 0 var(--outline-color);
  }

  header {
    max-width: 100%;
  }
</style>
