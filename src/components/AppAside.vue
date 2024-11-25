<template>
    <aside class="aside">
        <MainNews />
        <Trends />
    </aside>
</template>

<script lang="ts">
import AppMainNews from './AppMainNews.vue';
import AppTrends from './AppTrends.vue';

export default {
    components: {
        'MainNews': AppMainNews,
        'Trends': AppTrends
    }
}
</script>

<style lang="scss"></style>