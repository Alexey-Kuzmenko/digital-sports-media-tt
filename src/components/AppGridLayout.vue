<template>
    <div class="grid-layout">
        <slot />
    </div>
</template>

<style lang="scss">
@use '../scss/utilities/variables' as vars;

.grid-layout {
    @media (width >=vars.$lg) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        grid-template-areas:
            "tournament tournament aside"
        ;
    }

}
</style>