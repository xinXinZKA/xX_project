<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppContainer></AppContainer>
  </div>
</template>

<script>
import {fontsizeset} from './fontsizeset'
import AppHeader from './components/AppHeader'
import AppContainer from './components/AppContainer'

export default {
  name: 'app',
  components: { AppHeader , AppContainer }
}
</script>

<style>

</style>
