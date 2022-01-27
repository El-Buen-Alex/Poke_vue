<template>
    <div  class="container my-5 my-sm-0">   
        <div class="contenedor ">
            <img class="imgPoke img-fluid mt-3 mb-0 mb-sm-0" src="../../img/sad-pikachu.webp" alt="">
            <div class="d-flex justify-content-center tamanio" >
                <!-- <img class="imgPokeFound img-fluid mb-3 w-100  mb-sm-0" src="../../img/marcoFond.png" alt=""> -->
                <p class="text-danger backgroundcoment w-75 text-break fs-5 p-4 ">Lo siento, no hay ningún Pokémon con el nombre "{{pokemonNameProps}}".</p>
              
            </div> 
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
        top: 250px;
        left: 14%;
    }
    /* @media (min-width: 480px) {
         .texto-encima{
        position: absolute;
        top: 50px;
        left: 10px;
    }
    } */
    .centrado{
        position: absolute;
        top: 0%;
        left: 0%;
        transform: translate(-50%, -50%);
    }
    .backgroundcoment{
        
        background-image: url('../../img/marcoFond.png');
        background-repeat: no-repeat;
         background-size: 100% 100%;
    }
    .tamanio{
        width: 500px;
    }
</style>