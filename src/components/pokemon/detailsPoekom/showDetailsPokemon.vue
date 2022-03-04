<template>
    <Modal v-show="pokemonInformationObj" :fondoPokemon="fondo">
        <div class="container h-100">
            <div class="row">
                <div class="col-12 col-md-6 ">
                    <div class="row">
                        <div class="col-6">
                            <img class="h-100"  :src="pokemonInformationObj.sprites.front_default" alt="">
                        </div>
                         <div class="col-6">
                            <img class="h-100"  :src="pokemonInformationObj.sprites.back_default" alt="">
                        </div>
                    </div>
                   
                    <h4 class="text-light fw-bolder">{{pokemonInformationObj.name}}</h4>
                    <p class="text-light fw-bolder">Id = {{pokemonInformationObj.id}}</p>
                    <p class="text-light fw-bolder">Peso = {{pokemonInformationObj.weight/10}} kg</p>
                    <p class="text-light fw-bolder">Altura = {{pokemonInformationObj.height/10}} m</p>
                </div>
                <div class="col-12 col-md-6">
                    <Comments :idPokemon="pokemonInformationObj.id">
                        
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
        }
    },
    components: {
        Modal,
        Comments
    },
    props:{
        pokemonInformation:{
            
        },
        backgroundProp:{
            type:String,
            default:''
        }
    },
    methods: {
       
    },
    mounted() {
        if(this.pokemonInformation.abilities){
            localStorage.setItem("pokemonInformation", JSON.stringify(this.pokemonInformation))
            localStorage.setItem("backgroundProp", JSON.stringify(this.backgroundProp))
        }
    },
    computed:{
        pokemonInformationObj(){
            if(!this.pokemonInformation.abilities){
                console.log("ola")
                return JSON.parse(localStorage.getItem("pokemonInformation"))
                
            }
            return this.pokemonInformation;
        },
        fondo(){
            if(this.backgroundProp==''){
                return JSON.parse(localStorage.getItem('backgroundProp'))
            }
            return this.backgroundProp
        }
    }
}
</script>

<style scoped>

</style>