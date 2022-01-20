<template>
    <nav class="d-flex justify-content-center pt-2">
        <ul class="pagination">
            <li @click="prevPage" :class="classPrevButton"><a class="page-link" href="#">Previous</a></li>
            <li @click="pintar" v-for="item in pages" :key="item" class="page-item "  ><a class="page-link items" :id="''+item" href="#">{{item}}</a></li>
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
    mounted() {
        this.setFocusById("1")
    },
    computed:{
        getTotalPagination(){
            return Math.ceil(this.size/20) ;
        }
    },
    methods:{
        nextPage(){
           
           if(this.actualPage<55){
                this.actualPage=this.actualPage+1
                this.sumarPagination()
                this.$emit("goToPage",this.actualPage)
                this.removeFocus()
                this.setFocusById(this.actualPage+1)
           }else if(this.actualPage==56){
               this.classNextButton="page-item disabled"
           }
            this.setAccesibilityNextPrev()
        },
         prevPage(){
                if(this.actualPage>0){
                    this.restarPagination()
                    this.removeFocus()
                    this.setFocusById(this.actualPage)
                    this.actualPage=this.actualPage-1;
                    this.$emit("goToPage",this.actualPage)
                }else if(this.actualPage==0){
                    this.classPrevButton=this.classPrevButton+" disabled"
                    this.$emit("goHome")
                }
                 this.setAccesibilityNextPrev()    
        },
        pintar(event){
            const item=event.target.text
            this.refreshPages(item)
            if(item==1){
                 this.$emit("goHome")
            }else{
                 this.$emit("goToPage",item-1)
            }
            this.actualPage=item-1;
            this.setAccesibilityNextPrev()
            this.manageFocus(event)
        },
        refreshPages(item){
            if(this.pages[2]>2 && this.pages[1]!=item ){
                if(this.pages[0]==item){
                    this.restarPagination()
                }else{
                    this.sumarPagination()
                }    
            }
        },
        sumarPagination(){
            if(this.pages[2]!=56){
                 this.pages=this.pages.map(e=>e+1)
            }
        },
        restarPagination(){
            if(this.pages[0]!=1){
                this.pages=this.pages.map(e=>e-1) 
            }
        },
        setAccesibilityNextPrev(){
            if(this.actualPage==0){
                this.classPrevButton=this.classPrevButton+" disabled"
            }else if(this.actualPage==56){
                 this.classNextButton=this.classNextButton+" disabled"
            }else  if(this.actualPage>0 && this.actualPage<56){
                 this.classNextButton="page-item"
                 this.classPrevButton="page-item"
            }
        },
        manageFocus(item){
            const focusItem=" text-light bg-success"
            this.removeFocus()
            item.target.classList+=focusItem
        },
        setFocusById(id){
            const item=document.getElementById(id)
            item.classList+=" text-light bg-success"
        },
        removeFocus(){
            const listItems=document.querySelectorAll(".items")
            if(listItems.length>0){
                 listItems.forEach(e=>{
                    e.classList.remove('bg-success')
                    e.classList.remove('text-light')
                })
            }
               
        }
    }
}
</script>