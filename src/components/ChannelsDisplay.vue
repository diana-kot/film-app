<template>
  <div>
    <table class="iksweb">
      <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
        <div class="scroll-me">
          <tbody class="channel__items">
            <tr class="channel__item" v-for="obj in objects" :key="obj.id">
              <td class="channel__td">
                <div class="channel__image">
                  <img :src="obj.img" :alt="obj.id" class="channel-img" />
                </div>
              </td>
              <td class="channel__txt inner">
                <table class="table">
                  <tbody>
                    <tr
                      class="channel__red"
                      v-for="subobj in obj.attr1"
                      :key="subobj.id"
                    >
                      <td colspan="5">{{ subobj.attr2 }}</td>
                      <td class="inner">
                        <div v-for="val in subobj.attr3" :key="val.id">
                          {{ val }}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </div>
      </vue-scrollbar>
    </table>
  </div>
</template>

<script>
import VueScrollbar from "vue2-scrollbar";
// It's required to set min height of the scrollbar wrapper
// require("./your/custom/style/app.css");

export default {
  name: "ChannelsDisplay",
  components: { VueScrollbar },
  props: {
    objects: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getImg() {},
  },
};
</script>

<style lang="scss">
@import "../scss/vars.scss";
@import "../scss/vue2-scrollbar.scss";

/*The Wrapper*/
.my-scrollbar {
  max-height: 700px;
  width: 100%;
  min-width: $maxWidth;
}

/*The Content*/
.scroll-me {
  min-height: 700px;
  width: 100%;
  min-width: $maxWidth;
}

.vue-scrollbar__scrollbar-vertical {
  height: 100%;
  width: 8px;
  background: $colorScrol;
  display: flex;
  justify-content: center;
}

.vue-scrollbar__scrollbar-vertical .scrollbar {
  width: 4px;
  border-radius: 2px;
  background: $colorScrolDip;
  max-height: 71%;
}

.content {
  display: flex;
  flex-direction: column;
}
table.iksweb {
  width: 100%;
  border-spacing: 0;
  height: auto;
  width: 100%;
  margin-bottom: 56px;
}

table > tbody > tr > td.inner {
  padding: 6px;
  margin-left: 16px;
}

tr.channel__red:nth-child(2) {
  color: $colorBtn;
}

td.channel__red:nth-child(2) {
  color: $colorBtn;
}

tr.channel__red:nth-child(1) {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  width: 300px;
}

.channel__td {
  position: relative;
  padding: 0px 400px 0px 0px;
}
.channel__item {
  display: flex;
  margin-bottom: 16px;
  background-color: $colorLidhtGray;
  padding: 18px;
  border-radius: 8px;
  width: $maxWidth;
  margin-right: 8px;
}

.channel__image img {
  position: absolute;
  top: 30%;
  left: 50%;
  object-fit: cover;
  transform: translateX(-50%);
  //  border: 1px solid;
}

.channel__txt {
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  //  border: 1px solid;
}
table.table {
  display: flex;
  flex-direction: column;
}

@media (max-width: 1023px) {
  .scroll-me {
    min-width: $maxWidthChannel/1.65;
  }
  .channel__item {
    width: $maxWidthChannel/1.65;
  }
  .my-scrollbar {
    min-width: 0px;
  }
}

@media (max-width: 767px) {
  .channel__td {
    margin-bottom: 12px;
  }

  .channel__txt {
    font-size: 16px;
    line-height: 14px;
  }

  .channel__image img {
    position: relative;
    left: 60px;
  }

  .channel__item {
    flex-direction: column;
  }

  table > tbody > tr > td.inner > div {
    margin-left: 0px;
  }

  .scroll-me {
    min-width: $maxWidthChannel/3.2;
  }
  .channel__item {
    width: $maxWidthChannel/3.2;
  }
  .my-scrollbar {
    min-width: 0px;
  }
}

@media (max-width: 375px) {
  .scroll-me {
    min-width: $maxWidthChannel/3.6;
  }
  .channel__item {
    width: $maxWidthChannel/3.6;
  }
  .my-scrollbar {
    min-width: 0px;
  }
}

@media (max-width: 320px) {
  .scroll-me {
    min-width: $maxWidthChannel/4.3;
  }
  .channel__item {
    width: $maxWidthChannel/4.3;
  }
  .my-scrollbar {
    min-width: 0px;
  }
}
</style>
