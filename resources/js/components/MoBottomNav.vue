<template>
    <div class="position-fixed mo-bottom-nav-con">
        <v-bottom-navigation
            :value="value"
            :input-value="active"
            color="#7879ff"
            grow
            fixed
            class=" bg-secondary mo-bottom-nav"
        >
            <v-btn fab plain :ripple="false" class="mo-bottom-nav-btn-item ">
                <span>首页</span>
                <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-btn fab plain :ripple="false" class="mo-bottom-nav-btn-item " >
                <span>通讯录</span>
                <v-icon>mdi-account-group</v-icon>
            </v-btn>
            <v-btn fab plain :ripple="false" class="mo-bottom-nav-btn-item ">
                <span>圈子</span>
                <v-icon>mdi-fire-hydrant</v-icon>
            </v-btn>
            <v-btn fab plain :ripple="false" class="mo-bottom-nav-btn-item ">
                <span>我的</span>
                <v-icon>mdi-account</v-icon>
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
                if(val.name!=="home" && val.name!=="chatMobile" && val.name!=="mochat.news" && val.name!=="mochat.detail" && val.name!=="mochat.contact" && val.name!=="circle" && val.name!=="profile.list"){
                    let btnList = document.getElementsByClassName('mo-bottom-nav-btn-item');
                    for(let i = 0; i < btnList.length; i++){
                        btnList[i].classList.remove('v-btn--active');
                        $(btnList[i]).removeClass('v-btn--active');
                    }
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
    }),
    
    created(){
        
    },
    methods:{
        
    }
}
</script>

<style>

</style>