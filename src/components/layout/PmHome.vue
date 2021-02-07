<template lang="pug">
    .page-home
        nav.navbar.is-primary(role="navigation" aria-label="main navigation") 
            .container
                .navbar-brand
                    a.navbar-item(href="/") 
                        strong PLATZI MUSIC
                #navbarBasicExample.navbar-menu
                    .navbar-end
                        a.navbar-item Buscar
                        a.navbar-item Nosotros

        section.hero.is-primary
            .hero-body
                .container.has-text-centered
                    .title Platzi Music
                    .subtitle Canciones que estan Vue-nísimas           
                    input.input.is-rounded.is-success(type="text" placeholder="Buscar canciones...")   

        .container
            p Encontrados: 0     

            .columns.is-multiline.is-mobile
                .column.is-3(v-for="index in [1,2,3,4,5,6,7,8]")
                    .card
                        .card-image
                            figure.image.is-4by3
                                img(src="https://bulma.io/images/placeholders/1280x960.png")
                        .card-content
                            .content
                                p.title.is-4 John Smith
                                subtitle.is-6 johnsmith
                                p  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris. 
            
           
                
</template>

<script>
export default {
    
}
</script>

<style lang="sass">

</style>