<template>
    <div class="faq-nav-container">
        <div @click="navToBack" v-if="pageNumber !== 1" class="faq-nav-left">
            <v-icon color="#B29A6E" size="30">mdi-chevron-left</v-icon>
        </div>
        <div class="faq-nav-center">
            <p class="mb-0 pr-2" style="font-size: 35px; color: #B29A6E; font-weight: bold">{{pageNumber}}</p>
            <p class="mb-0" style="font-size: 18px; color: #333333;">/ 3</p>
        </div>
        <div @click="navToNext" v-if="pageNumber !== 3" class="faq-nav-right">
            <v-icon color="#B29A6E" size="30">mdi-chevron-right</v-icon>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        pageNumber:{
            type: Number,
            required: true,
        }
    },

    methods:{
        navToBack(){
            if(this.pageNumber == 2){
                this.$router.push({name: 'faq.first'});
            }
            else if(this.pageNumber == 3){
                this.$router.push({name: 'faq.second'});
            }
        },
        navToNext(){
            if(this.pageNumber == 1){
                this.$router.push({name: 'faq.second'});
            }
            else if(this.pageNumber == 2){
                this.$router.push({name: 'faq.third'});
            }
        },
    }
}
</script>

<style>

</style>