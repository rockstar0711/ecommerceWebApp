<template>
    <v-container class="h-100">
        <v-row class="border-bottom-dark-gray">
            <v-tabs fixed-tabs background-color="white" color="#DC8E62" >
                <v-tab class="gallery-cus-tab"> 十在子增 </v-tab>
                <v-tab class="gallery-cus-tab"> 喜原作去 </v-tab>
            </v-tabs>
        </v-row>
        <v-row class="dark-bg-background height-without-header-footer">
            <v-col cols="12">
                <v-img height="600" :src="`${baseUrl}/asset/img/welcome/room4.jpeg`" class="welcome-banner-carousel-img"  >
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
    </v-container>
</template>

<script>
export default {
    layout: 'basic',

    metaInfo () {
        return { title: "Gallery" }
    },

    data: () => ({
        baseUrl: window.Laravel.base_url,
    })
}
</script>

<style>

</style>