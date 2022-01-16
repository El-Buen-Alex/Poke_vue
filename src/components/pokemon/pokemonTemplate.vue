<template>
            <div v-if="pokemonExist"  class="row py-1" >
                <div class="col-12">
                    <img :src="pokemonObject.sprites.front_default" alt="" >
                </div>
                <div  class="col-12">
                    <h2>{{pokemonObject.name}}</h2>
                </div>
                
                <!-- <transition name="fade">
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
                            <img :src="pokemonObject.sprites.front_default" alt="">
                            <img :src="pokemonObject.sprites.back_default" alt="">
                            <p>Id = {{pokemonObject.id}}</p>
                            <p>Peso = {{pokemonObject.weight}}</p>
                            <p>Altura = {{pokemonObject.height}}0 cm</p> 
                        </div>
                    </div>
                </transition>
                
                <div class="d-grid gap-2">
                    <button @click = "showModal = true" class="btn btn-success"><i class="fas fa-eye"></i> See Datails</button>
                </div> -->
                <div class="d-grid gap-2">
                    <button @click = "showModalInfo" class="btn btn-success"><i class="fas fa-eye"></i> See Datails</button>
                </div>
               
            </div>
</template>

<script>



export default {

    data(){
        return {
            pokemonObject:[],
            pokemonExist:false,
            showModal:false,
        }
    },
    created(){
        this.getPokemon()
    },
    methods: {
        async getPokemon(){
            await this.axios.get(this.pokemon.url).then((response)=>{
                this.pokemonObject=response.data;
                if(!this.pokemonExist){
                    this.pokemonExist=true;
                }
            } )
            console.log(this.pokemonObject)
        },
        showModalInfo(){
           
            this.$emit('sendPokemon', this.pokemonObject)
            
        }
    },
    props: {
        pokemon:{
          type: Object
        }
    }
}
</script>

<style>
    .modal-overlay{
        position: fixed;
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
        width:30%;
    }
</style>