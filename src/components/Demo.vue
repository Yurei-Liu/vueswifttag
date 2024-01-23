<template>
  <div style="width: 80%">
    <VueSwiftTag :swiftTagItems="swiftTagItems" />

    <div id="auditArea" style="height: 500px; margin-bottom: 3%; margin-top: 3%; border: 1px solid; border-radius: 5px">
      <p style="margin-left: 1%">發查審核區</p>
      <hr />
      <div></div>
    </div>
    <div id="basicInfo" style="height: 500px; margin-bottom: 3%; border: 1px solid; border-radius: 5px">
      <p style="margin-left: 1%">案件基本資訊</p>
      <hr />
      <div></div>
    </div>
    <div id="customerData" style="height: 500px; margin-bottom: 3%; border: 1px solid; border-radius: 5px">
      <p style="margin-left: 1%">客戶資料區</p>
      <hr />
      <div></div>
    </div>
  </div>
</template>

<script>
import VueSwiftTag from "./VueSwiftTag.vue";

export default {
  name: "Demo",
  data() {
    return {
      /**
       * swiftTagObj:{
       *   order: 1,
       *   id: areaId,
       *   name: "快捷測試1"
       * }
       */
      swiftTagItems: [
        {
          order: 1,
          id: "auditArea",
          name: "發查審核區",
        },
        {
          order: 2,
          id: "basicInfo",
          name: "案件基本資訊",
        },
        {
          order: 3,
          id: "customerData",
          name: "客戶資料區",
        },
      ],
    };
  },

  components: {
    VueSwiftTag,
  },
};
</script>

<style lang="scss" scoped></style>
