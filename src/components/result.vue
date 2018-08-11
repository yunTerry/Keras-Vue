<template>
    <div class="chart">
        <ve-bar v-if="ifshow" :data="chartData" :settings="chartSettings"></ve-bar>
    </div>
</template>

<script>
    export default {
        name: "result",
        props: {
            possb: []
        },
        data() {
            this.chartSettings = {
                labelMap: {
                    label: "标签",
                    probability: "概率"
                },
                dataOrder: {
                    label: "probability",
                    order: "desc"
                }
            };
            return {
                ifshow: true
            }
        },
        computed: {
            chartData: function () {
                return {
                    columns: ["label", "probability"],
                    rows: this.possb.predictions
                }
            }
        }
    };
</script>

<style scoped>
    chart {
        height: 70%;
    }
</style>