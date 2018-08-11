<template>
    <div>
        <div class="left">
            <pick @getimage="useimage"></pick>
            <ve-bar v-if="ifshow"
                    :data="chartData" :settings="chartSettings">
            </ve-bar>
        </div>
        <imgview :imgUrl="imgurl"></imgview>
    </div>
</template>

<script>

    import pickPhoto from "./components/pickPhoto";
    import imgView from "./components/imgView";

    export default {
        components: {
            pick: pickPhoto,
            imgview: imgView
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

    ve-bar {
        height: 70%;
    }
</style>
