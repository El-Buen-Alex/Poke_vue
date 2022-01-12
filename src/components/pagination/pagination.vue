<template>
    <nav class="d-flex justify-content-center pt-2">
        <ul class="pagination">
            <li @click="prevPage" :class="classPrevButton"><a class="page-link" href="#">Previous</a></li>
            <li v-for="item in pages" :key="item" class="page-item"  @click="pintar(item)"><a class="page-link" href="#">{{item}}</a></li>
            <li @click="nextPage" :class="classNextButton"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            pages:[1,2,3],
            classPrevButton:'page-item disabled',
            classNextButton:'page-item'
        }
    },
    props: {
        size: {
            type: Number
        }
    },
    computed:{
        getTotalPagination(){
            return Math.ceil(this.size/20) ;
        }
    },
    methods:{
        nextPage(){
           const fin=this.pages[2]
           if(fin!="56"){
                this.pages=this.pages.map(e=>e+1)
                this.$emit("requestNextList")
                const newFinal=this.pages[2]
                if(newFinal=="56"){
                    this.classNextButton="page-item disabled"
                }
                this.classPrevButton="page-item"
           }else if(fin=="56"){
               this.classNextButton="page-item disabled"
           }
        },
         prevPage(){
             const inicio=this.pages[0];
             if(inicio!="1"){
                this.pages=this.pages.map(e=>e-1)
                this.$emit("requestPrevList")
                const inicio=this.pages[0];
                    if(inicio==1){
                        this.classPrevButton=this.classPrevButton+" disabled"
                    }
                    this.classNextButton="page-item "
                console.log(this.pages)
             }
        },
        pintar(item){
            console.log(item)
        }
    }
}
</script>