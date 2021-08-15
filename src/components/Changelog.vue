<template>
  <div class="changelog" id="changelog">
    <div class="changelog__header">
      <span>{{ latestVersion.version }}</span>
    </div>
    <div class="changelog__content">
      <div class="item" v-for="(change, i) in latestVersion.changes" :key="i">
        • {{ change }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      versions: [
        {
          version: 'Beta 0.1',
          changes: [
            'Initial Release!',
            'Please report any bugs to @joshwcorbett on Instagram'
          ]
        },
        {
          version: 'Beta 0.2',
          changes: [
            'Quality of Life Design Changes',
            'Fixed 404 on page refresh',
            'New dedicated 404 Page'
          ]
        }
      ]
    }
  },

  computed: {
    latestVersion () {
      return this.versions.slice(-1).pop()
    }
  }
}
</script>

<style lang='postcss' scoped>

  .changelog {
    display: inline-block;
    background: var(--app-bg);
    border: 1px solid rgba(#fff, 0.05);
    border-radius: var(--global-radius);
    color: white;
    min-width: 400px;
    width: 40vw;
    max-width: 650px;
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
      border-bottom: 1px solid var(--light-grey);
      margin: 0;
      font-weight: 700;
      font-size: 1.2rem;
    }
    &__content {
      font-family: var(--font-serif);
      width: 65%;
      margin: 2em auto;

      .item {
        display: block;
        margin: 0.35em 0;
        font-size: 1.2rem;
      }
    }
  }

</style>
