<template>
    <div class="container mt-5 mb-5">   
        <img class="imgPoke img-fluid mb-3" src="../../img/sad-pikachu.webp" alt="">
        <h4 class="text-danger">Lo siento, no hay ningún Pokémon que concida con tu búsqueda.</h4>
         <button @click="activatePagination" class="btn btn-success colorDetails">GO HOME!</button>
    </div>
   
</template>
<script>
export default {
   props: {
       
   },
   methods: {
       activatePagination(){

           this.$emit('activatePagination', true)
            this.$router.push({name:'showPokemon'})
       }
   }
}
</script>

<style scoped>
    .imgPoke{
            height: 200px;
            width: 200px;
    }
</style>