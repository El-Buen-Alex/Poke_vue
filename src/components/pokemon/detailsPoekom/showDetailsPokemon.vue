<template>
    <Modal v-show="pokemonInformation" :fondoPokemon="getFondo">
        <div class="container h-100">
            <div class="row">
                <div class="col-12 col-md-6 ">
                    <div class="row">
                        <div class="col-6">
                            <img class="h-100"  :src="pokemonInformation.sprites.front_default" alt="">
                        </div>
                         <div class="col-6">
                            <img class="h-100"  :src="pokemonInformation.sprites.back_default" alt="">
                        </div>
                    </div>
                   
                    <h4 class="text-light">{{pokemonInformation.name}}</h4>
                    <p class="text-light">Id = {{pokemonInformation.id}}</p>
                    <p class="text-light">Peso = {{pokemonInformation.weight/10}} kg</p>
                    <p class="text-light">Altura = {{pokemonInformation.height/10}} m</p>
                </div>
                <div class="col-12 col-md-6">
                    <Comments :idPokemon="pokemonInformation.id">
                        
                    </Comments>
                </div>
            </div>    
        </div>  
    </Modal>
</template>

<script>
import Modal from '../../modal/modal.vue'
import Comments from '../detailsPoekom/commentsPokemon.vue'
export default {
    data(){
        return{
            id: "1",
            existeFondo:false,
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
    components: {
        Modal,
        Comments
    },
    props:{
        pokemonInformation:{
            type:Object,
        }
    },
    methods: {
       
      
    },
    mounted() {
    },
    computed: {
        getFondo:function(){
            let tipo = this.pokemonInformation.types[0].type.name;
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

<style scoped>

</style>