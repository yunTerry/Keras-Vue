<template>
    <div>
        <h1>基于TensorFlow卷积神经网络的图片识别</h1>
        <div class="left">
            <pick @getimage="useimage"></pick>
            <resu :possb="poss" :loading="loading"></resu>
        </div>
        <imgview :imgUrl="imgurl"></imgview>
    </div>
</template>

<script>
    import pickPhoto from "./components/pickPhoto";
    import imgView from "./components/imgView";
    import result from "./components/result";

    export default {
        components: {
            pick: pickPhoto,
            imgview: imgView,
            resu: result
        },
        data() {
            return {
                imgurl: "",
                poss: {
                    ifsucc: 0,
                    possblity: [],
                    msg: ''
                }
            };
        },
        methods: {
            useimage(image) {
                this.poss.ifsucc = 1;
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
                            _this.poss = {
                                ifsucc: 2,
                                possblity: res.data.predictions
                            }
                        } else {
                            _this.poss = {
                                ifsucc: 3,
                                msg: "图片无法识别"
                            }
                        }
                    })
                    .catch(function (error) {
                        _this.poss = {
                            ifsucc: 4,
                            msg: error
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

    h1 {
        margin-top: 30px;
        text-align: center;
    }
</style>
