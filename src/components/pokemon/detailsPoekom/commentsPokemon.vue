<template>
   <div class="container h-100  shadow">
        <div class="tittle">
            <h4 class="fw-bolder">Comentarios</h4>
        </div>

        <div class="overflow-auto w-100 boxComent" id="commentsDiv" v-if="commentExist" >
            <div v-for="(comentario,index) in pokemonComment" :key="index">
                <div class="card my-2 mx-1">
                    <p class="d-flex align-items-center justify-content-center pt-2 text-break">{{comentario}}</p>
                </div>
            </div>
        </div>
        <div class="boxComent" v-else>
            <p class="">No existen comentarios</p>
        </div>
        
        <div class="input-group mb-3 mt-2">
            <input @keypress="saveComentByKey" type="text" class="form-control"  placeholder="Ingresa tu comentario" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="texto">
            <button class="btn btn-primary" type="button" id="button-addon2" @click="saveComentsAndScrollDown"><i class="fas fa-paper-plane"></i></button>
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
    mounted(){
        this.scrollDown()
    },
    props:{
        idPokemon:{
            type: Number,
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
        },
       async savedComments(){
            if(this.texto.trim()!==""){
                this.pokemonComment.push(this.texto)
                localStorage.setItem(this.idPokemon, JSON.stringify(this.pokemonComment));
                if (this.commentExist === false) {
                    this.commentExist = true;
                }
                this.texto="";
            }
        },
       async saveComentByKey(e){
            if(e.keyCode==13){
                 this.saveComentsAndScrollDown()
            }
        },
        async saveComentsAndScrollDown(){
            await this.savedComments().then(()=>{
                this.scrollDown();
            })
        },
         scrollDown(){
             console.log("scrollDown")
            const divComentarios=document.getElementById("commentsDiv")
            divComentarios.scrollTop=divComentarios.scrollHeight
        }
    },
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


.tittle{
    display: inline-block;
}
.boxComent{
    height: 80px;
    max-height: 90%;
}
@media (min-width: 768px) {
    .boxComent{
        height: 150px;
        max-height: 90%;
}

}


</style>