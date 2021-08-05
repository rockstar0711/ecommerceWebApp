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
                <p class="mb-0 font-weight-bold" style="font-size: 30px; ">如已學能, 有早課際以</p>
            </v-col>
            <v-col cols="4" class="d-flex align-start px-0">
                <div class="detail-title-badge">
                    <div>
                        <p class="mb-0 pr-2" style="font-size: 30px">1500</p>
                    </div>
                    <div class="text-center">
                        <p class="mb-0" style="font-size: 12px">~1500</p>
                        <p class="mb-0" style="font-size: 12px">元/时</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 18px">影不行於男了</p>
            </v-col>
            <v-col cols="12" class="pt-0 d-flex justify-space-between">
                <div class="d-flex align-center">
                    <v-chip outlined small color="#B7B7B7" class="cus-detail-top-chip mr-2">男了</v-chip>
                    <v-chip outlined small color="#B7B7B7" class="cus-detail-top-chip mr-2">男了</v-chip>
                    <v-chip outlined small color="#B7B7B7" class="cus-detail-top-chip mr-2">男了</v-chip>
                    <v-chip outlined small color="#B7B7B7" class="cus-detail-top-chip mr-2">男了</v-chip>
                </div>
                <v-chip outlined small color="#B7B7B7" class="cus-detail-top-chip">最多120人</v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">合北就但</p>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-abacus</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">成名是喜</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-airballoon-outline</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">成名是喜</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-airplane-landing</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">成名是喜</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-blender</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">成名是喜</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-camera-iris</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">成名是喜</p>
                </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
                <div class="text-center">
                    <v-icon size="25">mdi-clover</v-icon>
                    <p class="mb-0" style="font-size: 12px; color: #B7B7B7;">成名是喜</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">合北就但</p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #999999;">
                    風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。
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
                        <p class="mb-0 font-color-white" style="font-size: 10px;">個的管之</p>
                    </div>
                </div>
                <div class="position-absolute detail-map-left-corner">
                    <p class="mb-0" style="font-size: 15px;">去服有積</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">合北就但</p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #999999;">
                    <read-more more-str="全文" text="風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。" link="#" less-str="收起" :max-chars="250"></read-more>
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">合北就但</p>
            </v-col>
            <v-col cols="12" class="d-flex horizontal-scroll">
                <div class="mr-3 position-relative" v-for="(item, index) in bannerImageList" :key="index" >
                    <v-img height="200" width="250" :src="`${baseUrl}${item.path}`" class="welcome-banner-carousel-img " />
                </div>
            </v-col>
            <v-col cols="12" class="">
                <v-chip class="mr-2 mb-2" label small > 最多 </v-chip>
                <v-chip class="mr-2 mb-2" label small > 北就但 </v-chip>
                <v-chip class="mr-2 mb-2" label small > trust </v-chip>
                <v-chip class="mr-2 mb-2" label small > something </v-chip>
                <v-chip class="mr-2 mb-2" label small > lorem </v-chip>
                <v-chip class="mr-2 mb-2" label small > 合北就但 </v-chip>
                <v-chip class="mr-2 mb-2" label small > 北就但 </v-chip>
                <v-chip class="mr-2 mb-2" label small > 最多 </v-chip>
                <v-chip class="mr-2 mb-2" label small > lorem </v-chip>
                <v-chip class="mr-2 mb-2" label small > 最多 </v-chip>
            </v-col>
        </v-row>
        <v-row class="detail-fixed-bottom">
            <p class="mb-0" style="font-size: 18px; color: #fff">合北就但</p>
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
        
    }
}
</script>

<style>

</style>