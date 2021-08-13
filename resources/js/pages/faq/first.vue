<template>
    <v-container class="faq-first-container">
        <Faqheader />
        <v-row>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #000;">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eveniet deserunt facere aspernatur nulla impedit fuga esse enim illo dignissimos. Soluta repellendus nostrum magnam, labore recusandae facere numquam iure laborum id possimus ex dolorem necessitatibus, hic quia harum est minus obcaecati dolores illum natus sint nihil! Cum neque placeat inventore.
                </p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">Lorem ipsum dolor sit.</p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #000;">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eveniet deserunt facere aspernatur nulla impedit fuga esse enim illo dignissimos. Soluta repellendus nostrum magnam, labore recusandae facere numquam iure laborum id possimus ex dolorem necessitatibus, hic quia harum est minus obcaecati dolores illum natus sint nihil! Cum neque placeat inventore.
                </p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">Lorem ipsum dolor sit.</p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #000;">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eveniet deserunt facere aspernatur nulla impedit fuga esse enim illo dignissimos. Soluta repellendus nostrum magnam, labore recusandae facere numquam iure laborum id possimus ex dolorem necessitatibus, hic quia harum est minus obcaecati dolores illum natus sint nihil! Cum neque placeat inventore.
                </p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0 drowdown-title-font">Lorem ipsum dolor sit.</p>
            </v-col>
            <v-col cols="12">
                <p class="mb-0" style="font-size: 15px; color: #000;">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime eveniet deserunt facere aspernatur nulla impedit fuga esse enim illo dignissimos. Soluta repellendus nostrum magnam, labore recusandae facere numquam iure laborum id possimus ex dolorem necessitatibus, hic quia harum est minus obcaecati dolores illum natus sint nihil! Cum neque placeat inventore.
                </p>
            </v-col>
        </v-row>
        <Faqnav :pageNumber="1" />
    </v-container>
</template>

<script>
import Faqnav from '~/components/Faqnav'
import Faqheader from '~/components/Faqheader'
export default {
    components: {
        Faqnav,
        Faqheader
    },

    data: () => ({
        baseUrl: window.Laravel.base_url,
    }),

    methods:{

    }
}
</script>

<style>

</style>