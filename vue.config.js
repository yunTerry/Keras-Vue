module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/predict': {
        target: 'http://192.168.1.30',
        ws: false,
        changeOrigin: true
      }
    }
  },
}