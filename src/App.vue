<script setup lang="ts">
</script>

<template>
  <AppHeader />
  <main class="main">
    <Container>
      <Breadcrumbs />
      <TournamentHead />
      <Aside>
        1
      </Aside>
    </Container>
  </main>
</template>

<script lang="ts">
import AppContainer from './components/AppContainer.vue';
import AppBreadcrumbs from './components/AppBreadcrumbs.vue';
import AppTournamentHead from './components/AppTournamentHead.vue';
import AppAside from './components/AppAside.vue';


export default {
  components: {
    'Breadcrumbs': AppBreadcrumbs,
    'Container': AppContainer,
    'TournamentHead': AppTournamentHead,
    'Aside': AppAside
  }
}
</script>

<style lang="scss">
@use './scss/utilities/variables' as vars;

.app {
  background-color: vars.$white;
}
</style>
