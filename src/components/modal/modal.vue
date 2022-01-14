<template>
    <!-- 
    <div class="overlay" >
        <div class="popup">
            <div class="card">
                <div class="d-flex flex-row-reverse py-1 pe-1">
                    <button type="button" class="btn-close" aria-label="Close" @click="closepopup"></button>
                </div>
                <slot/>
                <div class="pb-2 ps-2">
                    <button type="submit" :class="propertiesConfirmButton.class" @click="actionConfirmButton">{{propertiesConfirmButton.text}}</button>
                    <button class="btn btn-primary" @click="closepopup">Cancel</button>    
                </div>
            </div>
        </div>
    </div> -->
    <div class="modal-viewA">
        <transition name="fade">
            <div class="modal-overlay" v-if="showModal"></div>
        </transition>
        
        <transition name="fade">
            <div class="modal-view" v-if="showModal">
                <div class="row">
                    <div class="col-10"></div>
                    <div class="col-2">
                        <button type="button" class="btn btn-danger" @click = "showModal = false"><i class="far fa-times-circle"></i></button>
                    </div>
                </div>
                <div>
                    <h3>{{pokemonObject.name}}</h3>
                    <img :src="pokemonObject.sprites.front_default" alt="" >
                    <p>Id = {{pokemonObject.id}}</p>
                    <p>Peso = {{pokemonObject.weight}}</p>
                    <p>Altura = {{pokemonObject.height}}0 cm</p> 
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'modal',
    data(){
        return{
            showModal:false,
        }
    },
    /*props:{
        //accion que hará el boton de confirmar, la pasas como props desde donde se pone la etiqeuat modal
        actionConfirmButton:{
            type:Function,
            
        },
        //un object donde le pasas la clase en este caso de boostrap que tendrá el boton y el nombre
        propertiesConfirmButton:{
            type:Object,
        }
    },*/
    methods:{ 
        /*closepopup(e){
            const modal=e.target.parentNode.parentNode.parentNode;
            modal.style.display="none"
            this.$router.go(-1)
        }*/
    }    
}
</script>
<style>
    .modal-overlay{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 100;
        background: rgba(0, 0, 0,0.295);
    }
    .modal-view{
        position: fixed;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
        border-radius: 15px;
        box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
        z-index: 101;
    }
    .overlay{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,0.295);
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .popup{
        position: absolute;
        width:80%;
        max-width: 512px;
        background-color:white;
        padding:1rem;
        border-radius: 0.5rem;
        box-shadow:2px 5px 10px rgba(0,0,0,0.1);
    }
</style>