<template>
  <div class="app" id="app">

    <div class="explorer-container">
      <Explorer />
    </div>

    <div class="editor-container">
      <router-view :key="$route.path"></router-view>
    </div>

  </div>
</template>

<script>
import Explorer from '@/components/Explorer'

export default {
  name: 'App',

  components: {
    Explorer
  }
}
</script>
