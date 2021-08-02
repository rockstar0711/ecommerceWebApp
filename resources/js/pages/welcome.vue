<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="bg-white text-center">
        <p>samme</p>
      </v-col>
      <v-col cols="12">
        <carousel class="" :nav="false" :items="1" :margin="10" :loop="true"  :autoplay="true" :autoplaySpeed="1500">
          <img :src="`${baseUrl}${item.path}`" v-for="item in bannerImageList" :key="item.id" alt="carousel" class="welcome-banner-carousel-img"  />
        </carousel>
      </v-col>
    </v-row>
  </v-container>  
</template>

<script>
import { mapGetters } from 'vuex'
import carousel from 'v-owl-carousel';

export default {
  layout: 'basic',

  components:{
    carousel,
  },

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName,
    bannerImageList: [
      {
        path: '/asset/img/some.jpeg',
        id: 1,
      },
      {
        path: '/asset/img/some.jpeg',
        id: 2,
      },
      {
        path: '/asset/img/some.jpeg',
        id: 3,
      },
    ]
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}

.title {
  font-size: 85px;
}
</style>
