<template>
  <v-container class="bg-gray">
    <v-row class="bg-white">
      <v-col cols="12" class="bg-white text-center">
        <p class="mb-0 font-weight-bold">業著MeetBest</p>
      </v-col>
      <v-col cols="12" class="pa-0">
        <carousel class="" :nav="false" :items="1" :margin="0" :loop="true"  :autoplay="true" :autoplaySpeed="1500">
          <v-img :height="$isMobile() ? '150' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in bannerImageList" :key="item.id" alt="carousel" class="welcome-banner-carousel-img"  />
        </carousel>
      </v-col>
    </v-row>
    <v-row class="py-5 align-center justify-space-around elevation-5 bg-white">
      <v-btn class="" color="teal" dark >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
      <v-btn class="" outlined color="#009688" >
        合北
      </v-btn>
      <v-btn class="" outlined color="#009688" >
        積轉
      </v-btn>
      <v-btn class="" outlined color="#009688" >
        此健
      </v-btn>
    </v-row>
    <v-container class="ma-0 pa-0 mt-8 bg-gray " style="margin-bottom: 150px!important;">
      <v-row class="" v-for="(item, index) in dataList" :key="index" >
        <v-col cols="12" class="position-relative">
          <carousel class="" :nav="false" :items="1" :margin="0" :loop="true"  :autoplay="false" :autoplaySpeed="1500">
            <v-img :height="$isMobile() ? '250' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in item.imgArr" :key="item.id" alt="carousel" class="welcome-banner-carousel-img"  />
          </carousel>
          <div v-if="item.isSelled == true" class="position-absolute room-img-mark elevation-3">
            <p class="mb-0 room-img-mark-font">每不整外</p> 
          </div>
        </v-col>
        <v-col cols="12">
          <v-row class="align-start">
            <v-col cols="8">
              <div>
                <p class="mb-0" style="font-size: 22px; color:#009688">{{item.category}} - {{item.title}}</p>
              </div>
              <div>
                <v-chip outlined  color="#009688">{{item.location}}</v-chip>
                <v-chip outlined  color="#009688">最多{{item.viewCnt}}人</v-chip>
              </div>
            </v-col>  
            <v-col cols="4" class="d-flex align-center justify-end">
              <div class="text-right">
                <p class="mb-0" style="font-size: 30px; font-weight: bold">{{item.minPrice}}</p>
                <p v-if="item.maxPrice !== null" class="mb-0" style="font-size: 24px; font-weight: bold"> ~ {{item.maxPrice}}</p>
              </div>
              <div class="pl-2">
                <p class="mb-0" style="font-size: 15px; font-weight: bold">元 / 时</p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
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
    baseUrl: window.Laravel.base_url,
    bannerImageList: [
      {
        path: '/asset/img/welcome/room1.jpeg',
        id: 1,
      },
      {
        path: '/asset/img/welcome/room2.jpeg',
        id: 2,
      },
      {
        path: '/asset/img/welcome/room3.jpeg',
        id: 3,
      },
    ],

    dataList: [
      {
        id: 1,
        title: "能有早課際以每",
        category: '小復不',
        viewCnt: 203,
        location: '十在子',
        minPrice: 4000,
        maxPrice: 6000,
        isSelled: true,
        imgArr: [
          {
            path: '/asset/img/welcome/room1.jpeg',
            id: 1,
          },
          {
            path: '/asset/img/welcome/room2.jpeg',
            id: 2,
          },
          {
            path: '/asset/img/welcome/room3.jpeg',
            id: 3,
          },
          {
            path: '/asset/img/welcome/room4.jpeg',
            id: 4,
          },
          {
            path: '/asset/img/welcome/room5.jpeg',
            id: 5,
          },
          {
            path: '/asset/img/welcome/room6.jpeg',
            id: 6,
          },
        ]
      },
      {
        id: 2,
        title: "作程痛",
        category: '學十排事',
        viewCnt: 34,
        location: '子個',
        minPrice: 455,
        maxPrice: 566,
        isSelled: false,
        imgArr: [
          {
            path: '/asset/img/welcome/room2.jpeg',
            id: 2,
          },
          {
            path: '/asset/img/welcome/room3.jpeg',
            id: 3,
          },
          {
            path: '/asset/img/welcome/room4.jpeg',
            id: 4,
          },
          {
            path: '/asset/img/welcome/room5.jpeg',
            id: 5,
          },
          {
            path: '/asset/img/welcome/room6.jpeg',
            id: 6,
          },
          {
            path: '/asset/img/welcome/room1.jpeg',
            id: 1,
          },
        ]
      },
      {
        id: 3,
        title: "臺華於參一",
        category: '小方知手',
        viewCnt: 203,
        location: '覺只',
        minPrice: 2000,
        maxPrice: null,
        isSelled: true,
        imgArr: [
          {
            path: '/asset/img/welcome/room3.jpeg',
            id: 3,
          },
          {
            path: '/asset/img/welcome/room4.jpeg',
            id: 4,
          },
          {
            path: '/asset/img/welcome/room5.jpeg',
            id: 5,
          },
          {
            path: '/asset/img/welcome/room6.jpeg',
            id: 6,
          },
           {
            path: '/asset/img/welcome/room1.jpeg',
            id: 1,
          },
          {
            path: '/asset/img/welcome/room2.jpeg',
            id: 2,
          },
        ]
      },
      {
        id: 4,
        title: "到地學十排事小",
        category: '是價',
        viewCnt: 203,
        location: '作去英',
        minPrice: 500,
        maxPrice: 600,
        isSelled: false,
        imgArr: [
          
          {
            path: '/asset/img/welcome/room4.jpeg',
            id: 4,
          },
          {
            path: '/asset/img/welcome/room5.jpeg',
            id: 5,
          },
          {
            path: '/asset/img/welcome/room6.jpeg',
            id: 6,
          },
          {
            path: '/asset/img/welcome/room1.jpeg',
            id: 1,
          },
          {
            path: '/asset/img/welcome/room2.jpeg',
            id: 2,
          },
          {
            path: '/asset/img/welcome/room3.jpeg',
            id: 3,
          },
        ]
      },
      {
        id: 5,
        title: "而建行業著企",
        category: '出過',
        viewCnt: 203,
        location: '屋運',
        minPrice: 700,
        maxPrice: 800,
        isSelled: true,
        imgArr: [
          
          {
            path: '/asset/img/welcome/room5.jpeg',
            id: 5,
          },
          {
            path: '/asset/img/welcome/room6.jpeg',
            id: 6,
          },
          {
            path: '/asset/img/welcome/room1.jpeg',
            id: 1,
          },
          {
            path: '/asset/img/welcome/room2.jpeg',
            id: 2,
          },
          {
            path: '/asset/img/welcome/room3.jpeg',
            id: 3,
          },
          {
            path: '/asset/img/welcome/room4.jpeg',
            id: 4,
          },
        ]
      },
      {
        id: 6,
        title: "平眼新的看女這",
        category: '權屋運師',
        viewCnt: 203,
        location: '像著目',
        minPrice: 1000,
        maxPrice: null,
        isSelled: false,
        imgArr: [
          {
            path: '/asset/img/welcome/room1.jpeg',
            id: 1,
          },
          {
            path: '/asset/img/welcome/room2.jpeg',
            id: 2,
          },
          {
            path: '/asset/img/welcome/room3.jpeg',
            id: 3,
          },
          {
            path: '/asset/img/welcome/room4.jpeg',
            id: 4,
          },
          {
            path: '/asset/img/welcome/room5.jpeg',
            id: 5,
          },
          {
            path: '/asset/img/welcome/room6.jpeg',
            id: 6,
          },
        ]
      },
    ]
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
