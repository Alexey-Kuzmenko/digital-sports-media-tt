<template>
    <div class="tournament-info">
        <div class="tournament-info__col">
            <div class="tournament-info__title">
                Кваліфікація
            </div>
            <div class="tournament-info__item">
                <span class="tournament-info__icon tournament-info__icon_blue"></span>
                Чемпіони Ліга чемпіонів УЄФА
            </div>
            <div class="tournament-info__item">
                <span class="tournament-info__icon tournament-info__icon_light-blue"></span>
                Ліга чемпіонів УЄФА
            </div>
            <div class="tournament-info__item">
                <span class="tournament-info__icon tournament-info__icon_orange"></span>
                Ліга Європи УЄФА
            </div>
            <div class="tournament-info__item">
                <span class="tournament-info__icon tournament-info__icon_red"></span>
                Пониження
            </div>
        </div>
        <div class="tournament-info__col">
            <div class="tournament-info__title">
                Скорочення
            </div>
            <div class="tournament-info__item">
                <span class="tournament-info__letter">В</span>
                Виграш
            </div>
            <div class="tournament-info__item">
                <span class="tournament-info__letter">Н</span>
                Нічия
            </div>
            <div class="tournament-info__item">
                <span class="tournament-info__letter">П</span>
                Поразка
            </div>
            <div class="tournament-info__item">
                <span class="tournament-info__letter">З-П</span>
                Забиті - пропущені
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../scss/utilities/variables' as vars;

.tournament-info {
    display: flex;
    flex-wrap: wrap;

    margin: 26px 0 42px;
    padding-left: 12px;

    font-size: 0.75rem;
    gap: 12px 40px;

    &__item {
        display: flex;
        align-items: center;

        margin-bottom: 4px;

        font-weight: 400;
    }

    &__title {
        margin-bottom: 4px;

        color: vars.$black;

        font-weight: 500;
    }

    &__icon {
        width: 7px;
        min-width: 7px;
        height: 7px;
        margin: 0 15px 2px 0;

        border-radius: 50%;

        &_blue {
            background-color: vars.$green;
        }

        &_light-blue {
            background-color: vars.$blue;
        }

        &_orange {
            background-color: vars.$light-blue;
        }

        &_red {
            background-color: vars.$red
        }
    }

    &__letter {
        margin-right: 8px;

        color: rgb(0 0 0 / 64%)
    }
}
</style>