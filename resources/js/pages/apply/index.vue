<template>
    <v-container class="mb-16">
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Head Banner Images</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-file-input
                    label="Header Image"
                    color="#B29A6E"
                    outlined
                    dense
                    show-size
                    accept="image/*"
                    placeholder="Please select an Header Image"
                    prepend-icon="mdi-camera"
                    hide-details
                ></v-file-input>
                <p class="mb-0 ml-9 font-size-13">Header image will be shown after integrated with backend.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Institution Name</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-text-field
                    label="Institution Name"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="Public School"
                    prepend-icon="mdi-office-building-outline"
                    hide-details
                ></v-text-field>
                <p class="mb-0 ml-9 font-size-13">Your schools name in English without the external: Ex: Co., Ltd., B.V., Pte., etc</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Position</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-text-field
                    label="Position"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="Full Stack Developer"
                    prepend-icon="mdi-account-tie"
                    hide-details
                ></v-text-field>
                <p class="mb-0 ml-9 font-size-13">A job post is limited to a single job. If your looking to post multiple roles, please check out our bundle option for more visibility. When posting a role please refer to these as position title examples: “ Drama Teacher ”or “ Head of School”. Your post will be visible for a total of 1month starting from date of authorization.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Primary Tag</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-combobox
                    v-model="primaryTag"
                    :items="primaryTagList"
                    chips
                    clearable
                    label="Primary Tag"
                    multiple
                    outlined
                    dense
                    color="#B29A6E"
                    hide-details
                    prepend-icon="mdi-tag-multiple-outline"
                >
                    <template v-slot:selection="{ attrs, item, select, selected }">
                        <v-chip
                            color="#B29A6E"
                            small
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            dark
                            @click="select"
                            @click:close="removePrimaryTag(item)"
                        >
                            <strong>{{ item }}</strong>&nbsp;
                            <!-- <span>(cool)</span> -->
                        </v-chip>
                    </template>
                </v-combobox>
                <p class="mb-0 ml-9 font-size-13">Primary tags are conveniently used for increasing visibility and key word searches.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Location</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-text-field
                    label="Location"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="ShenYang"
                    prepend-icon="mdi-map-marker-outline"
                    hide-details
                ></v-text-field>
                <p class="mb-0 ml-9 font-size-13">Primary location tags are conveniently used for increasing visibility and key word searches.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Salary Range ($/hour)</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-range-slider
                    v-model="rangeSalary"
                    :max="maxSalary"
                    :min="minSalary"
                    hide-details
                    color="#B29A6E"
                    class="align-center cus-slider-range-thumb"
                >
                </v-range-slider>
                <div class="d-flex align-center justify-space-between">
                    <div class="d-flex align-end">
                        <v-text-field
                            :value="rangeSalary[0]"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            outlined
                            dense
                            label="Min"
                            color="#B29A6E"
                            type="number"
                            style="width: 60px"
                            @change="$set(rangeSalary, 0, $event)"
                        ></v-text-field>
                        <!-- <p class="mb-0">usd / hour</p> -->
                    </div>
                    <div class="d-flex align-end">
                        <v-text-field
                            :value="rangeSalary[1]"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            outlined
                            dense
                            label="Max"
                            color="#B29A6E"
                            type="number"
                            style="width: 60px"
                            @change="$set(rangeSalary, 1, $event)"
                        ></v-text-field>
                        <!-- <p class="mb-0">usd / hour</p> -->
                    </div>
                </div>
                <p class="mb-0 font-size-13">All postings must include a salary range. Salary equivalents are measured in CYN and are based on monthly payouts. Teach Meet is a supporter of #OpenSalaries.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Benefits</p>
            </v-col>
            <v-col cols="3" class="d-flex pa-0 align-center justify-center mt-3"  v-for="(item, index) in benefitsList" :key="index">
                <div class="text-center benefit-item d-flex align-center justify-center" :class="item.isSelected? 'benefit-active':'bg-white'" @click="toggleBenefitsIcon(index)">
                    <div>
                        <v-icon size="25" :color="item.isSelected?'#fff':'#757575'">{{item.icon}}</v-icon>
                        <p class="mb-0" style="font-size: 12px; " :class="item.isSelected?'font-color-white':'font-color-black'">{{item.title}}</p>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="pt-0">
                <!-- <v-combobox
                    v-model="benefitTag"
                    :items="benefitTagList"
                    chips
                    clearable
                    label="Benefits"
                    multiple
                    outlined
                    dense
                    color="#B29A6E"
                    hide-details
                    prepend-icon="mdi-tag-multiple-outline"
                >
                    <template v-slot:selection="{ attrs, item, select, selected }">
                        <v-chip
                            color="#B29A6E"
                            small
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            dark
                            @click="select"
                            @click:close="removeBenefitTag(item)"
                        >
                            <strong>{{ item }}</strong>&nbsp;
                            <span>(cool)</span>
                        </v-chip>
                    </template>
                </v-combobox>
                <p class="mb-0 ml-9 font-size-13">All postings must include. Visa reimbursement . Flight allowance. Medical check. Housing. National holidays Holiday, Social Insurance</p> -->
                <p class="mb-0 font-size-13">All postings must include. Visa reimbursement . Flight allowance. Medical check. Housing. National holidays Holiday, Social Insurance</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pb-0">
                <p class="mb-0 drowdown-title-font font-color-brown">Upgrade your job post</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-checkbox
                    v-model="upgradeJob"
                    label="Bundle Package: CYN +500"
                    color="#B29A6E"
                    hide-details
                ></v-checkbox>
                <p class="mb-0 ml-9 font-size-13"> • View page top banner slideshow display</p>
                <p class="mb-0 ml-9 font-size-13"> • Discover page banner slideshow display</p>
                <p class="mb-0 ml-9 font-size-13"> • Search page banner slideshow display</p>
                <p class="mb-0 ml-9 font-size-13"> • Job post renewal after 30 days</p>
                <p class="mb-0 ml-9 font-size-13"> • Hot job button</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Job Detail</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-textarea
                    label="Job description"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="I need someone who is good at version control system."
                    prepend-icon="mdi-order-bool-descending-variant"
                    hide-details
                    counter
                    :rows="10"
                ></v-textarea>
                <p class="mb-0 ml-9 font-size-13">We highly encourage this section to be as detailed as possible. Please consider the text format and style while posting.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Our History</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-textarea
                    label="History"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="Our school has strong histroy and culture."
                    prepend-icon="mdi-order-bool-descending-variant"
                    hide-details
                    counter
                    :rows="5"
                ></v-textarea>
                <p class="mb-0 ml-9 font-size-13">This section should briefly explain your institution’s history.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">How to apply</p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0" style="font-size:18px;">Apply Url</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-text-field
                    label="Url Link"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="https://"
                    prepend-icon="mdi-web"
                    hide-details
                ></v-text-field>
                <p class="mb-0 ml-9 font-size-13">Funnel your applicants directly to your recruiting pool. URLs with a form for applicant to fill out generally receives more applicants.</p>
            </v-col>
            <v-col cols="12" class="text-center pa-0">
                <p class="mb-0 font-weight-bold">OR</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <p class="mb-0" style="font-size:18px;">Apply Email</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-text-field
                    label="Email Address"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="example@test.com"
                    prepend-icon="mdi-email-outline"
                    hide-details
                ></v-text-field>
                <p class="mb-0 ml-9 font-size-13">This email is public and should connect to your institution’s hiring manager. This gives applicants the option to email you directly.</p>
            </v-col>
            <v-col cols="12" class="text-center pa-0">
                <p class="mb-0 font-weight-bold">OR</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <p class="mb-0" style="font-size:18px;">Apply with wechatID</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-text-field
                    label="Wechat ID"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="sammie"
                    prepend-icon="mdi-wechat"
                    hide-details
                ></v-text-field>
                <p class="mb-0 ml-9 font-size-13">This ID is public and should connect to your institution’s hiring manager. “WeChat Direct” has become our most popular. You have the option to post an official ID. This selection gets 3x’s the amount of responses.</p>
            </v-col>
            <v-col cols="12" class="">
                <v-btn @click="navToPreview" class="search-btn-font" block tile dark color="#B29A6E">
                    Preview
                </v-btn>
               
            </v-col>
            <v-col>
                 <v-btn class="search-btn-font" block tile dark color="#B29A6E">
                    Post Job
                </v-btn>
            </v-col>
        </v-row>
        <Fab style="position: fixed; bottom: 12px; right: 12px;"/>
    </v-container>
