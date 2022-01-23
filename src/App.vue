<template>
  <div id="app">
    <img  class="tamLogo" alt="Pokemon logo" src="./img/logoPokemon.webp">
    <div>
      <div class="container w-75 bg-success rounded-3 mb-2">
        <div class="row">
          <div class="col-12 col-md-8 colorRef">
              <h1 class="d-flex  justify-content-center pt-3 text-light fw-bold ">POKE VUE - POKEDEX</h1>
          </div>
          <div class="col-12 col-md-4 colorRef">
               <div class=" input-group mb-3 pt-3" >
                  <span class="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span>
                  <input @input="searchPokemon" v-model="namePokemon" type="text" class="form-control" placeholder="Pokemon Name" aria-label="Pokemon-name" aria-describedby="basic-addon1">
              </div>  
          </div>
        </div>
      </div>
      <router-view  :pokemonList="pokemones.results" v-on:activatePagination="setShowPagination" ></router-view>
    </div>
    <paginationVue  v-if="showPagination" v-on:goHome="getAllPokemons" v-on:goToPage="getPokemonsByPagination"></paginationVue>
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
    // async getNextListPokemon(){
    //   await this.axios.get(this.pokemones.next).then(response =>{
    //             this.pokemones=response.data;
              
    //         }).catch(error=>{
    //             console.log(error)
    //         })
    // },
    // async getPrevListPokemon(){
    //   await this.axios.get(this.pokemones.previous).then(response =>{
    //             this.pokemones=response.data;
               
    //         }).catch(error=>{
    //             console.log(error)
    //         })
    // },
    searchPokemon(event){
      if(event.keyCode!==13){
        
        if(this.timer){
            clearTimeout(this.timer)
        }
        this.timer=setTimeout(()=>{
              this.getPokemonByName()
        },300)
          
      }else{
        console.log ('Enviar solicitud');
      }
    },
    async getPokemonByName(){
      if(this.cancel){
        this.cancel()
      }
      if(this.namePokemon.trim()==""){
          if(this.$route.name!=="showPokemon"){
              this.$router.push({name:'showPokemon'})
          }
          this.getAllPokemons()
          this.setShowPagination(true)
      }else{
          let CancelToken=this.axios.CancelToken
          await this.axios.get(`https://pokeapi.co/api/v2/pokemon/${this.namePokemon}`, {cancelToken: new CancelToken((c)=>{
            this.cancel=c
          })}).then(() =>{
            this.pokemones.results=[
              { 
                name: this.namePokemon,
                url: `https://pokeapi.co/api/v2/pokemon/${this.namePokemon}`
              }
            ];
              if(this.$route.name=="pokemonNotFound"){
                this.$router.push({name:'showPokemon'})
              } 
              this.setShowPagination(false)
             
          }).catch(()=>{
            console.log(this.namePokemon.trim())
              this.setShowPagination(false) 
              if(this.$route.name!="pokemonNotFound"){
                    this.$router.push({name:'pokemonNotFound'})
                }
            }
          )
      }
    
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
            width: 500px;
            margin-bottom: 50px;
    }
</style>