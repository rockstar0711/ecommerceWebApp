<template>
  <v-container class="header-container">
      <v-row>
          <v-col cols="12" class="bg-white text-center position-relative">
            <div @click="navToBack" v-if="isShowGoBackBtn" class="header-go-back">
                <div class="">
                    <v-icon color="#000000" size="30">mdi-chevron-left</v-icon>
                </div>
            </div>
            <p class="mb-0 font-weight-bold">合北 Meetbest</p>
            <div class="top-tab-container">
                <div class="top-tab-element-right pr-2">
                    <v-icon color="#000000">mdi-dots-horizontal</v-icon>
                </div>
                <div class="pl-2">
                    <v-icon color="#000000">mdi-record-circle-outline</v-icon>
                </div>
            </div>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    computed:{
        currentPath(){
            return this.$route
        },
    },

    watch:{
        currentPath:{
            handler(val){
                if(
                    val.name == 'list' || 
                    val.name == 'detail' || 
                    val.name == 'about' ||
                    val.path.includes('faq')
                ){
                    this.isShowGoBackBtn = true;
                }
                else {
                    this.isShowGoBackBtn = false;
                }
            },
            deep: true
        }
    },

    created(){
        if(
            this.currentPath.name == 'list' ||
            this.currentPath.name == 'detail' ||
            this.currentPath.name == 'about' ||
            this.currentPath.path.includes('faq')
        ){
            this.isShowGoBackBtn = true;
        }
        else {
            this.isShowGoBackBtn = false;
        }
    },

    data: () => ({
        isShowGoBackBtn: false,
    }),

    methods:{
        navToBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>

</style>