</template>

<script>
import Fab from '~/components/Fab';
import carousel from 'v-owl-carousel';

export default {
    layout: 'basic',

    components:{
        Fab,
        carousel,
    },

    metaInfo () {
        return { title: "Apply" }
    },  

    data: () => ({
        primaryTag: [],
        primaryTagList: [
            'remote', 
            'local',
            'middle level',
            'senior level',
            'long term',
            'full time', 
            'part time'
        ],
        benefitTag: [],
        benefitTagList: [
            'Fitness', 
            'Scenery',
            'Travel',
            'Coffee',
            'Photo',
            'Lucky', 
        ],
        minSalary: 1,
        maxSalary: 200,
        rangeSalary: [1, 60],

        baseUrl: window.Laravel.base_url,
        bannerImageList: [
            {
                path: '/asset/img/welcome/room1.jpeg',
                id: 1,
            },
            {
                path: '/asset/img/welcome/room2.jpeg',
                id: 2,
            },
            {
                path: '/asset/img/welcome/room3.jpeg',
                id: 3,
            },
        ],
        baidumapImageList: [
            {
                path: '/asset/img/welcome/baidumap1.png',
                id: 1,
            },
            {
                path: '/asset/img/welcome/baidumap2.png',
                id: 2,
            },
            
        ],

        benefitsList: [
            {
                icon: 'mdi-abacus',
                title: 'Fitness',
                isSelected: false,
            },
            {
                icon: 'mdi-airballoon-outline',
                title: 'Scenery',
                isSelected: false,
            },
            {
                icon: 'mdi-airplane-landing',
                title: 'Travel',
                isSelected: false,
            },
            {
                icon: 'mdi-blender',
                title: 'Coffe',
                isSelected: false,
            },
            {
                icon: 'mdi-camera-iris',
                title: 'Photo',
                isSelected: false,
            },
            {
                icon: 'mdi-clover',
                title: 'Lucky',
                isSelected: false,
            },

        ],

        benefits: [],
        upgradeJob: false
    }),

    methods: {
        removePrimaryTag (item) {
            this.primaryTag.splice(this.primaryTag.indexOf(item), 1)
            this.primaryTag = [...this.primaryTag]
        },
        removeBenefitTag (item) {
            this.benefitTag.splice(this.benefitTag.indexOf(item), 1)
            this.benefitTag = [...this.benefitTag]
        },

        toggleBenefitsIcon(index){
            this.benefitsList[index].isSelected = !this.benefitsList[index].isSelected
        },

        navToPreview(){
            this.$router.push({name: 'detail'})
        }
    }
}
</script>

<style>

</style>