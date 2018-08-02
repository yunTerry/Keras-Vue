<template>
  <div>
    <div class="left">
      <div class="pick">
          <a href="javascript:;" class="pickfile">选取图片
              <input type="file" accept="image/*" @change="preview($event)">
          </a>
      </div>
      <div class="result">
           <ve-bar :data="chartData" :settings="chartSettings"></ve-bar>
      </div>
    </div>
    <div class="right">
      <div class="imgbox">
          <img :src="imgurl">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      labelMap: {
        label: "标签",
        probability: "识别结果"
      },
      dataOrder: {
        label: "probability",
        order: "desc"
      }
    };
    return {
      imgurl: "",
      chartData: {
        columns: ["label", "probability"],
        rows: []
      }
    };
  },
  methods: {
    preview(event) {
      let _this = this;
      var image = event.target.files[0];
      if (!event || !window.FileReader) return;
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = function() {
        _this.imgurl = this.result;
      };
      let fdata = new FormData();
      fdata.append("image", image);
      this.$http
        .post("/predict", fdata, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(function(res) {
          if (res.data.success) {
            _this.chartData.rows = res.data.predictions;
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
.pick {
  height: 30%;
}
.result {
  height: 70%;
}
.pickfile {
  margin-left: 30%;
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

.right {
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
  margin:  40px;
}
</style>
