<template>
  <div class="res-con">
    <load
      v-if="$store.state.ifsucc===1"
      class="mesg"
      :size="50"
      :width="6"
      indeterminate
      color="purple"
    />
    <ve-bar v-else-if="$store.state.ifsucc===2" :data="chartData" :settings="chartSettings" />
    <p class="mesg" v-else>{{$store.state.msg}}</p>
  </div>
</template>

<script>
// 引入v-charts中条形图
import VeBar from "v-charts/lib/bar.common";
//导入vuetify中加载组件
import VProgressCircular from "vuetify/es5/components/VProgressCircular";
import "vuetify/src/stylus/app.styl";

export default {
  name: "result",
  components: {
    VeBar,
    load: VProgressCircular
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
    return {};
  },
  computed: {
    chartData() {
      return {
        columns: ["label", "probability"],
        rows: this.$store.state.possblity
      };
    }
  }
};
</script>

<style scoped>
.res-con {
  padding: 40px 50px 0 0;
}
.mesg {
  margin: 20% 0 0 30%;
  font-size: 1.2rem;
  color: red;
}
</style>