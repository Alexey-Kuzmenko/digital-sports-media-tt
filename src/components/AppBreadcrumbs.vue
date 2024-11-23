<template>
    <div class="breadcrumbs">
        <ul class="breadcrumbs__list">
            <li class="breadcrumbs__list-item">
                <a href="#" class="breadcrumbs__list-link breadcrumbs__list-link_current">Головна</a>
                <i class="fa-solid fa-chevron-right" style=" color: #9E9E9E; font-size: 10px;" />
            </li>
            <li class="breadcrumbs__list-item">
                <a href="#" class="breadcrumbs__list-link">Футбол</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
@use '../scss/utilities/variables' as vars;

.breadcrumbs {
    padding: 16px 0;

    &__list {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 0;
        column-gap: 12px;
    }

    &__list-link {
        color: rgba($color: #000, $alpha: 38%);

        font-size: 0.75rem;
        font-weight: 400;
        line-height: 0.75rem;

        &_current {
            margin-right: 12px;

            color: vars.$black;
        }
    }

    @media (width >=vars.$lg) {
        & {
            border-bottom: 1px solid vars.$light-grey;
        }
    }
}
</style>