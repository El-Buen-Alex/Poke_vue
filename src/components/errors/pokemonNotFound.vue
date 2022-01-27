<template>
    <div  class="container my-5 my-sm-0">   
        <img class="imgPoke img-fluid mt-3 mb-3 mb-sm-0" src="../../img/sad-pikachu.webp" alt="">
        <div class="contenedor">
            <img class="imgPokeFound img-fluid mb-3  mb-sm-0" src="../../img/marcoFond.png" alt="">
            <h4 class="text-danger texto-encima mt-5 mt-sm-0 text-break">Lo siento, no hay ningún Pokémon con el nombre "{{pokemonNameProps}}".</h4>
            <div class="centrado"></div>
            
        </div>
        
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
   },
   computed: {
       getNombrePokemon: function() {
           this.setPokemonName
           return this.pokemonName
       }
   }
}
</script>

<style scoped>
    .imgPoke{
            height: 200px;
            width: 200px;
            margin-right: 20px;
    }
    .imgPokeFound{
        height: 150px;
        width: 500px;
    }
    .contenedor{
    position: relative;
    display: inline-block;
    text-align: center;

}
    .texto-encima{
        position: absolute;
        top: 10px;
        left: 10px;
    }
    @media (min-width: 768px) {
         .texto-encima{
        position: absolute;
        top: 50px;
        left: 10px;
    }
    }
    .centrado{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>