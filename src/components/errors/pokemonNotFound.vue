<template>
    <div  class="container my-5 my-sm-0">   
        <img class="imgPoke img-fluid mb-3 mb-sm-0" src="../../img/sad-pikachu.webp" alt="">
        <h4 class="text-danger mt-5 mt-sm-0">Lo siento, no hay ningún Pokémon con el nombre {{pokemonName}}.</h4>
         <!-- <button @click="activatePagination" class="btn btn-success colorDetails">GO HOME!</button> -->
    </div>
   
</template>
<script>
export default {
    data () {
        return{
            pokemonName:'',
        }
    },
   props: {
       pokemonNameProps:String,
   },
   created() {
       this.setPokemonName()
   },
   methods: {
       setPokemonName(){

            this.pokemonName=this.pokemonNameProps
        
       }
   }
}
</script>

<style scoped>
    .imgPoke{
            height: 200px;
            width: 200px;
    }
</style>