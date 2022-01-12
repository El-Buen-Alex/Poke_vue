<template>
    <div class="container">   
            <div class="row d-flex justify-content-center">
                <div class="card col-12 col-md-3 m-1" v-for="(pokemon) in pokemonList" :key="pokemon.name">
                    <pokemonTemplateVue :pokemon="pokemon"></pokemonTemplateVue>
            </div>
        </div>
    </div>
</template>
<script>
import pokemonTemplateVue from './pokemonTemplate.vue'

export default {
    name:'showPokemon',
    props:{
        pokemonList:{
            type: Array,
            required : true
        }
    },
    components:{
        pokemonTemplateVue
    }
   
}
</script>
