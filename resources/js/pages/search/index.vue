<template>
    <v-container class="mb-16 pb-16">
        <v-row>
            <v-col class="pa-0 position-relative" >
                <v-img height="250" :src="`${baseUrl}/asset/img/new/about_bg_update.jpg`" class="welcome-banner-carousel-img" >
                    <div class="w-100 h-100 d-flex align-center justify-center">
                        <div class="text-center">
                            <p class="mb-0 font-weight-bold font-color-white" style="font-size: 40px;">SEARCH</p>
                            <p class="mb-0 font-color-white" style="font-size: 17px;">ShenZhen</p>
                        </div>
                    </div>
                </v-img>
                <!-- <v-img height="300" :src="`${baseUrl}/asset/img/new/about_bg_update.jpg`"   /> -->
                <v-icon class="position-absolute" size="53" color="#B29A6E" style="bottom: -10px; right: 20px">mdi-dots-horizontal</v-icon>
            </v-col>
        </v-row>
        <v-row class="mt-8">
            <v-col cols="12" class="pb-0">
                <p class="mb-0 drowdown-title-font">Search</p>
            </v-col>
            
            <v-col cols="6" class="pt-0" @click="toggleInstitutionPicker">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">{{institution == null ? 'Search Institution' : institution}}</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="6" class="pt-0" @click="toggleLocationPicker">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">{{location == null ? 'Search Location' : location}}</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="pb-0">
                <p class="mb-0 drowdown-title-font">Post Date</p>
            </v-col>
            <v-col cols="12" class="pt-0"  @click="toggleTimeagoPicker">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">{{timeago == null ? 'Date Posted' : timeago}}</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="12">
                <v-btn @click="navToList" class="search-btn-font" block tile dark color="#B29A6E" x-large>
                    search
                </v-btn>
            </v-col>
            <v-col @click="navToList" cols="12" class="pb-0 d-flex align-center justify-space-between">
                <p class="mb-0 drowdown-title-font">Recommend for you</p>
                <div class="d-flex align-center">
                    <p class="mb-0 dropdown-font">More</p>
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
        <LocationPicker 
            :locationPicker="locationPicker"
            @onCancelLocationPicker="onCancelLocationPicker"
            @onOkLocationPicker="onOkLocationPicker"
        />
        <InstitutionPicker 
            :institutionPicker="institutionPicker"
            @onCancelInstitutionPicker="onCancelInstitutionPicker"
            @onOkInstitutionPicker="onOkInstitutionPicker"
        />
        <TimeagoPicker 
            :timeagoPicker="timeagoPicker"
            @onCancelTimeagoPicker="onCancelTimeagoPicker"
            @onOkTimeagoPicker="onOkTimeagoPicker"
        />
        <FloatingBack class="position-fixed" style="top: 25px; left: 12px; z-index: 4" />
    </v-container>
</template>

<script>
import LocationPicker from '~/components/LocationPicker'
import InstitutionPicker from '~/components/InstitutionPicker'
import TimeagoPicker from '~/components/TimeagoPicker'
import FloatingBack from '~/components/FloatingBack'

export default {
    layout: 'basic',

    metaInfo () {
        return { title: "Search" }
    },

    components: {
        LocationPicker,
        InstitutionPicker,
        TimeagoPicker,
        FloatingBack
    },

    data: () => ({
        baseUrl: window.Laravel.base_url,
        locationPicker: false,
        institutionPicker: false,
        timeagoPicker: false,
        location: null,
        institution: null,
        timeago: null,

        horizontalList: [
            
            {
                path: '/asset/img/welcome/room2.jpeg',
                title: 'Wang',
                category: 'remote'
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                title: 'Greg',
                category: 'local'
            },
            {
                path: '/asset/img/welcome/room4.jpeg',
                title: 'William',
                category: 'remote'
            },
            {
                path: '/asset/img/welcome/room5.jpeg',
                title: 'John',
                category: 'local'
            },
            {
                path: '/asset/img/welcome/room1.jpeg',
                title: 'Sammie',
                category: 'local'
            },
            
        ]
    }),

    methods: {
        navToList(){
            this.$router.push({name: 'list'});
        },

        toggleLocationPicker(){
            this.locationPicker = !this.locationPicker;
        },

        toggleInstitutionPicker(){
            this.institutionPicker = !this.institutionPicker;
        },

        toggleTimeagoPicker(){
            this.timeagoPicker = !this.timeagoPicker;
        },

        onCancelLocationPicker(){
            this.locationPicker = false;
        },

        onOkLocationPicker(location){
            this.location = location;
            this.onCancelLocationPicker();
        },

        onCancelInstitutionPicker(){
            this.institutionPicker = false;
        },

        onOkInstitutionPicker(institution){
            this.institution = institution
            this.onCancelInstitutionPicker();
        },

        onCancelTimeagoPicker(){
            this.timeagoPicker = false;
        },

        onOkTimeagoPicker(timeago){
            this.timeago = timeago;
            this.onCancelTimeagoPicker();
        },
    }
}
</script>

<style>

</style>