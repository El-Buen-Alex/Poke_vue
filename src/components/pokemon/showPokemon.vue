<template>
    <div class="container">   
            <div class="row d-flex justify-content-center">
                <div class="card col-12 col-md-3 m-1" v-for="(pokemon) in pokemonList" :key="pokemon.name">
                    <pokemonTemplateVue :pokemon="pokemon" v-on:sendPokemon="setPokemonsInformation" ></pokemonTemplateVue>
            </div>
        </div>
        <router-view :pokemonInformation="pokemonInformation"></router-view>
    </div>
</template>
<script>
import pokemonTemplateVue from './pokemonTemplate.vue'

export default {
    name:'showPokemon',
    data(){
        return {
            pokemonInformation: Object
        }
    },
    methods:{
        setPokemonsInformation(pokemon){
             console.log("hola")
            this.pokemonInformation=pokemon;
            this.$router.push({name:'pokemonDetail'})
        }
    },
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