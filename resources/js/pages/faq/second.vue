<template>
    <v-container style="margin-bottom: 120px;">
        <Faqheader />
        <v-row>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #000;">
                    風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-0">
                <carousel-3d :width="250" :height="270" :border="0" :startIndex="2" :count="6">                
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

    }
}
</script>

<style>

</style>