<template>
    <v-container>
        <v-row class="bg-white">
            <v-col cols="12" class="bg-white-carusel-dot">
                <carousel class="" :nav="false" :items="1" :margin="0" :loop="false"  :autoplay="true" :autoplaySpeed="1500">
                    <v-img :height="$isMobile() ? '250' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in bannerImageList" :key="item.id" alt="carousel" class="welcome-banner-carousel-img rounded-lg"  />
                </carousel>
            </v-col>
        </v-row>
        <v-row class="justify-center mt-10">
            <v-col class="text-center">
                <p class="mb-0 font-weight-bold" style="font-size: 30px; ">如已學能, 有早課際以</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-0">
                <carousel-3d :width="250" :height="270" :border="0" :startIndex="2" :on-main-slide-click="navToDetail">                
                    <slide v-for="item in bannerImageList" :key="item.id" :index="item.id">
                        <v-img height="270" :src="`${baseUrl}${item.path}`"  alt="carousel" class="welcome-banner-carousel-img rounded-lg" >
                            <div class="w-100 h-100 d-flex align-center justify-center">
                                <div class="text-center">
                                    <p class="mb-0 font-weight-bold" :class="item.isBlack ? 'font-color-black' : 'font-color-white'" style="font-size: 14px;">SPACE</p>
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
        <Fab style="position: fixed; bottom: 100px; right: 12px" />
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
        return { title: "Introduce" }
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
    }),

    methods:{
        navToDetail(){
            this.$router.push({name: 'detail'});
        }
    }
}
</script>

<style>

</style>