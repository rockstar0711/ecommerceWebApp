<template>
    <div class="floating-back-container">
        <div class="floating-back-element-right pr-2" @click="navToBack">
            <v-icon color="#000000">mdi-chevron-left</v-icon>
        </div>
        <div class="pl-2" @click="navToHome">
            <v-icon color="#000000">mdi-home</v-icon>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        navToBack(){
            this.$router.go(-1);
        },
        navToHome(){
            this.$router.push({name: 'home'});
        }
    }
}
</script>

<style>

</style>