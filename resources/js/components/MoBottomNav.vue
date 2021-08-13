<template>
    <div class="position-fixed mo-bottom-nav-con">
        <div class="w-100" v-if="isShowBottomFab">
            <div class="d-flex align-center justify-space-between bg-white-translate pa-3">
                <p class="mb-0" style="color: #B29A6E">Feel free to contact us.</p>
                <Fab />
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
                <span>Home</span>
                <v-icon :color="value == 0 ? '#B29A6E' : '#000'">mdi-view-dashboard-outline</v-icon>
            </v-btn>
            <v-btn  fab plain :ripple="false" class="mo-bottom-nav-btn-item "  @click="onNav(1)">
                <span>Discover</span>
                <v-icon :color="value == 1 ? '#B29A6E' : '#000'">mdi-text-box</v-icon>
            </v-btn>
            <v-btn  fab plain :ripple="false" class="mo-bottom-nav-btn-item " @click="onNav(2)">
                <span>Search</span>
                <v-icon :color="value == 2 ? '#B29A6E' : '#000'">mdi-magnify</v-icon>
            </v-btn>
            <v-btn  fab plain :ripple="false" class="mo-bottom-nav-btn-item " @click="onNav(3)">
                <span>Profile</span>
                <v-icon :color="value == 3 ? '#B29A6E' : '#000'">mdi-calendar-check-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Fab from '~/components/Fab'
export default {

    components: {
        Fab
    },

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
                if(val.name == 'home'){
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
        isShowBottomFab: false,
        
    }),
    
    created(){
        if(this.currentPath.name == 'home'){
            this.value = 0;
            this.isShowBottomFab = false;
        }
        else if(this.currentPath.name == 'welcome'){
            this.value = 1;
            this.isShowBottomFab = true;
        }
        else if(this.currentPath.name == 'search'){
            this.value = 2;
            this.isShowBottomFab = false;
        }
        else if(this.currentPath.name == 'gallery'){
            this.value = 3;
            this.isShowBottomFab = false;
        }
    },

    methods:{
        onNav(val){
            this.value = val;
            switch (val) {
                case 0:
                    this.isShowBottomFab = false;
                    this.$router.push({name:"home"})
                    break;
            
                case 1:
                    this.isShowBottomFab = true;
                    this.$router.push({name:"welcome"})
                    break;
            
                case 2:
                    this.isShowBottomFab = false;
                    this.$router.push({name:"search"})
                    break;
            
                case 3:
                    this.isShowBottomFab = false;
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