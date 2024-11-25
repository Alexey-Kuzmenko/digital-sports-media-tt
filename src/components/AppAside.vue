<template>
    <aside class="aside">
        <AppMainNews />
        <AppTrends />
        <AppVideo />
    </aside>
</template>

<script lang="ts">
import AppMainNews from './AppMainNews.vue';
import AppTrends from './AppTrends.vue';
import AppVideo from './AppVideo.vue';

export default {
    components: {
        AppMainNews,
        AppTrends,
        AppVideo
    }
}
</script>

<style lang="scss"></style>