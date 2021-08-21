<template>
  <v-container class="bg-white">
    <v-row class="bg-white">
      <v-col cols="12" class="pa-0 position-relative">
        <v-img :height="$isMobile() ? '246' : '500'" :src="`${baseUrl}/asset/img/new/list_bg_update.jpg`" class="welcome-banner-carousel-img"  />
        <!-- <carousel class="" :nav="false" :items="1" :margin="0" :loop="false" >
          <v-img :height="$isMobile() ? '300' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in bannerImageList" :key="item.id" alt="carousel" class="welcome-banner-carousel-img"  />
        </carousel> -->
        <!-- <div class="welcome-banner-tag">
          <p class="mb-0">teach Meet</p>
        </div>
        <div class="welcome-banner-swipe">
          <v-icon color="white" left> mdi-arrow-left</v-icon>
          <p class="mb-0"> Swipe </p>
        </div> -->
      </v-col>
    </v-row>
    <v-row class="py-5 align-center justify-space-around menu-bar-shadow bg-white">
      <v-btn class="cus-menu-icon-btn px-0" color="#B29A6E" dark @click="navToFilter">
        <v-icon>mdi-tune-variant</v-icon>
      </v-btn>
      <div class="filter-btn" @click="toggleInstitutionPicker">
        <img :src="`${baseUrl}/asset/img/new/buildingIcon.png`" style="width: 24px; height: 24px"/>
      </div>
      <div class="filter-btn" @click="toggleLocationPicker">
        <v-icon>mdi-map-marker-radius-outline</v-icon> 
      </div>
      <div class="filter-btn"  @click="toggleTimeagoPicker">
        <v-icon>mdi-history</v-icon> 
      </div>
    </v-row>
    <v-container class="ma-0 pa-0 mt-5" style="margin-bottom: 150px!important;">
      <v-row class="mt-8" v-for="(item, index) in dataList" :key="index" >
        <v-col cols="12" class="position-relative" @click="navToDetail">
          <carousel class="" :nav="false" :items="1" :margin="0" :loop="false"  :autoplay="false" :autoplaySpeed="1500">
            <v-img :height="$isMobile() ? '250' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in item.imgArr" :key="item.id" alt="carousel" class="welcome-banner-carousel-img rounded-lg"  />
          </carousel>
          <div v-if="item.isSelled == true" class="position-absolute room-img-mark elevation-5 pa-3">
            <p class="mb-0 font-weight-bold font-color-white">HOT</p>
          </div>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-row class="align-start">
            <v-col cols="8">
              <div>
                <p class="mb-0" style="font-size: 20px; color:#B29A6E">{{item.title}}</p>
              </div>
              <div>
                <v-chip outlined small color="#B29A6E" class="cus-chip-border-radius">{{item.location}}</v-chip>
                <v-chip outlined small color="#B29A6E" class="cus-chip-border-radius">{{item.viewCnt}} people viewed</v-chip>
              </div>
            </v-col>  
            <v-col cols="4" class="d-flex align-center justify-end">
              <div class="text-right">
                <p class="mb-0" style="font-size: 30px; font-weight: bold; color: #B29A6E;">{{item.minPrice}}</p>
                <p v-if="item.maxPrice !== null" class="mb-0" style="font-size: 19px; font-weight: bold; color: #B29A6E;"> ~ {{item.maxPrice}}</p>
              </div>
              <Unit />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <FloatingBack class="position-fixed" style="top: 12px; left: 12px; z-index: 4" />
    <LocationPicker 
      :locationPicker="locationPicker"
      @onCancelLocationPicker="onCancelLocationPicker"
      @onOkLocationPicker="onOkLocationPicker"
    />
    <InstitutionPicker 
      :institutionPicker="institutionPicker"
      @onCancelInstitutionPicker="onCancelInstitutionPicker"
      @onOkInstitutionPicker="onOkInstitutionPicker"
    />
    <TimeagoPicker 
      :timeagoPicker="timeagoPicker"
      @onCancelTimeagoPicker="onCancelTimeagoPicker"
      @onOkTimeagoPicker="onOkTimeagoPicker"
    />
  </v-container>  
</template>

<script>
import { mapGetters } from 'vuex'
import carousel from 'v-owl-carousel';
import Unit from '~/components/Unit'
import LocationPicker from '~/components/LocationPicker'
import InstitutionPicker from '~/components/InstitutionPicker'
import TimeagoPicker from '~/components/TimeagoPicker'
import FloatingBack from '~/components/FloatingBack'

export default {
  layout: 'basic',

  components:{
    carousel,
    Unit,
    LocationPicker,
    InstitutionPicker,
    TimeagoPicker,
    FloatingBack
  },

  metaInfo () {
    return { title: "Discover" }
  },

  data: () => ({
    title: window.config.appName,
    baseUrl: window.Laravel.base_url,

    locationPicker: false,
    institutionPicker: false,
    timeagoPicker: false,
    location: null,
    institution: null,
    timeago: null,

    bannerImageList: [
      {
        path: '/asset/img/new/list_bg_update.jpg',
        id: 1,
      },
      {
        path: '/asset/img/welcome/room1.jpeg',
        id: 2,
      },
      {
        path: '/asset/img/welcome/room2.jpeg',
        id: 3,
      },
      {
        path: '/asset/img/welcome/room3.jpeg',
        id: 4,
      },
    ],

    dataList: [
      {
        id: 1,
        title: "Full Stack Dev Role",
        category: 'remote',
        viewCnt: 203,
        location: 'shenyang',
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
        title: "Frontend Dev Role",
        category: 'local',
        viewCnt: 34,
        location: 'shenyang',
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
        title: "Backend Dev Role",
        category: 'home',
        viewCnt: 21,
        location: 'shenyang',
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
        title: "Devops Dev Role",
        category: 'remote',
        viewCnt: 90,
        location: 'shenyang',
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
        title: "Moible Dev Role",
        category: 'local',
        viewCnt: 26,
        location: 'shenyang',
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
        title: "Marketing manager Role",
        category: 'local',
        viewCnt: 87,
        location: 'shenyang',
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
  }),

  methods: {
    navToDetail(){
      this.$router.push({name: 'detail'})
    },

    navToFilter(){
      this.$router.push({name: 'filter'})
    },

    toggleLocationPicker(){
      this.locationPicker = !this.locationPicker;
    },

    toggleInstitutionPicker(){
      this.institutionPicker = !this.institutionPicker;
    },

    toggleTimeagoPicker(){
      this.timeagoPicker = !this.timeagoPicker;
    },

    onCancelLocationPicker(){
      this.locationPicker = false;
    },

    onOkLocationPicker(location){
      this.location = location;
      this.onCancelLocationPicker();
    },

    onCancelInstitutionPicker(){
      this.institutionPicker = false;
    },

    onOkInstitutionPicker(institution){
      this.institution = institution
      this.onCancelInstitutionPicker();
    },

    onCancelTimeagoPicker(){
      this.timeagoPicker = false;
    },

    onOkTimeagoPicker(timeago){
      this.timeago = timeago;
      this.onCancelTimeagoPicker();
    },
  }
}
</script>
