// src/components/index.js
import VueSwiftTag from "./VueSwiftTag.vue";

VueSwiftTag.install = function (Vue) {
  Vue.component("vue-swift-tag", VueSwiftTag);
};

export default VueSwiftTag;
