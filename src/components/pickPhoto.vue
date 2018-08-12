<template>
    <div class="pick">
        <a href="javascript:" class="pickfile">选取图片
            <input type="file" accept="image/*" @change="getFile($event)">
        </a>
    </div>
</template>

<script>
    export default {
        name: "pickPhoto",
        methods: {
            getFile(event) {
                let image = event.target.files[0];
                this.$emit("getimage", image)
            }
        }
    }
</script>

<style scoped>
    .pick {
        height: 30%;
    }

    .pickfile {
        margin-left: 20%;
        margin-top: 10%;
        position: relative;
        display: inline-block;
        background: #d0eeff;
        border: 1px solid #99d3f5;
        border-radius: 5px;
        padding: 8px 18px;
        overflow: hidden;
        color: #1024be;
        text-decoration: none;
        text-indent: 0;
        font: 1.2rem sans-serif;
    }

    .pickfile input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
    }

    .pickfile:hover {
        background: #aadffd;
        border-color: #78c3f3;
        color: #004974;
    }
</style>