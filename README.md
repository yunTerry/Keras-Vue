# Vue Client For Image Recognition

## Quick Start

I've packaged Tensorflow、[Keras-Vue](https://github.com/yunTerry/Keras-Vue) and ResNet-50 model into a docker image:

https://hub.docker.com/r/yunterry/keras-vue

Just run:
``` sh
docker run -p 80:80 yunterry/keras-vue
```
Open browser  `http://<your-server-ip>`

![](image/1.jpg)

For the first time, the recognition may be very slow, because the CNN model needs to be warmed up, after that it will be much faster

## Used in project

  * Axios
  * Vuex
  * Vuetify
  * Echarts
  
## Android Client

https://github.com/yunTerry/Keras-Android