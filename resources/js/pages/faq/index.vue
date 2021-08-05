<template>
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>
</template>

<script>
export default {
    layout: 'basic',

    components:{
        
    },

    metaInfo () {
        return { title: "Faq" }
    },  

    data: () => ({

    }),
}
</script>

<style>

</style>