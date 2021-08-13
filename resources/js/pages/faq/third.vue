<template>
    <v-container style="margin-bottom: 120px;">
        <Faqheader />
        <v-row>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #000;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fuga laborum suscipit aperiam nobis voluptas necessitatibus aliquid doloremque veniam? Repellendus fugit qui facere ullam consectetur! Ad officia iure optio pariatur! Cum cupiditate ratione voluptatibus a vitae, sapiente asperiores sit, natus est error inventore! Magni sequi error necessitatibus dolorum soluta ratione?
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
                title: 'Sammie',
                tag: 'remote'
            },
            {
                path: '/asset/img/welcome/room2.jpeg',
                title: 'Tom',
                tag: 'local'
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                title: 'Jacky',
                tag: 'home'
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                title: 'Greg',
                tag: 'local'
            },
            {
                path: '/asset/img/welcome/room5.jpeg',
                title: 'Jhon',
                tag: 'home'
            },
            {
                path: '/asset/img/welcome/room6.jpeg',
                title: 'Tonny',
                tag: 'remote'
            },
        ]
    }),

    methods:{

    }
}
</script>

<style>

</style>