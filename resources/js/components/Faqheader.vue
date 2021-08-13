<template>
    <v-row>
        <v-col class="text-center">
            <!-- <p class="mb-0" style="font-size: 12px; color: #11233F">meet&nbsp;&nbsp;&nbsp;beat</p>
            <img :src="`${baseUrl}/asset/img/welcome/meetbeat-charater.png`" style="width: 60px;" alt=""> -->
            <p class="mb-0" style="font-weight: bold; font-size:30px">App Name</p>
            <div style="width: 20px; height: 5px; margin: auto; background: black"></div>
            <p class="mb-0" style="font-weight: bold; font-size:22px">JOB</p>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        baseUrl: window.Laravel.base_url,
    }),
}
</script>

<style>

</style>