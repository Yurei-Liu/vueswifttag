# vueswifttag

## 目的

    在Vue框架中，提供可快速跳轉至某區塊的自定義快捷標籤。

## 安裝

    npm install vueswifttag

## 用法

#### 簡易範例

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
            }
        },

        components: {
            VueSwiftTag,
        },
    }

    </script>

#### 變數用途

| 變 數 名 稱             |        用 途         |
| ----------------------- | :------------------: |
| swiftTagItems           |     快捷標籤陣列     |
| tagBackgroundColor      |     快捷標籤底色     |
| tagBorderColor          |   快捷標籤邊框顏色   |
| tagFontColor            |   快捷標籤文字顏色   |
| tagHoverBackgroundColor |   快捷標籤懸停底色   |
| tagHoverFontColor       | 快捷標籤懸停文字顏色 |

##### swiftTagItems 資料格式

| 欄 位 名 稱 | 欄 位 值 |
| ----------- | :------: |
| order       | 區塊排序 |
| id          | 區塊 ID  |
| name        | 區塊名稱 |

### 範例

See [Demo](https://yurei-liu.github.io/vueswifttag/).
