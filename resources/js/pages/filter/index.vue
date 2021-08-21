<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="d-flex justify-end">
                <v-btn text small @click="reset" class="mt-2">
                    to reset
                </v-btn>
            </v-col>
            <v-col cols="12" class="pb-0">
                <p class="mb-0 drowdown-title-font">Institution</p>
            </v-col>
            <v-col cols="12" class="pt-0" @click="toggleInstitutionPicker">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">{{institution == null ? 'Search Institution' : institution}}</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="pb-0 pt-5">
                <p class="mb-0 drowdown-title-font">Location</p>
            </v-col>
            <v-col cols="12" class="pt-0" @click="toggleLocationPicker">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">{{location == null ? 'Search Location' : location}}</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="pb-0 pt-5">
                <p class="mb-0 drowdown-title-font">Post Date</p>
            </v-col>
            <v-col cols="12" class="pt-0" @click="toggleTimeagoPicker">
                <div class="dropdown-btn">
                    <p class="mb-0 dropdown-font">{{timeago == null ? 'Date Posted' : timeago}}</p>
                    <v-icon color="#B29A6E">mdi-menu-down</v-icon>
                </div>
            </v-col>
            <v-col cols="12" class="pt-5">
                <v-btn class="search-btn-font" block tile dark color="#B29A6E" x-large>
                    SEARCH
                </v-btn>
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
        <FloatingBack class="position-fixed" style="top: 12px; left: 12px; z-index: 4" />
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
        return { title: "Filter" }
    },

    components: {
        LocationPicker,
        InstitutionPicker,
        TimeagoPicker,
        FloatingBack
    },

    data: () => ({
        locationPicker: false,
        institutionPicker: false,
        timeagoPicker: false,
        location: null,
        institution: null,
        timeago: null,
    }),

    methods:{
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

        reset(){
            this.location = null;
            this.institution = null;
            this.timeago = null;
        }
    }
}
</script>

<style>

</style>