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
            <v-col cols="6" class="" v-for="(item, index) in facThreeDataList" :key="index">
                <div class="faq-three-card">
                    <v-img height="150" :src="`${baseUrl}${item.path}`" class="faq-three-card-image" /> 
                    <div class="d-flex align-center justify-space-around py-2">
                        <p class="mb-0 faq-three-card-title">{{item.title}}</p>
                        <p class="mb-0 faq-three-card-tag">{{item.tag}}</p>
                    </div>
                </div>
            </v-col>
        </v-row>
        <Faqnav :pageNumber="3" />
    </v-container>
</template>

<script>
import Faqnav from '~/components/Faqnav'
import Faqheader from '~/components/Faqheader'
export default {
    components: {
        Faqnav,
        Faqheader,
    },

    data: () => ({
        baseUrl: window.Laravel.base_url,
        facThreeDataList: [
            {
                path: '/asset/img/welcome/room1.jpeg',
                title: '有積轉出',
                tag: 'sammie'
            },
            {
                path: '/asset/img/welcome/room2.jpeg',
                title: '有積轉出',
                tag: 'tom'
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                title: '有積轉出',
                tag: 'Jacky'
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                title: '有積轉出',
                tag: 'greg'
            },
            {
                path: '/asset/img/welcome/room5.jpeg',
                title: '有積轉出',
                tag: 'jhon'
            },
            {
                path: '/asset/img/welcome/room6.jpeg',
                title: '有積轉出',
                tag: 'tonny'
            },
        ]
    }),

    methods:{

    }
}
</script>

<style>

</style>