<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text", placeholder="Buscar canciones")
          button.button.is-info.is-large Buscar
          button.button.is-danger.is-large  
            span.icon
              i.fas.fa-times
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