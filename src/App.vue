<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <div class="container w-75 bg-success rounded-3 mb-2">
        <div class="row">
          <div class="col-12 col-md-8">
              <h1 class="d-flex  justify-content-center pt-3 text-light ">POKE VUE - BEST GROUP</h1>
          </div>
          <div class="col-12 col-md-4 ">
               <div class=" input-group mb-3 pt-3" >
                  <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                  <input @input="searchPokemon" v-model="namePokemon" type="text" class="form-control" placeholder="Pokemon Name" aria-label="Pokemon-name" aria-describedby="basic-addon1">
              </div>  
          </div>
        </div>
      </div>
      <router-view :pokemonList="pokemones.results"></router-view>
    </div>
    <paginationVue v-on:requestNextList="getNextListPokemon" v-on:requestPrevList="getPrevListPokemon"></paginationVue>
  
  </div>
</template>

<script>

import paginationVue from './components/pagination/pagination.vue';

export default {
  name: 'App',
  data(){
    return{
        pokemones:[],
            sizePokemons:0,
            namePokemon:'',
    } 
  },
  components: {
    paginationVue,
  },
  mounted(){
    this.getAllPokemons();
  },
  methods: {
    async getAllPokemons(){
            await this.axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response =>{
              
                this.pokemones=response.data;
                this.sizePokemons=this.pokemones.count;
                console.log(this.pokemones)
            }).catch(error=>{
                console.log(error)
            })
    },
    async getNextListPokemon(){
      console.log(this.pokemones.next)
      await this.axios.get(this.pokemones.next).then(response =>{

                this.pokemones=response.data;
                console.log(this.pokemones)
            }).catch(error=>{
                console.log(error)
            })
    },
    async getPrevListPokemon(){
      await this.axios.get(this.pokemones.previous).then(response =>{
                this.pokemones=response.data;
                console.log(this.pokemones)
            }).catch(error=>{
                console.log(error)
            })
    },
    searchPokemon(){
      if(this.namePokemon.length>4){
        this.getPokemonByName();
      }else if(this.namePokemon==""){
        this.$router.push({name:'showPokemon'})
        this.getAllPokemons()
      }
    },
    async getPokemonByName(){
       await this.axios.get(`https://pokeapi.co/api/v2/pokemon/${this.namePokemon}`).then(() =>{
          this.$router.push({name:'showPokemon'})
         this.pokemones.results=[
           { 
             name: this.namePokemon,
             url: `https://pokeapi.co/api/v2/pokemon/${this.namePokemon}`
           }
         ];
      }).catch(()=>{
        if(this.$route.name!="pokemonNotFound"){
          this.$router.push({name:'pokemonNotFound'})
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
