<template lang="pug">
  #app
    pm-home
</template>

<script>

import PmHome from "./components/layout/PmHome.vue"

export default {
  name: 'app',
  components: {
    PmHome
  },
  data () {
    return {
      msg: 'Hola VUE!'
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
