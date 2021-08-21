<template>
    <v-bottom-sheet :value="institutionPicker">
        <v-sheet  class="text-center" height="300px" >
            <v-row >
                <v-col cols="12" class="d-flex align-center justify-space-between">
                    <v-btn class="" text  color="#7D7D7D" @click="onCancel" >
                        Close
                    </v-btn>
                    <v-btn class="" text  color="#52B26C" @click="onOk" >
                        Ok
                    </v-btn>
                </v-col>
            </v-row>
            <div class="py-3">
                 <pd-select-box style="position: fixed;bottom: 0;width: 100%">
                    <pd-select-item ref="institution" :listData="institutionData" v-model="institution"></pd-select-item>
                </pd-select-box>
            </div>
        </v-sheet>
    </v-bottom-sheet>
</template>

<script>
export default {

    props:{
        institutionPicker: {
            type: Boolean,
            required: true,
        },
    },

    data: () => ({
        institution: 'Private Education',
        institutionData: [
            'International Schools',
            'Public Schools',
            'Private Education',
            'Primary Care',
            'Remote Teaching',
        ]
    }),

    methods:{
        onCancel(){
            this.$emit("onCancelInstitutionPicker");
        },

        onOk(){
            this.$emit("onOkInstitutionPicker", this.institution);
        }
    }
}
</script>

<style>

</style>