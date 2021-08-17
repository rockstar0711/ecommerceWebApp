<template>
  <v-container class="header-container" :class="isBlackBg == true ? 'bg-black' : 'bg-white'">
      <v-row>
          <v-col cols="12" class="text-center position-relative">
            <div @click="navToBack" v-if="isShowGoBackBtn" class="header-go-back">
                <div class="">
                    <v-icon :color="isBlackBg ? '#fff' :'#000000'" size="23">mdi-close</v-icon>
                </div>
            </div>
            <p class="mb-0 font-weight-bold" :class="isBlackBg == true ? 'font-color-white' : 'font-color-black'">{{title}}</p>
            <div class="top-tab-container">
                <v-icon :color="isBlackBg ? '#fff' :'#000000'">mdi-dots-horizontal</v-icon>
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
                    val.name == 'apply' ||
                    val.path.includes('faq')
                ){
                    this.isShowGoBackBtn = true;
                }
                else {
                    this.isShowGoBackBtn = false;
                }
                if (val.name == 'about'){
                    this.title = 'About';
                    this.isBlackBg = true
                }
                else{
                    this.title = 'Teach Meet';
                    this.isBlackBg = false
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
            this.currentPath.name == 'apply' ||
            this.currentPath.path.includes('faq')
        ){
            this.isShowGoBackBtn = true;
        }
        else {
            this.isShowGoBackBtn = false;
        }
        if (this.currentPath.name == 'about'){
            this.title = 'About';
            this.isBlackBg = true
        }
        else{
            this.title = 'Teach Meet';
            this.isBlackBg = false
        }
    },

    data: () => ({
        isShowGoBackBtn: false,
        title: 'Teach Meet',
        isBlackBg: false
    }),

    methods:{
        navToBack(){
            if(this.currentPath.name == 'faq.third'){
                this.$router.push({name: 'faq.second'})
            }
            else if(this.currentPath.name == 'faq.second'){
                this.$router.push({name: 'faq.first'})
            }
            else if(this.currentPath.name == 'faq.first'){
                this.$router.push({name: 'home'})
            }
            else{
                this.$router.go(-1);
            }
        }
    }
}
</script>

<style>

</style>