<template>
  <div class="mt-1" style="width: 80%; display: inline-flex">
    <template v-if="swiftTagItems.length > 0">
      <div
        v-for="(tagItem, index) in swiftTagItems"
        :key="index"
        class="fixed-bookmark"
        :style="'order:' + tagItem.order"
        @click="toBlock(tagItem.id)"
      >
        <i class="fa-light fa-paper-plane mr-1" /> {{ tagItem.name }}
      </div>
    </template>
    <template v-else>
      <p>目前尚無快捷標籤</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "VueSwiftTag",
  props: ["swiftTagItems", "tagBackgroundColor", "tagBorderColor", "tagFontColor", "tagHoverBackgroundColor", "tagHoverFontColor"],
  data() {
    return {
      /**
       * swiftTagObj:{
       *   order: 1,
       *   id: areaId,
       *   name: "快捷測試1"
       * }
       */
    };
  },

  mounted() {
    this.styleInit();
  },

  methods: {
    styleInit() {
      // 主要底色
      if (this.tagBackgroundColor) {
        document.getElementsByTagName("body")[0].style.setProperty("--mainBackgroundColor", this.tagBackgroundColor);
      }
      // 主要border顏色
      if (this.tagBorderColor) {
        document.getElementsByTagName("body")[0].style.setProperty("--mainBorderColor", this.tagBorderColor);
      }

      // 主要font color
      if (this.tagFontColor) {
        document.getElementsByTagName("body")[0].style.setProperty("--mainColor", this.tagFontColor);
      }

      // hover底色
      if (this.tagHoverBackgroundColor) {
        document.getElementsByTagName("body")[0].style.setProperty("--hoverBackgroundColor", this.tagHoverBackgroundColor);
      }

      // hover color
      if (this.tagHoverFontColor) {
        document.getElementsByTagName("body")[0].style.setProperty("--hoverColor", this.tagHoverFontColor);
      }
    },

    toBlock(id) {
      document.querySelector("#" + id).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
// 主要底色
$mainBackgroundColor: var(--mainBackgroundColor, #416364);
// 主要border顏色
$mainBorderColor: var(--mainBorderColor, #586853);
// 主要font color
$mainColor: var(--mainColor, white);

// hover底色
$hoverBackgroundColor: var(--hoverBackgroundColor, #f8e4ae);
// hover color
$hoverColor: var(--hoverColor, #29140a);

.fixed-bookmark {
  background-color: $mainBackgroundColor;
  border: 0.5px solid $mainBorderColor;
  color: $mainColor;
  border-radius: 10px;
  padding: 3px 10px;
  font-size: 13px;
  margin: 3px;

  transition: 0.3s;
  box-shadow: 1px 2px 2px rgb(177, 177, 177);
}

.fixed-bookmark:hover {
  background-color: $hoverBackgroundColor;
  color: $hoverColor;
  font-weight: bold;
  cursor: pointer;
}
</style>
