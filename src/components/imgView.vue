<template>
  <div class="imgbox">
    <img :src="$store.state.image" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.imgbox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgbox img {
  margin-top: 60px;
  max-width: 100%;
  max-height: 100%;
}
</style>