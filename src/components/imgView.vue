<template>
    <div class="imgview">
        <div class="imgbox">
            <img :src="imgUrl">
        </div>
    </div>
</template>

<script>
    export default {
        name: "imgView",
        props: {
            imgUrl: String,
        }
    }
</script>

<style scoped>
    .imgview {
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