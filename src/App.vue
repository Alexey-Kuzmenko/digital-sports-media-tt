<script setup lang="ts">
</script>

<template>
  <AppHeader />
  <main class="main">
    <AppContainer>
      <AppBreadcrumbs />
      <AppGridLayout>
        <div class="tournament-wrapper">
          <AppTournamentHead />
          <AppTournament />
          <AppTournamentInfo />
        </div>
        <AppAside />
      </AppGridLayout>
    </AppContainer>
  </main>
</template>

<script lang="ts">
import AppContainer from './components/AppContainer.vue';
import AppBreadcrumbs from './components/AppBreadcrumbs.vue';
import AppTournamentHead from './components/AppTournamentHead.vue';
import AppAside from './components/AppAside.vue';
import AppTournament from './components/AppTournament.vue';
import AppGridLayout from './components/AppGridLayout.vue';
import AppTournamentInfo from './components/AppTournamentInfo.vue';


export default {
  components: {
    AppContainer,
    AppGridLayout,
    AppBreadcrumbs,
    AppTournamentHead,
    AppTournament,
    AppTournamentInfo,
    AppAside
  }
}
</script>

<style lang="scss">
@use './scss/utilities/variables' as vars;

.app {
  background-color: vars.$white;
}

.tournament-wrapper {
  grid-area: tournament;
}
</style>
