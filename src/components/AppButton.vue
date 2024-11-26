<template>
    <button class="button" :class="{ 'button_inactive': props.active === false }">
        {{ props.title }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    active: boolean
}>()
</script>

<style lang="scss">
@use '../scss/utilities/variables' as vars;

.button {
    padding: 4px 12px;

    cursor: pointer;

    color: vars.$black;
    border: none;
    border-radius: 6px;
    background-color: vars.$yellow;

    font-size: 14px;
    font-weight: 500;
    line-height: 24px;

    &_inactive {
        color: rgba($color: #000, $alpha: 54%);
        background-color: vars.$light-grey;
    }
}
</style>