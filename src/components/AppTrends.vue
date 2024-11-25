<template>
    <section class="trends">
        <h3 class="trends__title">Тренди</h3>
        <div class="trends__links">
            <a href="#" class="trends__link">
                <img src="../assets/icons/lightning_icon.svg" alt="Lightning icon" class="trends__link-icon">
                Коронавірус
            </a>
            <a href="#" class="trends__link">
                <img src="../assets/icons/lightning_icon.svg" alt="Lightning icon" class="trends__link-icon">
                Трансфери літа
            </a>
            <a href="#" class="trends__link">
                <img src="../assets/icons/lightning_icon.svg" alt="Lightning icon" class="trends__link-icon">
                Рейтинг клубів
            </a>
            <a href="#" class="trends__link">
                <img src="../assets/icons/lightning_icon.svg" alt="Lightning icon" class="trends__link-icon">
                Барселона
            </a>
        </div>
    </section>
</template>

<style lang="scss">
.trends {
    margin-top: 40px;

    &__title {
        margin-bottom: 16px;

        color: rgba($color: #000, $alpha: 90%);

        font-size: 1.125rem;
        font-weight: 700
    }

    &__links {
        display: flex;
        column-gap: 8px;

        flex-wrap: wrap;
    }

    &__link {
        display: block;

        display: flex;
        align-items: center;

        max-width: fit-content;
        margin: 0 8px 8px 0;
        padding: 9px 16px 9px 12px;

        color: rgba($color: #000, $alpha: 70%);
        border-radius: 16px;
        background-color: rgba($color: #000, $alpha: 5%);

        font-size: 0.75rem;

        font-weight: 400;

        &-icon {
            margin-right: 10px;
        }
    }
}
</style>