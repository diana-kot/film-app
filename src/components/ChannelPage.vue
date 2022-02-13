<template>
  <div>
    <channels-display :objects="channelList" />
  </div>
</template>

<script>
import ChannelsDisplay from "../components/ChannelsDisplay.vue";

export default {
  components: { ChannelsDisplay },
  name: "App",
  data() {
    return {
      show: true,
      channelList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          img: "..//channel/one.png",
          attr1: [
            {
              attr2: "Первый канал",
            },

            {
              attr2: "13:00",
              attr3: ["Новости (с субтитрами)"],
            },
            {
              attr2: "14:00",
              attr3: ["Давай поженимся"],
            },
            {
              attr2: "15:00",
              attr3: ["Другие новости"],
            },
          ],
        },
        {
          img: "..//channel/twotwo.jpg",
          attr1: [
            {
              attr2: "2x2",
            },
            {
              attr2: "13:00",
              attr3: ["МУЛЬТ ТВ. Сезон 4, 7 серия"],
            },
            {
              attr2: "14:00",
              attr3: ["ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"],
            },
            {
              attr2: "15:00",
              attr3: ["БУРДАШЕВ. Сезон 1, 20 серия"],
            },
          ],
        },
        {
          img: "..//channel/rbk.jpg",
          attr1: [
            {
              attr2: "РБК",
            },
            {
              attr2: "13:00",
              attr3: ["ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС"],
            },
            {
              attr2: "14:00",
              attr3: ["ДЕНЬ. Главные темы"],
            },
            {
              attr2: "15:00",
              attr3: ["Главные новости"],
            },
          ],
        },
        {
          img: "..//channel/fourth.jpg",
          attr1: [
            {
              attr2: "AMEDIA PREMIUMК",
            },
            {
              attr2: "13:00",
              attr3: ["Клиент всегда мёртв"],
            },
            {
              attr2: "14:00",
              attr3: ["Голодные игры: Сойка-пересмешница. Часть I"],
            },
            {
              attr2: "15:00",
              attr3: ["Секс в большом городе"],
            },
          ],
        },
      ];
    },
  },
  created() {
    this.channelList = this.fetchData();
  },
};
</script>

<style lang="scss" scoped></style>
