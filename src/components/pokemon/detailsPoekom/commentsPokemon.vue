<template>
   <div class="container">
        <div class="tittle">
            <h4>Comentarios</h4>
        


        </div>
        <div class="" v-if="commentExist">
            <div v-for="(comentario,index) in pokemonComment" :key="index">
                <p>{{comentario}}</p>
            </div>
            
        </div>
        <div class="scrolls" v-else>
            <p class="">No existen comentarios</p>
             
          
           
            
        </div>
        
        <div class="input-group mb-3 abajo-s">
            <input type="text" class="form-control " placeholder="Ingresa tu comentario" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="texto">
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
            texto:""
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
                this.getComments();

            }
             
        },
        getComments(){
            const comentariosPokemon = localStorage.getItem(this.idPokemon);
            console.log(comentariosPokemon);
            this.pokemonComment = JSON.parse(comentariosPokemon);
            console.log("----------------------------------------");
            console.log(this.comentariosPokemon);
            /* falta pintarlos */
        },
        savedComments(){
            /* verificar si hay un array con el mismo nombre? */
            const comentarioAgregado = this.texto;

            this.pokemonComment = this.pokemonComment.push(comentarioAgregado)
            localStorage.setItem(this.idPokemon, JSON.stringify(this.pokemonComment));

            if (this.commentExist === false) {
                this.commentExist = true;
            } 
        }
    }
}
</script>

<style scoped>
.scrolls{
     position: absolute;
        width:80%;
        max-width: 100%;
        padding:1rem;

        height: 200px;
	overflow-y: scroll;
}
.abajo-s{
    position: relative;
    bottom: -175px;
}

@media (min-width: 768px) {
    .scrolls{
     position: absolute;
        width:38%;
        max-width: 50%;
        padding:1rem;
       
        height: 200px;
	overflow-y: scroll;
}
}
.tittle{
    display: inline-block;
}
</style>