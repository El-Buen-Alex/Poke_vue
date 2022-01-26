<template>
    <div class="container w-75">   
            <div class="row d-flex justify-content-center mt-4">
                <div  class="bg-light col-12 col-md-3 m-2 animate__animated animacion pokeModal rounded-3"  v-for="(pokemon) in pokemonList" :key="pokemon.name">
                    <pokemonTemplateVue  :pokemon="pokemon" v-on:sendPokemon="setPokemonsInformation" ></pokemonTemplateVue>
            </div>
        </div>
        <router-view :pokemonInformation="pokemonInformation" :backgroundProp="backgroundData"></router-view>
    </div>
</template>
<script>
import pokemonTemplateVue from './pokemonTemplate.vue'

export default {
    name:'showPokemon',
    data(){
        return {
            pokemonInformation: Object,
            backgroundData: '',
        }
    },
    methods:{
        setPokemonsInformation(pokemon, background){
            this.pokemonInformation=pokemon;
            this.backgroundData=background
            this.$router.push({name:'pokemonDetail'})
        },
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

<style scoped>
    .animacion:hover{
        animation: pulse;
        animation-duration: 1s;
    }

    .pokeModal:hover{
        cursor: pointer;
    }
</style>