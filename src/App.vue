<template>
    <div>
        <div class="left">
            <pick @getimage="useimage"></pick>
            <ve-bar class="result" v-if="ifshow"
                    :data="chartData" :settings="chartSettings">
            </ve-bar>
        </div>
        <div class="right">
            <div class="imgbox">
                <img :src="imgurl">
            </div>
        </div>
    </div>
</template>

<script>

    import pickPhoto from "./components/pickPhoto";

    export default {
        components: {
            pick: pickPhoto
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
                imgurl: "",
                ifshow: false,
                chartData: {
                    columns: ["label", "probability"],
                    rows: []
                }
            };
        },
        methods: {
            useimage(image) {
                this.imgurl = window.URL.createObjectURL(image);
                this.postimg(image);
            },
            postimg(image) {
                let fdata = new FormData();
                fdata.append("image", image);
                let _this = this;
                this.$http
                    .post("/predict", fdata, {
                        headers: {"Content-Type": "multipart/form-data"}
                    })
                    .then(function (res) {
                        if (res.data.success) {
                            _this.ifshow = true;
                            _this.chartData.rows = res.data.predictions;
                        }
                    });
            }
        }
    };
</script>

<style>
    .left {
        width: 50%;
        height: 600px;
        float: left;
    }

    .result {
        height: 70%;
    }

    .right {
        margin: auto 5rem;
        display: table;
        height: 600px;
    }

    .imgbox {
        width: 40%;
        height: 600px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .imgbox img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        margin: 40px;
    }
</style>
