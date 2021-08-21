<template>
    <v-container class="mb-16">
        <v-row class="bg-white">
            <v-col cols="12" class="pa-0">
                <carousel class="" :nav="false" :items="1" :margin="0" :loop="false"  :autoplay="true" :autoplaySpeed="1500">
                    <v-img :height="$isMobile() ? '200' : '500'" :src="`${baseUrl}${item.path}`" v-for="item in bannerImageList" :key="item.id" alt="carousel" class="welcome-banner-carousel-img"  />
                </carousel>
            </v-col>
        </v-row>
        <v-row class="mt-8">
            <v-col cols="8">
                <p class="mb-0 font-weight-bold" style="font-size: 30px; line-height: 30px;">Full Stack Engineer</p>
            </v-col>
            <v-col cols="4" class="d-flex align-start px-0">
                <div class="detail-title-badge">
                    <div>
                        <p class="mb-0 pr-2" style="font-size: 30px">2000</p>
                    </div>
                    <div class="text-center">
                        <p class="mb-0" style="font-size: 12px">~2530</p>
                        <p class="mb-0" style="font-size: 12px">元/月</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0 d-flex justify-space-between">
                <div class="d-flex align-center">
                    <v-chip outlined small color="#B7B7B7" class="cus-detail-top-chip mr-2">Shenyang</v-chip>
                </div>
                <v-chip outlined small color="#B7B7B7" class="cus-detail-top-chip">
                    <v-icon> mdi-account </v-icon> 25
                </v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">BENIFITES</p>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-abacus</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">Fitness</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-airballoon-outline</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">Scenery</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-airplane-landing</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">Travel</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-blender</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">Coffe</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-camera-iris</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">Photo</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-clover</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">Lucky</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">DESCRIPTION</p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #999999;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quas? Nemo nostrum ad repellat ratione sunt quas qui odio fugit commodi! Quasi aperiam fugit aliquid itaque voluptatum? Porro distinctio culpa modi perferendis! Saepe, eius alias aperiam animi labore et quam necessitatibus, dolores illo voluptates molestias sit mollitia nisi doloribus iure.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pa-0 position-relative">
                <carousel class="" :nav="false" :items="1" :margin="0" :loop="false"  :autoplay="false" >
                    <v-img height="300" :src="`${baseUrl}${item.path}`" v-for="item in baidumapImageList" :key="item.id" alt="carousel" class="welcome-banner-carousel-img"  />
                </carousel>
                <div class="position-absolute detail-map-right-corner elevation-10">
                    <div class="text-center">
                        <v-icon size="30" color="white">mdi-map-marker-outline</v-icon>
                        <p class="mb-0 font-color-white" style="font-size: 10px;">location</p>
                    </div>
                </div>
                <div class="position-absolute detail-map-left-corner">
                    <p class="mb-0" style="font-size: 15px;">remote</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">HISTORY</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <p class="mb-0" style="font-size: 15px; color: #999999;">
                    <read-more more-str="read more" link="#" less-str="read less" :max-chars="250" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt a unde blanditiis sit sapiente porro beatae eius facilis, quam earum deleniti perspiciatis ipsa dolorem ratione reiciendis voluptatibus alias debitis totam autem culpa molestias. Laboriosam at praesentium ab amet minima illum, eos quis natus aperiam quibusdam eveniet voluptatem, eius non deleniti saepe unde. Eos impedit recusandae, voluptatum natus accusamus dolorum nesciunt nemo labore adipisci iure. Temporibus animi iure blanditiis unde ipsum distinctio, quis similique perferendis exercitationem quas sed iusto dignissimos maiores magni quos laboriosam, voluptatem inventore! Minima rem iure eos corporis! Quas hic quae illo vitae assumenda delectus. Quos, delectus! Tempore aperiam aliquid in excepturi! Quisquam tempore optio libero minima quos beatae qui reiciendis aperiam error, amet fugit maxime laudantium dolorum delectus! Provident, vel repellat aperiam sunt facere optio veniam sint tenetur dolore maiores aliquam sapiente minus inventore, explicabo odit cupiditate dolores, recusandae eveniet doloribus in natus exercitationem dicta impedit. Asperiores officiis molestias eaque, suscipit eius blanditiis, necessitatibus fugit porro facere ipsam doloribus ad quaerat, veritatis aut nulla sed. Alias tempora, consequatur fugiat ullam voluptates, quibusdam autem ad reprehenderit magnam debitis in, reiciendis praesentium ipsum iure quasi illo tempore error eveniet aperiam culpa vitae magni eius corrupti saepe? Ducimus, maxime aliquid!" ></read-more>
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">CULTURE</p>
            </v-col>
            <v-col cols="12" class="d-flex horizontal-scroll">
                <div class="mr-3 position-relative" v-for="(item, index) in bannerImageList" :key="index" >
                    <v-img height="200" width="250" :src="`${baseUrl}${item.path}`" class="welcome-banner-carousel-img " />
                </div>
            </v-col>
        </v-row>
        <v-row class="detail-fixed-bottom" @click="navToApply">
            <p class="mb-0" style="font-size: 18px; color: #fff">APPLY NOW</p>
        </v-row>
    </v-container>
</template>

<script>
import carousel from 'v-owl-carousel';

export default {
    layout: 'basic',

    components:{
        carousel,
    },

    metaInfo () {
        return { title: "Detail" }
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
            {
                path: '/asset/img/welcome/room5.jpeg',
                id: 5,
            },
            {
                path: '/asset/img/welcome/room6.jpeg',
                id: 6,
            },
        ],
        baidumapImageList: [
            {
                path: '/asset/img/welcome/baidumap1.png',
                id: 1,
            },
            {
                path: '/asset/img/welcome/baidumap2.png',
                id: 2,
            },
            
        ],
    }),

    methods:{
        navToApply(){
            this.$router.push({name: "apply"})
        }
    }
}
</script>

<style>

</style>