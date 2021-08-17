<template>
    <v-bottom-sheet :value="timeagoPicker">
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
                    <pd-select-item ref="timeago" :listData="timeagoData" v-model="timeago"></pd-select-item>
                </pd-select-box>
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {
    
    props:{
        timeagoPicker: {
            type: Boolean,
            required: true,
        },
    },

    data: () => ({
        timeago: 'Any Time',
        timeagoData: [
            'Any Time',
            'Past Month',
            'Past Week',
            'Past 24 hours',
        ]
    }),

    methods:{
        onCancel(){
            this.$emit("onCancelTimeagoPicker");
        },

        onOk(){
            this.$emit("onOkTimeagoPicker", this.timeago);
        }
    }
}
</script>

<style>

</style>