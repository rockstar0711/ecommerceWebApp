<template>
    <v-container>
        <v-row class="bg-white">
            <v-col cols="12" class="bg-white-carusel-dot">
                <carousel class="" :nav="false" :items="1" :margin="0" :loop="false"  :autoplay="true" :autoplaySpeed="1500">
                    <v-img :height="$isMobile() ? '250' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in bannerImageList" :key="item.id" alt="carousel" class="welcome-banner-carousel-img rounded-lg"  />
                </carousel>
            </v-col>
        </v-row>
        <v-row class="justify-center">
            <v-col class="text-center">
                <p class="mb-0 font-weight-bold" style="font-size: 30px; ">如已學能, 有早課際以</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <carousel-3d>                
                    <slide :index="0">
                        Slide 1 Content
                    </slide>
                    <slide :index="1">
                        Slide 2 Content
                    </slide>
                    <slide :index="2">
                        Slide 2 Content
                    </slide>
                    <slide :index="3">
                        Slide 2 Content
                    </slide>
                </carousel-3d>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import carousel from 'v-owl-carousel';
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    layout: 'basic',

    components:{
        carousel,
        Carousel3d,
        Slide
    },

    metaInfo () {
        return { title: "Introduce" }
    },  

    data: () => ({
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
            {
                path: '/asset/img/welcome/room4.jpeg',
                id: 4,
            },
        ],
    })
}
</script>

<style>

</style>