<template>
    <v-container>
        <v-row class="border-bottom-dark-gray">
            <v-tabs fixed-tabs background-color="white" color="#DC8E62" >
                <v-tab> 十在子增 </v-tab>
                <v-tab> 喜原作去 </v-tab>
            </v-tabs>
        </v-row>
        <v-row class="dark-bg-background">
            <v-col cols="12">
                <v-img height="600" :src="`${baseUrl}/asset/img/welcome/room4.jpeg`" class="welcome-banner-carousel-img"  />
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