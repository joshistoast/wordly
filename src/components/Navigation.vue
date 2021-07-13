<template>
  <div class="nav">
    <div class="nav__brand">
      <router-link class="nav__brand__item" :to="{ name: 'Home' }">Wordly</router-link>
    </div>
    <div class="nav__links">
      <router-link class="nav__links__item" :to="{ name: 'App' }">App</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang='postcss'>

  .nav {
    display: none;
    justify-content: space-between;
    padding: 0 7vw;

    border-bottom: 1px solid var(--light-grey);
    background: var(--dark-grey);

    font-family: var(--font-sans-serif);

    &__links,&__brand {
      display: flex;

      &__item {
        color: white;
        opacity: 0.35;
        padding: 1em;
        font-weight: bold;
        text-decoration: none;
      }
      &__item.router-link-active {
        opacity: 1
      }
    }
  }

  @media screen and (min-width: 600px) {
    .nav {
      display: flex
    }
  };

</style>
