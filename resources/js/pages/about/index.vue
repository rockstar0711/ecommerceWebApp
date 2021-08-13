<template>
    <v-container>
        <v-row>
            <v-col cols="12" >
                <carousel class="" :nav="false" :items="1" :margin="0" :loop="false"  :autoplay="false" >
                    <v-img :height="$isMobile() ? '300' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in bannerImageList" :key="item.id" alt="carousel" class="welcome-banner-carousel-img rounded-lg"  />
                </carousel>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold" style="font-size: 25px; ">About Us</p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0 text"> Welcome to [app name], </p>
                <p class="mb-0"> your number one source for all things [product, ie: shoes, bags, dog treats]. We're dedicated to giving you the very best of [product], with a focus on [three characteristics, ie: dependability, customer service and uniqueness.] </p>
                <p class="mb-0"> We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                <p class="mb-0"> Sincerely,</p>
                <p class="mb-0"> Name, CEO, Founder of small.work</p>
            </v-col>
        </v-row>
        <v-row class="justify-center mt-10">
            <v-col class="text-center">
                <p class="mb-0 font-weight-bold" style="font-size: 25px; ">Top Clients</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-0">
                <carousel-3d :width="250" :height="270" :border="0" :startIndex="2" >                
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
        <v-row class="about-tab-container">
            <v-col @click="toggleTab(1)" cols="6" class="text-center pb-0 pr-0">
                <p class="mb-0 pa-3" :class="index == 1 ? 'about-tab-active' : 'about-tab' "> Educators </p>
            </v-col>
            <v-col cols="6" class="text-center pb-0 pl-0">
                <p @click="toggleTab(2)" class="mb-0 pa-3" :class="index == 1 ? 'about-tab' : 'about-tab-active' "> Institutions </p>
            </v-col>
        </v-row>
        <v-row v-if="index == 1">
            <v-col cols="12">
                <p class="mb-0 py-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam itaque reiciendis accusantium odit molestias pariatur! Expedita, eveniet accusantium, libero dicta optio facilis vel hic praesentium tempore, sunt deleniti dolor nisi maiores rem nihil provident suscipit nobis enim deserunt aliquam culpa soluta? Nam ratione assumenda doloribus pariatur recusandae doloremque eligendi!
                </p>
            </v-col>
            <v-col cols="12" v-for="(item, index) in firstData" :key="index">
                <v-img height="300" :src="`${baseUrl}${item.path}`" class="welcome-banner-carousel-img rounded-lg"  >
                    <div class="w-100 h-100 d-flex align-center justify-center">
                        <div class="text-center">
                            <p class="mb-0 font-weight-bold font-color-white" style="font-size: 40px;">{{item.title}}</p>
                        </div>
                    </div>
                </v-img>
                <p class="mb-0 py-10">
                    {{item.content}}
                </p>
            </v-col>
        </v-row>
        <v-row v-else class="bg-light-brown">
            <v-col cols="12">
                <p class="mb-0 py-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!
                </p>
            </v-col>
            <v-col cols="12" v-for="(item, index) in secondData" :key="index">
                <div v-if="item.title !== null" class="text-center">
                    <p class="mb-0 font-weight-bold font-color-black" style="font-size: 40px;">{{item.title}}</p>
                </div>
                <div v-else>
                    <v-img height="300" :src="`${baseUrl}${item.path}`" class="welcome-banner-carousel-img rounded-lg"  >
                        <div class="w-100 h-100 d-flex align-center justify-center">
                            <div class="text-center">
                                <p class="mb-0 font-weight-bold font-color-white" style="font-size: 40px;">{{item.subtitle}}</p>
                            </div>
                        </div>
                    </v-img>
                    <p class="mb-0 py-10">
                        {{item.content}}
                    </p>
                </div>
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
        Slide,
    },

    metaInfo () {
        return { title: "About" }
    }, 

    data: () => ({
        baseUrl: window.Laravel.base_url,
        index: 1,
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

        firstData: [
            {
                path: '/asset/img/welcome/room1.jpeg',
                title: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                path: '/asset/img/welcome/room2.jpeg',
                title: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                title: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                title: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                path: '/asset/img/welcome/room5.jpeg',
                title: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                path: '/asset/img/welcome/room6.jpeg',
                title: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
        ],
        secondData: [
            {
                path: '/asset/img/welcome/room1.jpeg',
                title: null,
                subtitle: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                title: 'JOBS',
            },
            {
                path: '/asset/img/welcome/room2.jpeg',
                title: null,
                subtitle: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                title: null,
                subtitle: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                title: 'JOBS',
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                title: null,
                subtitle: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                path: '/asset/img/welcome/room5.jpeg',
                title: null,
                subtitle: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
            },
            {
                title: 'JOBS',
            },
            {
                path: '/asset/img/welcome/room6.jpeg',
                title: null,
                subtitle: 'JOBS',
                content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid facilis quisquam. Est blanditiis nam a excepturi accusamus eos architecto, voluptates reprehenderit unde perferendis molestiae. Sapiente molestias expedita error fugit!'
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
        toggleTab(index){
            this.index = index;
        }
    }

}
</script>

<style>

</style>