<template>
   <div class="container">
        <div class="tittle">
            <h4>Comentarios</h4>
        


        </div>
        <div class="scrolls" v-if="commentExist">
            <div v-for="(comentario,index) in pokemonComment" :key="index">
                <div class="card my-2">
<p>{{comentario}}</p>
                </div>
                
            </div>
            
        </div>
        <div class="" v-else>
           
<p class="">No existen comentarios</p>
            
        </div>
        
        <div class="input-group mb-3 abajo-s mt-2">
            <input type="text" class="form-control " placeholder="Ingresa tu comentario" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="texto">
            <button class="btn btn-primary" type="button" id="button-addon2" @click="savedComments()">Bu</button>
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
            let data = localStorage.getItem(this.idPokemon);
            this.pokemonComment = JSON.parse(data);
            /* falta pintarlos */
        },
        savedComments(){
            /* verificar si hay un array con el mismo nombre? */
            this.pokemonComment.push(this.texto)
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
.tittle{
    display: inline-block;
}
</style>