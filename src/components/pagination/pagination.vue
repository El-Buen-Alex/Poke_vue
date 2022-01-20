<template>
    <nav class="d-flex justify-content-center pt-2">
        <ul class="pagination">
            <li @click="prevPage" :class="classPrevButton"><a class="page-link" href="#">Previous</a></li>
            <li @click="pintar(item)" v-for="item in pages" :key="item" class="page-item"  ><a class="page-link" href="#">{{item}}</a></li>
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
            classNextButton:'page-item',
            actualPage:0,
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
        //    const fin=this.pages[2]
        //    if(fin!="56"){
        //         this.pages=this.pages.map(e=>e+1)
        //         this.$emit("requestNextList")
        //         const newFinal=this.pages[2]
        //         if(newFinal=="56"){
        //             this.classNextButton="page-item disabled"
        //         }
        //         this.classPrevButton="page-item"
        //    }else if(fin=="56"){
        //        this.classNextButton="page-item disabled"
        //    }

           if(this.actualPage<55){
               this.sumarPagination()
               //this.$emit("requestNextList")
                this.$emit("goToPage",++this.actualPage+1)
           }else if(this.actualPage==56){
               this.classNextButton="page-item disabled"
           }
        },
         prevPage(){
            //  const inicio=this.pages[0];
            //  if(inicio!="1"){
            //     this.pages=this.pages.map(e=>e-1)
            //     this.$emit("requestPrevList")
            //     const inicio=this.pages[0];
            //         if(inicio==1){
            //             this.classPrevButton=this.classPrevButton+" disabled"
            //         }
            //         this.classNextButton="page-item "
            //     console.log(this.pages)
            //  }
            
           if(this.actualPage==1){
               this.classPrevButton=this.classPrevButton+" disabled"
               this.$emit("goHome")
           }else if(this.actualPage>1){
               this.restarPagination()
               //this.$emit("requestPrevList")
               this.$emit("goToPage",this.actualPage-1)

           }

        },
        pintar(item){
            console.log(item)
            this.refreshPages(item)
            if(item==1){
                 this.$emit("goHome")
            }else{
                 this.$emit("goToPage",item-1)
            }
           
            this.actualPage=item;
        },
        refreshPages(item){
            if(this.pages[2]>2 && this.pages[1]!=item ){
               
                if(this.pages[0]==item){
                    console.log("debo restar "+item)
                    this.restarPagination()
                }else{
                    this.sumarPagination()
                }    
            }
        },
        sumarPagination(){
            if(this.pages[2]!=56){
                 this.pages=this.pages.map(e=>e+1)
                 this.classPrevButton="page-item"
            }else{
                 this.classNextButton="page-item disabled"
            }
        },
        restarPagination(){
            if(this.pages[0]!=1){
                this.pages=this.pages.map(e=>e-1) 
                this.classNextButton="page-item "
            }else{
                this.classPrevButton=this.classPrevButton+" disabled"
            }
        }
    }
}
</script>