<template>
    <v-container>
        <!-- <v-row class="bg-white">
            <v-col cols="12" class="bg-white-carusel-dot">
                <carousel class="" :nav="false" :items="1" :margin="0" :loop="false"  :autoplay="false" >
                    <v-img :height="$isMobile() ? '250' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in bannerImageList" :key="item.id" @click="navToRefer(item.id)" alt="carousel" class="welcome-banner-carousel-img rounded-lg"  />
                </carousel>
            </v-col>
        </v-row>
        <v-row class="justify-center mt-10">
            <v-col class="text-center">
                <p class="mb-0 font-weight-bold" style="font-size: 30px; ">Top Clients</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-0">
                <carousel-3d :width="250" :height="270" :border="0" :startIndex="2" :on-main-slide-click="navToDetail">                
                    <slide v-for="item in carouselImageList" :key="item.id" :index="item.id">
                        <v-img height="270" :src="`${baseUrl}${item.path}`"  alt="carousel" class="welcome-banner-carousel-img rounded-lg" >
                            <div class="w-100 h-100 d-flex align-center justify-center">
                                <div class="text-center">
                                    <p class="mb-0 font-weight-bold" :class="item.isBlack ? 'font-color-black' : 'font-color-white'" style="font-size: 14px;">CLIENT</p>
                                    <p class="mb-0 font-weight-bold" :class="item.isBlack ? 'font-color-black' : 'font-color-white'" style="font-size: 27px;">{{item.title}}</p>
                                    <div style="height: 145px"></div>
                                    <p class="mb-0 font-weight-bold" :class="item.isBlack ? 'font-color-black' : 'font-color-white'" style="font-size: 15px;">{{item.content}}</p>
                                </div>
                            </div>
                        </v-img>
                    </slide>
                </carousel-3d>
            </v-col>
        </v-row>
        <Fab style="position: fixed; bottom: 100px; right: 12px" /> -->

        <v-row>
            <v-col cols="12" class="pa-0 position-relative">
                <v-img :src="`${baseUrl}/asset/img/new/home_bg_update.jpg`" class="home-img"  gradient="to top, rgba(0,0,0,.5), rgba(0,0,0,.5)" >
                    <v-row class="d-flex align-center justify-space-between ma-0 py-5 px-3 pt-7">
                        <div class="logo-img">
                            <v-img :src="`${baseUrl}/asset/img/new/logo.png`" height="60" width="60" />
                        </div>
                        <v-btn @click="navToApply" depressed color="#6C5533" dark class="lowercase-btn rounded-lg"> Post job </v-btn>
                    </v-row>
                    <div class="position-absolute home-content">
                        <img :src="`${baseUrl}/asset/img/new/full_logo.png`" alt="" class="full-logo-img">
                        <v-btn outlined color="white" class="rounded-lg lowercase-btn mt-10 px-40px" @click="navToAbout">
                            Welcome
                        </v-btn>
                    </div>
                    <!-- <div class="position-absolute home-speaker"> 
                        <v-icon color="white" size="30">
                            mdi-volume-high
                        </v-icon>
                    </div> -->
                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import carousel from 'v-owl-carousel';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Fab from '~/components/Fab'

export default {
    layout: 'basic',

    components:{
        carousel,
        Carousel3d,
        Slide,
        Fab
    },

    metaInfo () {
        return { title: "Home" }
    },  

    data: () => ({
        baseUrl: window.Laravel.base_url,
        bannerImageList: [
            {
                path: '/asset/img/welcome/room2.jpeg',
                id: 1,
                title: '在動',
                content: '才黑而建行業著',
                isBlack: false,
            },
            {
                path: '/asset/img/welcome/room1.jpeg',
                id: 2,
                title: '在動',
                content: '才黑而建行業著',
                isBlack: true,
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                id: 3,
                title: '在動',
                content: '才黑而建行業著',
                isBlack: false,
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                id: 4,
                title: '在動',
                content: '才黑而建行業著',
                isBlack: false,
            },
        ],

        carouselImageList: [
            {
                path: '/asset/img/clients/client1.jpg',
                id: 1,
                title: 'Nikolay',
                content: 'Prety.Ltd',
                isBlack: false,
            },
            {
                path: '/asset/img/clients/client2.jpg',
                id: 2,
                title: 'DanYang',
                content: 'Pure.Ltd',
                isBlack: true,
            },
            {
                path: '/asset/img/clients/client6.png',
                id: 6,
                title: 'Williom',
                content: 'Fun.Ltd',
                isBlack: false,
            },
            {
                path: '/asset/img/clients/client3.jpg',
                id: 3,
                title: 'Wang',
                content: 'Chooe.Ltd',
                isBlack: false,
            },
            {
                path: '/asset/img/clients/client4.jpg',
                id: 4,
                title: 'GuoLing',
                content: 'Wetran.Ltd',
                isBlack: false,
            },
            {
                path: '/asset/img/clients/client5.jpg',
                id: 5,
                title: 'Dawei',
                content: 'Reggle.Ltd',
                isBlack: false,
            },
            
        ]
    }),

    methods:{
        navToDetail(){
            this.$router.push({name: 'detail'});
        },

        navToRefer(id){
            console.log(id)
            if(id > 2){
                return
            }
            else{
                if(id == 1){
                    console.log("go faq!")
                    this.$router.push({name: 'faq.first'});
                }
                else if(id == 2){
                    this.$router.push({name: 'about'});
                }
            }
        },

        navToApply(){
            this.$router.push({name:'apply'})
        },

        navToAbout(){
            this.$router.push({name: 'about'})
        }
    }
}
</script>

<style>

</style>