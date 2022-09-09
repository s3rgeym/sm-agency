<template>
  <div id="app">
    <v-app>
      <NavigationBar />
      <nuxt />
    </v-app>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar'
export default {
  name: 'Default',
  components: {
    NavigationBar,
  },
}
</script>

<style>
html,
body {
  height: 100%;
}
</style>
