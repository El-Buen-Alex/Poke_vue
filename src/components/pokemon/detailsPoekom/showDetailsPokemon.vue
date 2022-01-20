<template>
    <Modal v-show="existeFondo && pokemonInformation" :fondoPokemon="fondo">
        <div class="container h-75">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-6">
                            <img class="h-100"  :src="pokemonInformation.sprites.front_default" alt="">
                        </div>
                         <div class="col-6">
                            <img class="h-100"  :src="pokemonInformation.sprites.back_default" alt="">
                        </div>
                    </div>
                   
                    <h4>{{pokemonInformation.name}}</h4>
                    <p>Id = {{pokemonInformation.id}}</p>
                    <p>Peso = {{pokemonInformation.weight/10}} kg</p>
                    <p>Altura = {{pokemonInformation.height/10}} m</p>
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
            fondo: "",
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
        setFondo(){
            const tipo = this.pokemonInformation.types[0].type.name;
            for (const property in this.colours) {
                if(tipo==property){
                    this.fondo=this.colours[property];
                    this.existeFondo=true
                }
            }
        },
       back(){
             this.$router.go(-1)
        }
    },
    mounted() {
        this.setFondo()
        
    },
   
}
</script>

<style scoped>

</style>