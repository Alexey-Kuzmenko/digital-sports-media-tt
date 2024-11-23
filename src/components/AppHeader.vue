<template>
  <header class="header">
    <nav class="navbar">
      <button class="navbar__burger">
        <img src="../assets/icons/burger_icon.svg" alt="Menu burger icon">
      </button>

      <a href="#" class="logo">
        <img src="../assets/Logo.svg" alt="Sport.ua" class="logo">
      </a>

      <div class="navbar__controls">
        <a href="#" class="navbar__matches">
          <img src="../assets/icons/radio_button_icon.svg" alt="Radio button icon">
          Матчі
        </a>

        <button class="navbar__user-news navbar__user-news_unauthorized">
          <img src="../assets/icons/star_icon.svg" alt="Star icon">
        </button>

        <button class="navbar__notifications navbar__notifications_with-counter">
          <img src="../assets/icons/bell_icon.svg" alt="Bell icon">
        </button>

        <button class="navbar__search">
          <img src="../assets/icons/search_icon.svg" alt="Search icon">
        </button>
        <a href="#" class="navbar__user-profile-icon">
          <img src="../assets/icons/user_profile_icon.png" alt="User profile">
        </a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@use '../scss/utilities/variables' as vars;
@use '../scss/utilities/placeholders';

.header {
  padding: 6px;

  background-color: vars.$black;

  .navbar {
    display: flex;
    align-items: center;

    width: 100%;
    max-width: calc(vars.$xxl + 40px);
    margin: 0 auto;

    &__controls {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: auto;
    }

    &__burger,
    &__matches,
    &__user-news,
    &__notifications,
    &__search {
      background-color: inherit;

      @extend %icon-button;
    }

    &__burger {
      margin-right: 8px;
    }

    &__matches {
      padding: 5px;
      column-gap: 2px;

      color: vars.$white;
    }

    &__search,
    &__user-profile-icon {
      display: none;
    }

    @media (width >=vars.$lg) {
      &__burger,
      &__user-news,
      &__notifications,
      &__search {
        &:hover {
          transition: background-color .2s ease;

          background-color: vars.$grey;
        }
      }

      &__notifications {
        position: relative;

        &_with-counter::after {
          position: absolute;
          top: 6px;
          right: 8px;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 14px;
          height: 14px;

          content: "2";

          color: vars.$white;
          border-radius: 6px;
          background: vars.$red;

          font-size: 10px;
          font-weight: 900;
          line-height: 12px;
        }
      }

      &__user-news {
        position: relative;

        &_unauthorized::before {
          position: absolute;
          top: 6px;
          right: 11px;

          display: block;

          width: 5px;
          height: 5px;

          content: "";

          border-radius: 50%;
          background: vars.$yellow;
        }
      }

      &__matches {
        display: none;
      }

      &__search {
        display: flex;
      }

      &__user-profile-icon {
        display: block;

        margin-left: 6px;
      }

    }
  }
}
</style>