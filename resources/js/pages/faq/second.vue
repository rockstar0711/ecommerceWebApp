<template>
    <v-container style="margin-bottom: 120px;">
        <Faqheader />
        <v-row>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #000;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos atque beatae placeat, minus voluptates quis aliquid molestias delectus animi et ipsum consequuntur? Corrupti distinctio similique voluptatibus quaerat unde incidunt voluptatum quam iste aperiam officiis iure omnis inventore eum vitae minima delectus eius dicta, veniam molestias deserunt? Odio, reiciendis at.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-0">
                <carousel-3d :width="250" :height="270" :border="0" :startIndex="2" :count="6">                
                    <slide v-for="item in carouselImageList" :key="item.id" :index="item.id">
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
        <Faqnav :pageNumber="2" />
    </v-container>
</template>

<script>
import Faqnav from '~/components/Faqnav'
import Faqheader from '~/components/Faqheader'
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    components: {
        Faqheader,
        Faqnav,
        Carousel3d,
        Slide,
    },

    data: () => ({
        baseUrl: window.Laravel.base_url,
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

    }
}
</script>

<style>

</style>