<template>
    <div>
        <div class="left">
            <pick @getimage="useimage"></pick>
            <resu :possb="poss"></resu>
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
                    ifsucc: false,
                    possblity: [],
                    msg: ''
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
                            _this.poss = {
                                ifsucc: true,
                                possblity: res.data.predictions,
                            }
                        } else {
                            _this.poss = {
                                ifsucc: false,
                                msg: "无法识别"
                            }
                        }
                    })
                    .catch(function (error) {
                        _this.poss = {
                            ifsucc: false,
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
</style>
