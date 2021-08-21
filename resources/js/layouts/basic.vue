<template>
  <v-app>
    <Header v-if="isShownHeader"/>
    <v-main>
      <child />
    </v-main>
    <MoBottomNav v-if="$isMobile()&&isShownFooter" />
  </v-app>
</template>

<script>
import MoBottomNav from '~/components/MoBottomNav'
import Header from '~/components/Header'
export default {
  name: 'BasicLayout',

  components: {
    MoBottomNav,
    Header
  },

   computed:{
        currentPath(){
            return this.$route
        },
    },

    watch:{
        currentPath:{
            handler(val){
              console.log(val)
                if(
                  val.name == 'list' || 
                  val.name == 'detail' || 
                  val.name == 'about' ||
                  val.name == 'apply' ||
                  val.path.includes('faq')
                ){
                    this.isShownFooter = false
                }
                else {
                    this.isShownFooter = true
                }
                if(
                  val.name == 'home' ||
                  val.name == 'welcome' ||
                  val.name == 'search' ||
                  val.name == 'about' ||
                  val.name == 'filter'
                ){
                    this.isShownHeader = false
                }
                else {
                    this.isShownHeader = true
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
            this.isShownFooter = false
        }
        else {
            this.isShownFooter = true
        }
        if(
          this.currentPath.name == 'home' ||
          this.currentPath.name == 'welcome' ||
          this.currentPath.name == 'search' ||
          this.currentPath.name == 'about' ||
          this.currentPath.name == 'filter'
        ){
            this.isShownHeader = false
        }
        else {
            this.isShownHeader = true
        }
    },

    data: () => ({
        isShownHeader: true,
        isShownFooter: true,
    }),
}
</script>

<style lang="scss">
.basic-layout {
  color: #636b6f;
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
