<template>
    <div class="position-fixed mo-bottom-nav-con">
        <div class="w-100">
            <div class="d-flex align-center justify-space-between bg-white-translate pa-3">
                <p class="mb-0" style="color: #B29A6E">多在動漸空小復不共人在型失時趣斷</p>
                <v-speed-dial v-model="fab"
                    direction="left"
                    transition="slide-x-reverse-transition"
                >
                    <template v-slot:activator>
                        <v-btn class="elevation-10" v-model="fab" color="#B29A6E" dark fab >
                            <v-icon v-if="fab" size="65">
                                mdi-chevron-right
                            </v-icon>
                            <p v-else class="mb-0" style="font-weight: bold; font-size: 30px;">南</p>
                        </v-btn>
                    </template>
                    <v-btn class="elevation-10" fab dark color="#B29A6E" >
                        <v-icon size="45">mdi-chat-processing-outline</v-icon>
                    </v-btn>
                    <v-btn class="elevation-10" fab dark color="#B29A6E" >
                        <v-icon size="40">mdi-phone</v-icon>
                    </v-btn>
                </v-speed-dial>
            </div>
            <div style="height: 56px"></div>
        </div>
        <v-bottom-navigation
            :v-model="value"
            :input-value="active"
            color="#B29A6E"
            grow
            fixed
            class=" bg-secondary mo-bottom-nav"
        >
            <v-btn  fab plain :ripple="false" class="mo-bottom-nav-btn-item " @click="onNav(0)">
                <span>首页</span>
                <v-icon :color="value == 0 ? '#B29A6E' : '#000'">mdi-view-dashboard-outline</v-icon>
            </v-btn>
            <v-btn  fab plain :ripple="false" class="mo-bottom-nav-btn-item "  @click="onNav(1)">
                <span>通讯录</span>
                <v-icon :color="value == 1 ? '#B29A6E' : '#000'">mdi-text-box</v-icon>
            </v-btn>
            <v-btn  fab plain :ripple="false" class="mo-bottom-nav-btn-item " @click="onNav(2)">
                <span>圈子</span>
                <v-icon :color="value == 2 ? '#B29A6E' : '#000'">mdi-magnify</v-icon>
            </v-btn>
            <v-btn  fab plain :ripple="false" class="mo-bottom-nav-btn-item " @click="onNav(3)">
                <span>我的</span>
                <v-icon :color="value == 3 ? '#B29A6E' : '#000'">mdi-calendar-check-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters({
        }),
        // value: {
        //     get() {
        //         return this.$store.state.mo.value;
        //     },
        //     set(value) {
        //             this.$store.dispatch('mo/onMoBottomNavValue', {
        //             value: value,
        //         })
        //     }
        // },

        currentPath(){
            return this.$route
        },
        

    },
    watch:{
        currentPath:{
            handler(val){
                if(val.name == 'introduce'){
                    this.value = 0;
                }
                else if(val.name == 'welcome'){
                    this.value = 1;
                }
                else if(val.name == 'search'){
                    this.value = 2;
                }
                else if(val.name == 'gallery'){
                    this.value = 3;
                }
            },
            deep: true
        }
    },
    data: ()=> ({
        active: true,
        sheet: false,
        baseUrl: window.Laravel.base_url,
        value: 1,
        fab: false,
    }),
    
    created(){
        
    },
    methods:{
        onNav(val){
            this.value = val;
            switch (val) {
                case 0:
                    this.$router.push({name:"introduce"})
                    break;
            
                case 1:
                    this.$router.push({name:"welcome"})
                    break;
            
                case 2:
                    this.$router.push({name:"search"})
                    break;
            
                case 3:
                    this.$router.push({name:"gallery"})
                    break;
            
                default:
                    break;
            }
        }
    }
}
</script>

<style>

</style>