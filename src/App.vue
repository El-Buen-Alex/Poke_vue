<template>
  <div id="app" class="mt-0 pt-3">
    <img  class="w-sm-75 w-50 mb-lg-4 mb-2 " alt="Pokemon logo" src="./img/logoPokemon.webp">
    <div>
      <div class="container  w-75 bg-success mb-2">
        <div class="row ">
          <div class="col-12 col-md-8 colorRef">
              <h1 class="d-flex  justify-content-center pt-3 text-light fw-bold ">POKE VUE - POKEDEX</h1>
          </div>
          <div class="col-12 col-md-4 colorRef">
               <div class=" input-group mb-3 pt-3 " >
                  <span class="input-group-text " id="basic-addon1"><i class="fas fa-search"></i></span>
                  <input @input="searchPokemon" v-model="namePokemon" type="text" class="form-control" placeholder="Pokemon Name" aria-label="Pokemon-name" aria-describedby="basic-addon1">
              </div>  
          </div>
        </div>
      </div>
      <router-view  :pokemonList="pokemones.results" :pokemonNameProps="namePokemon" ></router-view>
    </div>
    <paginationVue  v-if="showPagination" v-on:goHome="getAllPokemons" v-on:goToPage="getPokemonsByPagination"></paginationVue>
     <button  @click="goToHome" v-else class="btn btn-primary colorDetails  mt-4">GO HOME</button>
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
            timer:Object,
            cancel:null,
            showPagination:null,
    } 
  },
  components: {
    paginationVue,
  },
  mounted(){
    this.getAllPokemons();
    this.setShowPagination(true);
  },
  methods: {
    async getAllPokemons(){
            await this.axios.get(`https://pokeapi.co/api/v2/pokemon`).then(response =>{
                this.pokemones=response.data;
                this.sizePokemons=this.pokemones.count;
            }).catch(error=>{
                console.log(error)
            })
    },
    searchPokemon(event){
      if(event.keyCode!==13){
        
        if(this.timer){
            clearTimeout(this.timer)
        }
        this.timer=setTimeout(()=>{
              this.getPokemonByName()
        },250)
          
      }else{
        console.log ('Enviar solicitud');
         this.getPokemonByName()
      }
    },
    async getPokemonByName(){
      if(this.cancel){
        this.cancel()
      }
          let CancelToken=this.axios.CancelToken
          await this.axios.get(`https://pokeapi.co/api/v2/pokemon/${this.namePokemonSearch}`, {cancelToken: new CancelToken((c)=>{
            this.cancel=c
          })}).then(() =>{
              if(!this.validarBusquedaVacia()){
                   this.pokemones.results=[
                  { 
                    name: this.namePokemonSearch,
                    url: `https://pokeapi.co/api/v2/pokemon/${this.namePokemonSearch}`
                  }
                ];
                  if(this.$route.name=="pokemonNotFound"){
                    this.$router.push({name:'showPokemon'})
                  } 
                  this.setShowPagination(false)
              }
          }).catch(()=>{
            console.log(this.namePokemonSearch.trim())
              this.setShowPagination(false) 
              if(this.$route.name!="pokemonNotFound"){
                    this.$router.push({name:'pokemonNotFound'})
                }
            }
          )
    },
    async getPokemonsByPagination(pagination){
      let offset=pagination*20;
      if(offset==0){
        offset="0"
      }
       await this.axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`).then(response =>{
                this.pokemones=response.data;
            }).catch(error=>{
                console.log(error)
        })
    },
    setShowPagination(state){
        this.showPagination=state
    },
    validarBusquedaVacia(){
         if(this.namePokemonSearch.trim()===""){
                if(this.$route.name!=="showPokemon"){
                    this.$router.push({name:'showPokemon'})
                }
                this.getAllPokemons()
                this.setShowPagination(true)
                return true;
         }
      return false;
    },
    goToHome(){
       this.setShowPagination(true)
       this.getAllPokemons()
       if(this.$route.name!=="showPokemon"){
          this.$router.push({name:'showPokemon'})
       }
       this.namePokemon=""
    },
   
  },
  computed: {
    namePokemonSearch: function(){
      return this.namePokemon.toLowerCase();
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

.colorRef{
  background-color: #F90716;
}
</style>
<style scoped>
    .tamLogo{
            height: 200px;
            width: 600px;
            margin-bottom: 50px;
    }
</style>