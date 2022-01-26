<template>
            <div v-if="pokemonExist"  class="row py-1"  @click = "showModalInfo">
                <div  class="col-12 ">
                    
                    <img  class="fond" :style="' background-color:'+getFondo" :src="pokemonObject.sprites.front_default" alt=""  >
                </div>
                <div  class="col-12">
                    <h3 class="text-capitalize">{{pokemonObject.name}}</h3>
                </div>
                <!-- <div class="d-grid gap-2 ">
                    <button @click = "showModalInfo" class="btn btn-primary colorDetails fw-bold"><i class="fas fa-eye"></i> See Datails</button>
                </div> -->
            </div>
</template>

<script>
export default {
    data(){
        return {
            pokemonObject:[],
            pokemonExist:false,
            showModal:false,
            colours: {
                normal: '#A8A77A',
                fire: '#EE8130',
                water: '#6390F0',
                electric: '#F7D02C',
                grass: '#7AC74C',
                ice: '#96D9D6',
                fighting: '#C22E28',
                poison: '#A33EA1',
                ground: '#E2BF65',
                flying: '#A98FF3',
                psychic: '#F95587',
                bug: '#A6B91A',
                rock: '#B6A136',
                ghost: '#735797',
                dragon: '#6F35FC',
                dark: '#705746',
                steel: '#B7B7CE',
                fairy: '#D685AD',
            },
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
            this.$emit('sendPokemon', this.pokemonObject, this.getFondo)
        },

    },
    props: {
        pokemon:{
          type: Object
        }
    },
    computed: {
        getFondo:function(){
            let tipo = this.pokemonObject.types[0].type.name;
            for (const property in this.colours) {
                if(tipo==property){
                    return this.colours[property];
                }
            }
            return ""  
        }
    },
}
</script>
<style >
 .colorDetails{
        background-color: #11468F ;
        border-color: #2a75bb;
 }
 .fond{
     border-radius: 51% 49% 65% 35% / 42% 58% 42% 58%;
 }
</style>