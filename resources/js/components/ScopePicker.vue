<template>
    <v-bottom-sheet :value="scopePicker">
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
                    <pd-select-item ref="scope" :listData="scopeData" v-model="scope"></pd-select-item>
                </pd-select-box>
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {
    
    props:{
        scopePicker: {
            type: Boolean,
            required: true,
        },
    },

    data: () => ({
        scope: '51~60',
        scopeData: [
            '0~10',
            '11~20',
            '21~30',
            '31~40',
            '41~50',
            '51~60',
            '61~70',
            '71~80',
            '81~90',
            '91~100',
        ]
    }),

    methods:{
        onCancel(){
            this.$emit("onCancelScopePicker");
        },

        onOk(){
            this.$emit("onOkScopePicker", this.scope);
        }
    }
}
</script>

<style>

</style>