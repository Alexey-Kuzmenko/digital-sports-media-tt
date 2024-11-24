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
    border-bottom: 1px solid vars.$light-grey;
    display: none;
    background-color: vars.$white;

    &__list {
        margin: 0 auto !important;
        display: flex;
        width: 100%;
        max-width: calc(vars.$xxl + 40px);
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
                content: '';
                display: block;
                width: 1px;
                height: 12px;
                position: absolute;
                right: 0;
                top: calc(50% - 6px);
                background: rgba(95, 120, 137, .16);
            }

            & > a {
                color: vars.$black;
                text-transform: uppercase;
            }
        }
    }

    &__icon {
        margin-right: 8px;
    }

    &__link {
        font-weight: 400;
        font-size: 0.875rem;
        color: rgba($color: #000000, $alpha: 0.7);
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