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
          .column(v-for="track in tracks") 
            | {{ track.name }} - {{ track.artists[0].name }}
</template>

<script>
import platziMusicServices from "./services/platziMusicServices";
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
      return `Encontrados : ${this.tracks.length}`
    }
  },
  methods:{
    search(){

      if(!this.searchQuery){
        return;
      }

      platziMusicServices.search(this.searchQuery).then((response)=>{
        //console.log("Tracks: ", response);
        this.tracks = response.tracks.items;
      })  
      .catch(console.log);
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";

</style>