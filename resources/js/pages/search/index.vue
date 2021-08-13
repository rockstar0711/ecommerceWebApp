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
                <p class="mb-0 drowdown-title-font">Options</p>
            </v-col>
            <v-col cols="6" class="pt-0" @click="toggleLocationPicker">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">{{location == null ? 'Select Location' : location}}</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="6" class="pt-0" @click="toggleInstitutionPicker">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">{{institution == null ? 'Select Institution' : institution}}</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="pb-0">
                <p class="mb-0 drowdown-title-font">Options</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">Time</p>
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
    </v-container>
</template>

<script>
import LocationPicker from '~/components/LocationPicker'
import InstitutionPicker from '~/components/InstitutionPicker'

export default {
    layout: 'basic',

    metaInfo () {
        return { title: "Search" }
    },

    components: {
        LocationPicker,
        InstitutionPicker
    },

    data: () => ({
        baseUrl: window.Laravel.base_url,
        locationPicker: false,
        institutionPicker: false,
        location: null,
        institution: null,
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
        }
    }
}
</script>

<style>

</style>