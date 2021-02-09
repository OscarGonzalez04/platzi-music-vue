<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text", 
                placeholder="Buscar canciones",
                v-model="searchQuery"
              )
            .control
              button.button.is-info.is-large(@click="search") Buscar
            .control
              button.button.is-danger.is-large  
                span.icon
                  i.fas.fa-times

      .container
        .columns.is-multiline
          .column.is-full {{ searchMessage }}
          .column(v-for="track in tracks") {{ track.name }}
</template>

<script>

const tracks = [
  { name: 'Muchacha', artist: 'Luis Alberto Spinetta' },
  { name: 'Hoy aca en el baile', artist: 'El Pepo' },
  { name: 'I was made for loving you', artist: 'Kiss' }
];

import PmHome from "./components/layout/PmHome.vue"

export default {
  name: 'app',
  components: {
    PmHome
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
    }
  },
  computed:{
    searchMessage(){
      return `Encontrador : ${this.tracks.length}`
    }
  },
  methods:{
    search(){
      this.tracks = tracks;
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";

</style>