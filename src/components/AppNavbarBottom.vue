<template>
    <div class="navbar-bottom">
        <ul class="navbar-bottom__list">
            <li class="navbar-bottom__list-item navbar-bottom__list-item_title">
                <a href="#" class="navbar-bottom__link">Футбол</a>
                <img src="../assets/icons/ball_icon.svg" alt="Ball icon" class="navbar-bottom__icon">
            </li>
            <li class="navbar-bottom__list-item"><a href="#" class="navbar-bottom__link">Залік медалей</a></li>
            <li class="navbar-bottom__list-item"><a href="#" class="navbar-bottom__link">Рейтинг</a></li>
        </ul>
    </div>
</template>

<style lang="scss">
@use '../scss/utilities/variables' as vars;

.navbar-bottom {
    display: none;

    border-bottom: 1px solid vars.$light-grey;
    background-color: vars.$white;

    &__list {
        display: flex;

        width: 100%;
        max-width: calc(vars.$xxl + 40px);
        margin: 0 auto !important;
        padding: 0 6px;
    }

    &__list-item {
        padding: 14px 16px;

        &_title {
            position: relative;

            display: flex;
            align-items: center;
            flex-direction: row-reverse;

            margin-right: 10px;

            &::after {
                position: absolute;
                top: calc(50% - 6px);
                right: 0;

                display: block;

                width: 1px;
                height: 12px;

                content: '';

                background: rgb(95 120 137 / 16%);
            }

            & > a {
                text-transform: uppercase;

                color: vars.$black;
            }
        }
    }

    &__icon {
        margin-right: 8px;
    }

    &__link {
        color: rgba($color: #000, $alpha: 70%);

        font-size: 0.875rem;
        font-weight: 400;
    }


    @media (width >=vars.$lg) {
        display: block;

        &__list-item {
            &:hover {
                background-color: vars.$light-grey;
            }

            &_title {
                &:hover {
                    background-color: vars.$white;
                }
            }
        }
    }
}
</style>