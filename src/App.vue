<template>
  <div>
    <h1>基于Keras卷积神经网络的图片识别</h1>
    <div id="main">
      <div id="left">
        <pick id="pick" />
      </div>
      <imgview id="right" />
    </div>
  </div>
</template>

<script>
import pickPhoto from "./components/pickPhoto";
import imgView from "./components/imgView";

export default {
  components: {
    pick: pickPhoto,
    imgview: imgView,
  }
};
</script>

<style scoped>
h1 {
  margin: 30px;
  text-align: center;
}
#main {
  display: flex;
  margin: auto 50px;
  height: 600px;
  justify-content: center;
}
#left {
  flex: 1;
  margin-right: 40px;
}
#right {
  flex: 1;
}
#pick {
  height: 30%;
}
#resu {
  height: 70%;
}
</style>
