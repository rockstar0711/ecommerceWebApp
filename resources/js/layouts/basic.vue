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
                if(val.name == 'list' || val.name == 'detail' || val.name == 'about'){
                    this.isShownFooter = false
                }
                else {
                    this.isShownFooter = true
                }
            },
            deep: true
        }
    },

    created(){
        if(this.currentPath.name == 'list' || this.currentPath.name == 'detail' || this.currentPath.name == 'about'){
            this.isShownFooter = false
        }
        else {
            this.isShownFooter = true
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
