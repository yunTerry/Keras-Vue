<template>
    <div>
        <ve-bar v-if="ifsucc===2" :data="chartData" :settings="chartSettings"></ve-bar>
        <p class="mesg" v-if="ifsucc>2">{{errmsg}}</p>
        <v-progress-circular v-if="ifsucc===1" class="mesg" :size="50" :width="6"
                             indeterminate color="purple"></v-progress-circular>
    </div>
</template>

<script>

    // 引入v-charts中条形图
    import VeBar from 'v-charts/lib/bar.common'
    //导入vuetify中加载组件
    import VProgressCircular from 'vuetify/es5/components/VProgressCircular'
    import 'vuetify/src/stylus/app.styl'

export default {
  name: "result",
  components: {
    VeBar,
    VProgressCircular
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
    ifsucc: function() {
      //1开始加载 2请求成功 3请求失败 4其他错误
      return this.$store.state.ifsucc;
    },
    chartData: function() {
      return {
        columns: ["label", "probability"],
        rows: this.$store.state.possblity
      };
    },
    errmsg: function() {
      return this.$store.state.msg;
    }
  }
};
</script>

<style scoped>

.mesg {
  margin: 10% 0 0 20%;
  font-size: 1.2rem;
  color: red;
}

v-progress-circular {
  text-align: center;
  z-index: 3;
}
</style>