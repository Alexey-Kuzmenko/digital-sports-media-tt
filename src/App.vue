<script setup lang="ts">
</script>

<template>
  <AppHeader />
  <main class="main">
    <Container>
      <Breadcrumbs />
    </Container>
  </main>
</template>

<script lang="ts">
import AppContainer from './components/AppContainer.vue';
import AppBreadcrumbs from './components/AppBreadcrumbs.vue';

export default {
  components: {
    'Breadcrumbs': AppBreadcrumbs,
    'Container': AppContainer
  }
}
</script>

<style lang="scss">
@use './scss/utilities/variables' as vars;

.app {
  background-color: vars.$white;
}
</style>
