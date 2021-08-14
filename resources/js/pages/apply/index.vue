<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Header Image</p>
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
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
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
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
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
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
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
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
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
                <p class="mb-0 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Benefits</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-combobox
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
                            <!-- <span>(cool)</span> -->
                        </v-chip>
                    </template>
                </v-combobox>
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">Job description</p>
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
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font font-color-brown">How to apply</p>
            </v-col>
            <v-col cols="12" class="pt-0">
                <v-textarea
                    label="How to apply"
                    color="#B29A6E"
                    outlined
                    dense
                    placeholder="Lorem ipsum dolor sit amet."
                    prepend-icon="mdi-order-bool-descending-variant"
                    hide-details
                    counter
                    :rows="10"
                ></v-textarea>
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
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
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
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
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
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
                <p class="mb-0 ml-9 font-size-13">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente quidem dolores quam aliquam voluptate, itaque temporibus doloremque.</p>
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
    }
}
</script>

<style>

</style>