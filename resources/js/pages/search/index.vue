<template>
    <v-container>
        <v-row>
            <v-col class="pa-0">
                <v-img height="150" :src="`${baseUrl}/asset/img/welcome/room4.jpeg`" class="welcome-banner-carousel-img"  >
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
        </v-row>
        <v-row class="mt-8">
            <v-col cols="12" class="pb-0">
                <p class="mb-0 drowdown-title-font">合北就但</p>
            </v-col>
            <v-col cols="6" class="pt-0">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">影不行於男了</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="6" class="pt-0">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">影不行於男了</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="pb-0">
                <p class="mb-0 drowdown-title-font">合北就但</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">影不行於男了</p>
                </div>
            </v-col>
            <v-col cols="12">
                <v-btn @click="navToList" class="search-btn-font" block tile dark color="#B29A6E" x-large>
                    去英其好
                </v-btn>
            </v-col>
            <v-col @click="navToList" cols="12" class="pb-0 d-flex align-center justify-space-between">
                <p class="mb-0 drowdown-title-font">合北就但</p>
                <div class="d-flex align-center">
                    <p class="mb-0 dropdown-font">影不行於</p>
                    <v-icon color="#B29A6E">mdi-chevron-right</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="d-flex horizontal-scroll">
                <div class="mr-3 position-relative" v-for="(item, index) in horizontalList" :key="index" >
                    <v-img height="150" width="150" :src="`${baseUrl}${item.path}`" class="welcome-banner-carousel-img rounded-lg" >
                        <div class="horizontal-item-tag">
                            <p class="mb-0 horizontal-item-tag-title">{{item.title}}</p>
                            <p class="mb-0 horizontal-item-tag-category">{{item.category}}</p>
                        </div>
                    </v-img>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: 'basic',

    metaInfo () {
        return { title: "Search" }
    },

    data: () => ({
        baseUrl: window.Laravel.base_url,
        horizontalList: [
            
            {
                path: '/asset/img/welcome/room2.jpeg',
                title: '我可我技',
                category: '覺只'
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                title: '小青數遊火',
                category: '什無'
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                title: '求子過將度',
                category: '靈下'
            },
            {
                path: '/asset/img/welcome/room5.jpeg',
                title: '成名是喜原',
                category: '星節親'
            },
            {
                path: '/asset/img/welcome/room1.jpeg',
                title: '品知',
                category: '不共人'
            },
            
        ]
    }),

    methods: {
        navToList(){
            this.$router.push({name: 'list'});
        }
    }
}
</script>

<style>

</style>