<template>
   <div class="container">
        <div class="comments ">
            <h4>Comentarios</h4>
        


        </div>
        <div class="" v-if="commentExist">
          
            
        </div>
        <div class="scrolls" v-else>
            <p class="">No existen comentarios</p>
             <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
             <p>1</p>
            <p>1</p>
            <p>1</p>
             <p>1</p>
            <p>1</p>
            <p>1</p>
             <p>Comentarios</p>
            <p>Comentarios</p>
            <p>Comentarios</p>
           
            
        </div>
        
        <div class="input-group mb-3 abajo-s">
            <input type="text" class="form-control " placeholder="Ingresa tu comentario" aria-label="Recipient's username" aria-describedby="button-addon2">
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
.scrolls{
     position: absolute;
        width:45%;
        max-width: 50%;
        padding:1rem;
       
        height: 200px;
	overflow-y: scroll;
}
.abajo-s{
    position: relative;
    bottom: -175px;
}
</style>