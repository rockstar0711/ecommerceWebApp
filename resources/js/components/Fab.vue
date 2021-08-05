<template>
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
</template>

<script>
export default {
    data: ()=> ({
        fab: false,
    }),
}
</script>

<style>

</style>