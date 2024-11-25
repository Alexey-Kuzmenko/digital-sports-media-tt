<template>
    <div class="main-news">
        <h2 class="main-news__title">Головні новини</h2>
        <div class="main-news__items">
            <a href="#" class="main-news__item">
                <img src="../assets/icons/arrow_icon.svg" alt="Arrow icon">
                Артем ФРАНКОВ: «Я не прихильник переходу на систему весна-осінь»
            </a>
            <a href="#" class="main-news__item">
                <img src="../assets/icons/arrow_icon.svg" alt="Arrow icon">
                Welcome to the team! Макгрегор привітав Пак'яо у своїй команді
            </a>
            <a href="#" class="main-news__item">
                <img src="../assets/icons/arrow_icon.svg" alt="Arrow icon">
                КАРИКАТУРА ДНЯ. Сейв століття від Бенкса після удару Пеле
            </a>
            <a href="#" class="main-news__item">
                <img src="../assets/icons/arrow_icon.svg" alt="Arrow icon">
                Лунін став гравцем місяця в Ов'єдо
            </a>
            <a href="#" class="main-news__item">
                <img src="../assets/icons/arrow_icon.svg" alt="Arrow icon">
                Welcome to the team! Макгрегор привітав Пак'яо у своїй команді
            </a>
        </div>
    </div>
</template>

<style lang="scss">
@use '../scss/utilities/variables' as vars;

.main-news {
    margin-top: 32px;

    &__title {
        margin-bottom: 16px;

        color: rgba($color: #000, $alpha: 90%);

        font-size: 1.125rem;
        font-weight: 700
    }

    &__items {
        display: flex;
        flex-flow: column nowrap;
    }

    &__item {
        display: flex;

        padding: 16px 0;

        color: rgba($color: #000, $alpha: 80%);

        border-top: 1px solid vars.$light-grey;

        font-size: 1rem;
        font-weight: 500;
        column-gap: 12px;
    }
}
</style>