<script setup lang="ts">
</script>

<template>
  <AppHeader />
  <main class="main">
    <AppContainer>
      <AppBreadcrumbs />
      <AppTournamentHead />
      <AppTournament />
      <AppAside />
    </AppContainer>
  </main>
</template>

<script lang="ts">
import AppContainer from './components/AppContainer.vue';
import AppBreadcrumbs from './components/AppBreadcrumbs.vue';
import AppTournamentHead from './components/AppTournamentHead.vue';
import AppAside from './components/AppAside.vue';
import AppTournament from './components/AppTournament.vue';


export default {
  components: {
    AppContainer,
    AppBreadcrumbs,
    AppTournamentHead,
    AppTournament,
    AppAside
  }
}
</script>

<style lang="scss">
@use './scss/utilities/variables' as vars;

.app {
  background-color: vars.$white;
}
</style>
