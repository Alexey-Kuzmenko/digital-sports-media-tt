<template>
    <table class="table">
        <thead>
            <tr class="table__head">
                <th class="table__head-group">ГРУПА А</th>
                <th class="table__head-games">І</th>
                <th class="table__head-wins">В</th>
                <th class="table__head-draw">Н</th>
                <th class="table__head-loses">П</th>
                <th class="table__head-lose-goals">З-П</th>
                <th class="table__head-form">Форма</th>
                <th class="table__head-points">Очки</th>
            </tr>
        </thead>
        <tbody class="table__body">
            <tr class="table__body-row">
                <td class="table__body-place table__body-place_promo-green">
                    1
                    <span class="tooltip">
                        Ліга Чемпіонів
                    </span>
                </td>
                <td class="table__body-club-logo">
                    <a href="#">
                        <img src="../assets/images/man_city_logo.png" alt="Manchester City logo">
                    </a>
                </td>
                <td class="table__body-club-name">Манчестер Сіті</td>
                <td class="table__body-games">6</td>
                <td class="table__body-wins">4</td>
                <td class="table__body-draw">1</td>
                <td class="table__body-loses">1</td>
                <td class="table__body-lose-goals">16 - 4</td>
                <td class="table__body-form">
                    <div class="table__body-form-wrapper">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/draw_icon.svg" alt="Draw">
                        <img src="../assets/icons/lose_icon.svg" alt="Lose">
                    </div>
                </td>
                <td class="table__body-points">13</td>
            </tr>

            <tr class="table__body-row">
                <td class="table__body-place table__body-place_promo-green">2</td>
                <td class="table__body-club-logo">
                    <a href="#">
                        <img src="../assets/images/man_city_logo.png" alt="Manchester City logo">
                    </a>
                </td>
                <td class="table__body-club-name">Манчестер Сіті</td>
                <td class="table__body-games">6</td>
                <td class="table__body-wins">2</td>
                <td class="table__body-draw">3</td>
                <td class="table__body-loses">1</td>
                <td class="table__body-lose-goals">8 - 10</td>
                <td class="table__body-form">
                    <div class="table__body-form-wrapper">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/lose_icon.svg" alt="Lose">
                        <img src="../assets/icons/lose_icon.svg" alt="Lose">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                    </div>
                </td>
                <td class="table__body-points">9</td>
            </tr>

            <tr class="table__body-row">
                <td class="table__body-place table__body-place_promo-blue">3</td>
                <td class="table__body-club-logo">
                    <a href="#">
                        <img src="../assets/images/man_city_logo.png" alt="Manchester City logo">
                    </a>
                </td>
                <td class="table__body-club-name">Манчестер Сіті</td>
                <td class="table__body-games">6</td>
                <td class="table__body-wins">2</td>
                <td class="table__body-draw">2</td>
                <td class="table__body-loses">2</td>
                <td class="table__body-lose-goals">6 - 11</td>
                <td class="table__body-form">
                    <div class="table__body-form-wrapper">
                        <img src="../assets/icons/lose_icon.svg" alt="Lose">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                    </div>
                </td>
                <td class="table__body-points">8</td>
            </tr>

            <tr class="table__body-row">
                <td class="table__body-place">4</td>
                <td class="table__body-club-logo">
                    <a href="#">
                        <img src="../assets/images/man_city_logo.png" alt="Manchester City logo">
                    </a>
                </td>

                <td class="table__body-club-name">Манчестер Сіті</td>
                <td class="table__body-games">6</td>
                <td class="table__body-wins">4</td>
                <td class="table__body-draw">1</td>
                <td class="table__body-loses">1</td>
                <td class="table__body-lose-goals">16 - 4</td>
                <td class="table__body-form">
                    <div class="table__body-form-wrapper">
                        <img src="../assets/icons/lose_icon.svg" alt="Lose">
                        <img src="../assets/icons/draw_icon.svg" alt="Draw">
                        <img src="../assets/icons/draw_icon.svg" alt="Draw">
                        <img src="../assets/icons/win_icon.svg" alt="Win">
                        <img src="../assets/icons/draw_icon.svg" alt="Draw">
                    </div>
                </td>
                <td class="table__body-points">2</td>
            </tr>

        </tbody>
    </table>
</template>

<style lang="scss">
@use '../scss/utilities/variables' as vars;

.table {
    display: block;
    overflow-x: scroll;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);

    width: 100%;
    margin: 16px auto 0;

    font-size: 0.75rem;

    & > thead {
        display: block;
    }

    &__head {
        display: flex;

        width: 100%;
        padding: 4px 12px;

        color: vars.$white;
        border-radius: 6px 6px 0 0;
        background-color: vars.$grey;

        &-group {
            flex-grow: 4;

            text-align: left;
        }

        &-games {
            flex-grow: 2;
        }

        &-lose-goals {
            flex-grow: 2;
        }

        &-form {
            display: none;
        }

        &-wins,
        &-loses,
        &-draw,
        &-points {
            flex-grow: 1;

            width: 20px;
        }
    }

    &__body {
        display: block;

        &-row {
            display: flex;
            align-items: center;

            width: 100%;
            padding: 7px 12px;
            border-bottom: 1px solid vars.$light-grey;
        }

        &-place {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 24px;
            height: 24px;
            margin-right: 8px;

            cursor: default;

            font-size: 0.938rem;
            font-weight: 400;
            position: relative;

            &_promo-green {
                background-color: vars.$green;

                &:hover .tooltip {
                    visibility: visible;
                    opacity: 1;
                }
            }

            &_promo-blue {
                background-color: vars.$light-blue;

            }

            &_promo-green,
            &_promo-blue {
                color: vars.$white;
                border-radius: 50px;
            }
        }

        &-club-logo {
            margin-right: 8px;
        }

        &-club-name {
            flex-grow: 2.28;
        }

        &-games {
            flex-grow: 2;
        }

        &-lose-goals {
            flex-grow: 2;
        }

        &-wins,
        &-loses,
        &-draw,
        &-points {
            flex-grow: 1;

            width: 20px;
        }

        &-games,
        &-wins,
        &-draw,
        &-loses,
        &-lose-goals,
        &-points {
            text-align: center;

            color: rgba($color: #000, $alpha: 80%);

            font-size: 0.75rem;
            font-weight: 400;
        }

        &-form {
            display: none;
        }

        &-form-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 1px;
        }

    }

    @media (width >=vars.$md) {
        & {
            overflow-x: hidden;

            &__head {
                &-form {
                    display: table-cell;
                    flex-grow: 2;
                }
            }

            &__body {
                &-form {
                    display: table-cell;
                    flex-grow: 1;
                }
            }
        }
    }
}

.tooltip {
    visibility: hidden;
    width: 110px;
    background-color: vars.$grey;
    color: vars.$white;
    text-align: center;
    border-radius: 3px;
    padding: 8px;
    position: absolute;
    z-index: 1;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    top: 130%;
    left: 235%;
    font-weight: 400;
    font-size: 12px;

    &::after {
        content: "";
        position: absolute;
        bottom: 100%;
        left: 15%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: vars.$grey transparent transparent transparent;
        rotate: 180deg;
    }
}
</style>