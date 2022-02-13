<template>
  <perfect-scrollbar class="rr">
    <table class="iksweb">
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
                  <td>{{ subobj.attr2 }}</td>
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
    </table>
  </perfect-scrollbar>
</template>

<script>
export default {
  name: "ChannelsDisplay",
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

/* example */
.ps {
  height: 700px;
  //   color: $colorScrol;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 1;
}

.ps > .ps__thumb-y .rr {
  height: 500px !important;
   opacity: 1;
}

.ps > .ps__rail-x,
.ps > .ps__rail-y {
  opacity: 1;
}

table.iksweb {
  width: 100%;
  border-spacing: 0;
  height: auto;
  width: 100%;
  margin-bottom: 56px;
}
table > tbody > tr > td.inner {
  //   width: 100%;
}
table > tbody > tr > td.inner > div {
  padding: 6px;
  margin-left: 16px;
}

tr.channel__red:nth-child(2) {
  color: $colorBtn;
}

tr.channel__red:nth-child(1) {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}

.channel__items {
}
.channel__td {
  position: relative;
  padding: 0px 400px 0px 0px;
}
.channel__item {
  display: flex;
  margin-bottom: 16px;
  background-color: $colorLidhtGray;
  padding: 15px;
  border-radius: 8px;
}

.channel__image img {
  position: absolute;
  top: 30%;
  left: 50%;

  object-fit: cover;
  transform: translateX(-50%);
}

.channel__txt {
  font-size: 16px;
  line-height: 19px;
  text-align: left;
}
</style>
