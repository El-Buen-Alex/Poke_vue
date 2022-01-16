<template>
    <Modal>
        <div>
            {{pokemonInformation.name}}
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