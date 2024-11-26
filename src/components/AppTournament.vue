<template>
    <div class="tournament">
        <div class="tournament__table-wrapper">
            <div class="tournament__table-head">
                <h2 class="tournament__table-head-title">
                    Турнірна таблиця
                </h2>
                <div class="tournament__table-head-filters">
                    <AppButton title="Загальна" :active="true" />
                    <AppButton title="Вдома" :active="false" />
                    <AppButton title="В гостях" :active="false" />
                </div>
            </div>
            <AppTournamentTable />
            <AppTournamentTable />
            <AppTournamentTable />
        </div>
    </div>
</template>

<script lang="ts">
import AppButton from './AppButton.vue';
import AppTournamentTable from './AppTournamentTable.vue';

export default {
    components: {
        AppButton,
        AppTournamentTable
    }
}
</script>

<style lang="scss">
@use '../scss/utilities/variables' as vars;
@use '../scss/utilities/placeholders';

.tournament {
    margin-top: 32px;

    &__table-head {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;

        &-title {
            @extend %h2-title
        }

        &-filters {
            display: flex;
            column-gap: 6px;
        }
    }
}
</style>