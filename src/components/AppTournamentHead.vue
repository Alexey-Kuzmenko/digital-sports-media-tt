<template>
    <div class="tournament-head">
        <div class="tournament-head__content">
            <img src="../assets/images/upl_logo.png" alt="Українська Прем'єр-Ліга"
                class="tournament-head__content-logo">
            <div class="tournament-head__content-info">
                <h1 class="tournament-head__content-title">Українська Прем'єр-Ліга</h1>
                <h2 class="tournament-head__content-subtitle">Сезон 2019/2020 32-й тур</h2>
            </div>
        </div>
        <div class="tournament-head__links">
            <a href="" class="tournament-head__link">Головна</a>
            <a href="" class="tournament-head__link tournament-head__link_active">Таблиця</a>
            <a href="" class="tournament-head__link">Календар</a>
            <a href="" class="tournament-head__link">Бомбардири</a>
        </div>
    </div>
</template>

<style lang="scss">
@use '../scss/utilities/variables' as vars;

.tournament-head {
    padding: 16px 16px 0;

    border: 1px solid vars.$light-grey;
    border-radius: 2px;

    &__content {
        position: relative;

        display: flex;

        padding-bottom: 24px;
        column-gap: 12px;

        &::before {
            position: absolute;
            bottom: 0;
            left: -16px;

            display: block;

            width: calc(100% + 32px);
            height: 1px;

            content: "";

            background: #eee
        }
    }

    &__content-logo {
        max-width: 48px;
        height: 48px;
    }

    &__content-title {
        margin-bottom: 8px;

        color: vars.$black;

        font-size: 1.125rem;
        font-weight: 500;
    }

    &__content-subtitle,
    &__link {
        font-size: 0.75rem;
        font-weight: 400;
    }

    &__content-subtitle {
        color: rgba($color: #000, $alpha: 38%);
    }

    &__links {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 11px;
        column-gap: 21px;
    }

    &__link {
        padding-bottom: 9px;

        color: rgba($color: #000, $alpha: 54%);

        &_active {
            color: vars.$black;
            border-bottom: 2px solid vars.$yellow;
        }
    }

    @media (width >=vars.$md) {
        & {
            &__content-logo {
                max-width: 80%;
                height: 80px;
            }
        }
    }


    @media (width >=vars.$xl) {
        & {
            margin-top: 24px;

            &__content {
                padding-bottom: 0;

                &::before {
                    background: vars.$white;
                }
            }
        }
    }
}
</style>