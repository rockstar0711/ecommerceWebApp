<template>
    <v-bottom-sheet :value="tagPicker">
        <v-sheet  class="text-center" height="300px" >
            <v-row >
                <v-col cols="12" class="d-flex align-center justify-space-between">
                    <v-btn class="" text  color="red" @click="onCancel" >
                        Close
                    </v-btn>
                    <v-btn class="" text  color="green" @click="onOk" >
                        Ok
                    </v-btn>
                </v-col>
            </v-row>
            <div class="py-3">
                 <pd-select-box style="position: fixed;bottom: 0;width: 100%">
                    <pd-select-item ref="tag" :listData="tagData" v-model="tag"></pd-select-item>
                </pd-select-box>
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {

    props:{
        tagPicker: {
            type: Boolean,
            required: true,
        },
    },

    data: () => ({
        tag: '方知手視',
        tagData: [
            '安學這',
            '在子增此',
            '別藝百',
            '實直由',
            '星節親',
            '方知手視',
            '少世子',
            '往世',
            '地學十',
            '親該',
        ]
    }),

    methods:{
        onCancel(){
            this.$emit("onCancelTagPicker");
        },

        onOk(){
            this.$emit("onOkTagPicker", this.tag);
        }
    }
}
</script>

<style>

</style>