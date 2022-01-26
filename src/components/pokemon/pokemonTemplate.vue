<template>
            <div v-if="pokemonExist"  class="row py-1">
                <div  class="col-12 ">
                    <img class="fond"  :src="pokemonObject.sprites.front_default" alt=""  >
                </div>
                <div  class="col-12">
                    <h3 class="text-capitalize">{{pokemonObject.name}}</h3>
                </div>
                <div class="d-grid gap-2 ">
                    <button @click = "showModalInfo" class="btn btn-primary colorDetails fw-bold"><i class="fas fa-eye"></i> See Datails</button>
                </div>
            </div>
</template>

<script>
export default {
    data(){
        return {
            pokemonObject:[],
            pokemonExist:false,
            showModal:false,
        }
    },
    created(){
        this.getPokemon()
    },
    methods: {
        async getPokemon(){
            await this.axios.get(this.pokemon.url).then((response)=>{
                this.pokemonObject=response.data;
                if(!this.pokemonExist){
                    this.pokemonExist=true;
                }
            } )
            
        },
        showModalInfo(){
            this.$emit('sendPokemon', this.pokemonObject)
        }
    },
    props: {
        pokemon:{
          type: Object
        }
    }
}
</script>
<style >
 .colorDetails{
        background-color: #11468F ;
        border-color: #2a75bb;
 }
 .fond{
     background-image: url("../../img/blob.svg");
     background-repeat: no-repeat;
     background-position: center;
 }
</style>