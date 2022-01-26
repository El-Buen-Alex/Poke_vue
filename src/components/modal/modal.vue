<template>
    <div class="overlay" >
        <div class="popup h-auto" id="global" >
            <div class="card h-100 pb-3" :style="'background-color:'+fondoPokemon">
                <div class="d-flex flex-row-reverse py-1 pe-1">
                    <button type="button" class="btn-close" aria-label="Close" @click="closepopup"></button>
                </div>
                <slot/>
            </div>
        </div>
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
    props:{
        //un object donde le pasas la clase en este caso de boostrap que tendrá el boton y el nombre
        propertiesConfirmButton:{
            type:Object,
        },
        fondoPokemon:{
            type: String,
        },
    },
    methods:{ 
        closepopup(e){
            const modal=e.target.parentNode.parentNode.parentNode;
            modal.style.display="none"
            this.$router.go(-1)
        }
    }    
}
</script>
<style>
    .overlay{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,0.395);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:1;
        
    }
    .popup{
        position: absolute;
        width:80%;
        max-width: 100%;
        background-color:white;
        padding:1rem;
        border-radius: 0.5rem;
        height: 80%;   
    }
    @media (min-width: 768px) {
         .popup{
        position: absolute;
        width:100%;
        max-width: 45%;
        background-color:white;
        padding:1rem;
        border-radius: 0.5rem;
        height: 400px;  
        
    }
    }
   
</style>