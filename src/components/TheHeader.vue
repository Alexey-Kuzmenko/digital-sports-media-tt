<template>
  <header class="header">
    <nav class="navbar">
      <button class="burger">
        <img
          src="../assets/icons/burger_icon.svg"
          alt="Menu burger icon"
        >
      </button>
        
      <a
        href="#"
        class="logo"
      >
        <img
          src="../assets/Logo.svg"
          alt="Sport.ua"
          class="logo"
        >
      </a>

      <div class="navbar__controls" />
    </nav>
  </header>
</template>

<style lang="scss">
    @use '../scss/utilities/variables' as vars;
    
    .header {
        background-color: vars.$black;
        padding: 6px;

        .navbar {
            width: 100%;
            max-width: 1440px;
            display: flex;
            align-items: center;
            margin: 0 6px;

            .burger {
                border: none;
                background-color: inherit;
                cursor: pointer;
                padding: 12px 10px;
                margin-right: 8px;

                border-radius: 6px;
                &:hover {
                    background-color: vars.$grey;
                }
            }
        }
    }

</style>