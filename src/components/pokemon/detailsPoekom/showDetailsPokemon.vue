<template>
    <Modal>
        <div>
            <img :src="pokemonInformation.sprites.front_default" alt="">
            <img :src="pokemonInformation.sprites.back_default" alt="">
            <h4>{{pokemonInformation.name}}</h4>
            <p>Id = {{pokemonInformation.id}}</p>
            <p>Peso = {{pokemonInformation.weight}}</p>
            <p>Altura = {{pokemonInformation.height}}0 cm</p>
        </div>
    </Modal>
</template>

<script>
import Modal from '../../modal/modal.vue'
export default {
    
    components: {
        Modal
    },
    props:{
        pokemonInformation:{
            type:Object,
        }
    }
}
</script>