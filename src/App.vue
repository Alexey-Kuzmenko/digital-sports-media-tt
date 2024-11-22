<script setup lang="ts">
</script>

<template>
  <TheHeader/>
  <main class="main">
    <div class="container">

    </div>
  </main>
</template>

<style lang="scss">
  @use './scss/utilities/variables' as vars;
  .app {
    background-color: vars.$white;
  }
  
  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
</style>
