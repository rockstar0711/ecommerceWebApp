<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="pa-0" >
                <v-img height="300" :src="`${baseUrl}/asset/img/new/about_bg_update.jpg`"   />
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold pt-4" >Welcome to Teach Meet</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0"> A qualified educational community dedicated towards building better relationships between educators and institutions.
                 We’ve been driven by a simple goal – to simplify and enhance organic outreach nationwide for teacher recruitment.
                 We knew there was a better way to get people excited about educational employment opportunity
                 Join a new education community of 1500+ educators &#38; institutions living across Shenzhen.</p>
            </v-col>
        </v-row>
        <v-row class="about-tab-container">
            <v-col @click="toggleTab(1)" cols="6" class="text-center pb-0 pr-0">
                <p class="mb-0 pa-3" :class="index == 1 ? 'about-tab-active' : 'about-tab' "> Educators </p>
            </v-col>
            <v-col cols="6" class="text-center pb-0 pl-0">
                <p @click="toggleTab(2)" class="mb-0 pa-3" :class="index == 1 ? 'about-tab' : 'about-tab-active' "> Institutions </p>
            </v-col>
        </v-row>
        <v-row v-if="index == 1">
            <v-col cols="12" class="pa-0 position-relative">
                <v-img height="300" :src="`${baseUrl}/asset/img/new/about_educators.jpg`" gradient="to top , rgba(0,0,0,.7), rgba(0,0,0,.7)" >
                    <div class="w-100 h-100 d-flex align-center justify-start">
                        <div class="text-left pl-3">
                            <p class="mb-0 font-weight-bold font-color-white" style="font-size: 40px;">EDUCATORS</p>
                            <p class="mb-0 font-weight-bold font-color-white" style="font-size: 40px;">WELCOME.</p>
                        </div>
                    </div>
                    <v-icon class="position-absolute" size="60" color="#B29A6E" style="bottom: 0px; right: 20px">mdi-dots-horizontal</v-icon>
                </v-img>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold py-4" >Land your dream job and discover who’s interested in you!</p>
                <p class="mb-0">We’ve built a trusted, verified network of qualified schools here in Shenzhen. Get noticed by potential employers and connect directly with hiring managers.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold py-4" >Discover more about your future employer.</p>
                <p class="mb-0">We believe a candidate is so much more than a CV, so we took the time to build a platform that gives you an inside view of your future work environment. Make an informed decision about your next educational career move.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold py-4" >Enjoy Pre-vetted schools authorized directly from the government.</p>
                <p class="mb-0">Whether it’s searching for a new opportunity or just browsing, we’re here to support people like you to find their ideal teaching job.</p>
            </v-col>
        </v-row>
        <v-row v-else class="bg-light-brown">
            <v-col cols="12" class="pa-0 position-relative">
                <v-img height="300" :src="`${baseUrl}/asset/img/new/about_institutions.jpg`" gradient="to top , rgba(0,0,0,.7), rgba(0,0,0,.7)" >
                    <div class="w-100 h-100 d-flex align-center justify-start">
                        <div class="text-left pl-3">
                            <p class="mb-0 font-weight-bold font-color-white" style="font-size: 40px;">INSTITUTIONS</p>
                            <p class="mb-0 font-weight-bold font-color-white" style="font-size: 40px;">WELCOME.</p>
                        </div>
                    </div>
                    <v-icon class="position-absolute" size="60" color="#B29A6E" style="bottom: 0px; right: 20px">mdi-dots-horizontal</v-icon>
                </v-img>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold py-4" >Hiring qualified educators in Shenzhen can be complicated. So, let's simplify it. We are an open-source hiring platform for educational institutions. Whether it’s one person or a whole department, we supply you with everything you’ll need to meet your fulfillment needs.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold py-4" >Find and hire people quickly</p>
                <p class="mb-0">Target people who are already interested in your institution and get candidates to apply, and respond, faster.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold py-4" >Engage Shenzhen’s most qualified talent pool</p>
                <p class="mb-0">Once you’ve got your short list of candidates, connect with them using your personalized preferred way to connect. - direct URL links, Email or even your recruitment WeChat Id.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold py-4" >Find the right people, fast</p>
                <p class="mb-0">Cut down your hiring time using the our professional network. With Teach Meet, you’ll get direct qualified candidate with a talent pool of 1500+ professionals.</p>
            </v-col>
            <v-col cols="12" class="text-center">
                <p class="mb-0 font-weight-bold py-4" >Diversity &#38; Inclusion</p>
                <p class="mb-0">Diversity &#38; Inclusion is what we champion. Teach Meet is an <b> equal opportunity employer  </b>recruitment platform that is committed to the future of work. Being an equal opportunity employer means that your company provides the same benefits and opportunities for hiring and advancement to everyone without discriminating due to protected characteristics such as age, gender, sexual orientation, ethnicity, nationality, religion, disability, and medical history. Find your next great hire with Teach Meet.</p>
            </v-col>
        </v-row>
        <FloatingBack class="position-fixed" style="top: 12px; left: 12px; z-index: 4" />
    </v-container>
</template>

<script>
import carousel from 'v-owl-carousel';
import { Carousel3d, Slide } from 'vue-carousel-3d';
import FloatingBack from '~/components/FloatingBack'
export default {
    layout: 'basic',

    components:{
        carousel,
        Carousel3d,
        Slide,
        FloatingBack
    },

    metaInfo () {
        return { title: "About" }
    }, 

    data: () => ({
        baseUrl: window.Laravel.base_url,
        index: 1,
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