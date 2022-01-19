<template>
    <Modal>
        <div class="container h-75">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div>
 <img :src="pokemonInformation.sprites.front_default" alt="">
                    <img :src="pokemonInformation.sprites.back_default" alt="">
                    </div>
                   
                    <h4>{{pokemonInformation.name}}</h4>
                    <p>Id = {{pokemonInformation.id}}</p>
                    <p>Peso = {{pokemonInformation.weight}}</p>
                    <p>Altura = {{pokemonInformation.height}}0 cm</p>
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
    }
}
</script>

<style scoped>

</style>