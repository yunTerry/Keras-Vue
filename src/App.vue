<template>
    <div>
        <h1>基于Keras卷积神经网络的图片识别</h1>
        <div class="left">
            <pick></pick>
            <resu></resu>
        </div>
        <imgview></imgview>
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
