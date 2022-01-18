<template>
   <div class="containerrr">
        <div class="comments">
            <h4>Comentarios</h4>
            <p>hola mi id es {{idPokemon}}</p>

        </div>
        <div v-if="commentExist">
            
        </div>
        <div v-else>
            <p>No existen comentarios</p>
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Ingresa tu comentario" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="savedComments()">Bu</button>
        </div>
   </div>
</template>

<script>
export default{
    data(){
        return{
            pokemonComment:[],
            commentExist: Boolean,
        }
        
    },
    created() {
        this.verificarArray()
        
    },
    props:{
        idPokemon:{
            type: String,
            required: true
        },
    },
    methods:{
        verificarArray(){
            if (localStorage.getItem(this.idPokemon) === null) {
                this.commentExist = false;

            }else{
                this.commentExist = true;

            }
             
        },
        getComments(){
            const comentariosPokemon = localStorage.getItem(this.idPokemon);
            this.pokemonComment = JSON.parse(comentariosPokemon);
            console.log(comentariosPokemon);
        },
    }
}
</script>

<style scoped>

</style>