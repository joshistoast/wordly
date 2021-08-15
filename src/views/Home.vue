<template>
  <div class="home" id="home">
    <div class="splash">
      <div class="splash__header">
        <h1>Wordly<span class="splash__header__decoration">.</span></h1>
        <span class="splash__header__desc">Write your stories easier. Free.</span>
      </div>
      <Changelog></Changelog>
      <div class="splash__buttons">
        <a class="btn" :href="`${ githubLink }`" target="_blank">
          <Icon icon='Github'/>
        </a>
        <router-link class="btn" :to="{ name: 'App' }">
          <span>Start Writing</span>
          <Icon icon='Arrow Right' />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Changelog from '@/components/Changelog'
import Icon from '@/components/Icon'
export default {

  data () {
    return {
      githubLink: 'https://github.com/joshwcorbett/wordly'
    }
  },

  components: {
    Changelog,
    Icon
  }

}
</script>

<style lang='postcss' scoped>

  .home {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  .splash {

    &__header {
      color: white;
      text-align: center;

      &__decoration {
        font: inherit;
        color: var(--primary)
      }

      h1 {
        font-family: var(--font-serif);
        font-weight: 900;
        font-size: 3.5rem;
        margin-bottom: 0.25em;
      }
      &__desc {
        font-family: var(--font-sans-serif);
        font-weight: 600;
        font-size: 1.5rem;
        opacity: 0.65;
      }
    }
    &__buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-top: 3em;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    background: var(--dark-grey);
    border: 1px solid rgba(#fff, 0.05);
    padding: 1em;
    border-radius: var(--global-radius);
    color: white;
    text-decoration: none;
    font-family: var(--font-serif);
    font-weight: 700;
    margin: 0.5em;
    transition: box-shadow 200ms linear, background 50ms linear;
    font-size: 1.35rem;

    span {
      margin-right: 0.35em;
    }

    &:hover {
      background: var(--primary);
      box-shadow: 0px 17px 30px rgba(#335EEA, 30%);
    }
  }

</style>
