<template>
<div class="error-page" id="errorPage">
  <div class="splash">
    <div class="splash__header">
      <h1>{{ errorhead }}</h1>
    </div>
    <div class="error">
      <div class="error__header">
      <span>{{ errorMessage }}</span>
    </div>
    </div>
    <div class="splash__buttons">
      <a class="btn" :href="`${ githubLink }`" target="_blank">
        <Icon icon='Github'/>
      </a>
      <router-link class="btn" :to="{ name: 'Home' }">
        <span>Go Home</span>
        <Icon icon='Arrow Right' />
      </router-link>
      <router-link class="btn" :to="{ name: 'App' }">
        <span>Go to App</span>
        <Icon icon='Arrow Right' />
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import Icon from '@/components/Icon'
export default {

  data () {
    return {
      errorhead: '404',
      errorMessage: 'Error - This page seems to be missing. Try some of the lings below'
    }
  },
  components: {
    Icon
  }

}
</script>

<style lang="postcss">

  .error-page {
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

      h1 {
        font-family: var(--font-serif);
        font-weight: 900;
        font-size: 3.5rem;
        margin-bottom: 0.25em;
      }
      span {
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

  .error {
    display: inline-block;
    background: var(--app-bg);
    border: 1px solid rgba(#fff, 0.05);
    border-radius: var(--global-radius);
    color: white;
    min-width: 350px;
    width: 35vw;
    max-width: 600px;
    margin: 3em 0;
    transition: background 120ms ease, box-shadow 200ms linear;

    &:hover {
      background: var(--dark-grey);
      box-shadow: 0px 20px 35px rgba(#000,0.15);
    }

    &__header {
      font-family: var(--font-sans-serif);
      padding: 1.35em 2.25em;
      width: 100%;
      margin: 0;
      font-weight: 700;
      font-size: 1.2rem;
    }
  }

</style>
