<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="pa-0">
                <v-img height="300" :src="`${baseUrl}/asset/img/welcome/room1.jpeg`" class="welcome-banner-carousel-img"  >
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center" >
                            <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            <v-col cols="12">
                <p class="mb-0">
                    風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。
                </p>
            </v-col>
        </v-row>
        <v-row class="about-tab-container">
            <v-col @click="toggleTab(1)" cols="6" class="text-center pb-0 pr-0">
                <p class="mb-0 pa-3" :class="index == 1 ? 'about-tab-active' : 'about-tab' "> 神細去服 </p>
            </v-col>
            <v-col cols="6" class="text-center pb-0 pl-0">
                <p @click="toggleTab(2)" class="mb-0 pa-3" :class="index == 1 ? 'about-tab' : 'about-tab-active' "> 他就個的 </p>
            </v-col>
        </v-row>
        <v-row v-if="index == 1">
            <v-col cols="12">
                <p class="mb-0 py-10">
                    風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。
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
                    風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。
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
export default {
    layout: 'basic',

    components:{
        carousel,
    },

    metaInfo () {
        return { title: "About" }
    }, 

    data: () => ({
        baseUrl: window.Laravel.base_url,
        index: 1,
        firstData: [
            {
                path: '/asset/img/welcome/room1.jpeg',
                title: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                path: '/asset/img/welcome/room2.jpeg',
                title: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                title: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                title: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                path: '/asset/img/welcome/room5.jpeg',
                title: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                path: '/asset/img/welcome/room6.jpeg',
                title: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
        ],
        secondData: [
            {
                path: '/asset/img/welcome/room1.jpeg',
                title: null,
                subtitle: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                title: '之不神細',
            },
            {
                path: '/asset/img/welcome/room2.jpeg',
                title: null,
                subtitle: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                title: null,
                subtitle: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                title: '之不神細',
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                title: null,
                subtitle: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                path: '/asset/img/welcome/room5.jpeg',
                title: null,
                subtitle: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
            },
            {
                title: '之不神細',
            },
            {
                path: '/asset/img/welcome/room6.jpeg',
                title: null,
                subtitle: '己加多間',
                content : '風企清他就個的管之不神細去服有積轉出全多在動漸空小復不共人在型失時趣斷、程以己平眼新的看女這康北合，大起配孩用……帶親動孩遠安學這個家特小青數遊火是三前意改影不行於男了，如我可我技：山時都底要。走當切，縣冷我決：如已學能有早課際以每不整外作樹層過有說天世方同出過作程痛，南一別藝百品列，古出這命情完過說格說，產會保道際門感！己加多間質親。'
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