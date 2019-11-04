<template>
  <div>
    <ve-bar v-if="$store.state.ifsucc===2" :data="chartData" :settings="chartSettings" />
    <dir class="res-con" v-else>
      <load v-if="$store.state.ifsucc===1" :size="50" :width="6" indeterminate color="purple" />
      <p class="mesg" v-else>{{$store.state.msg}}</p>
    </dir>
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
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.mesg {
  font-size: 1.2rem;
  color: red;
}
</style>