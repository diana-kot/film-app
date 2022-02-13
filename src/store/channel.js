// export const localDB = {
//     page1: [
//       {
//         id: 1,
//         title: "Первый канал",
//         program: [
//           {
//             date: "13:00",
//             value: "Новости (с субтитрами)",
//           },
//           {
//             date: "14:00",
//             value: "Давай поженимся",
//           },
//           {
//             date: "15:00",
//             value: "Другие новости",
//           },
//         ],
//       },
//     ],
//     page2: [
//       {
//         id: 2,
//         title: "2x2",
//         program: [
//           {
//             date: "13:00",
//             value: "МУЛЬТ ТВ. Сезон 4, 7 серия",
//           },
//           {
//             date: "14:00",
//             value: "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия",
//           },
//           {
//             date: "15:00",
//             value: "БУРДАШЕВ. Сезон 1, 20 серия",
//           },
//         ],
//       },
//     ],
//     page3: [
//       {
//         id: 3,
//         title: "РБК",
//         program: [
//           {
//             date: "13:00",
//             value: "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС",
//           },
//           {
//             date: "14:00",
//             value: "ДЕНЬ. Главные темы",
//           },
//           {
//             date: "15:00",
//             value: "Главные новости",
//           },
//         ],
//       },
//     ],
//     page4: [
//       {
//         id: 4,
//         title: "AMEDIA PREMIUM",
//         program: [
//           {
//             date: "13:00",
//             value: "Клиент всегда мёртв",
//           },
//           {
//             date: "14:00",
//             value: "Голодные игры: Сойка-пересмешница. Часть I",
//           },
//           {
//             date: "15:00",
//             value: "Секс в большом городе",
//           },
//         ],
//       },
//     ],
//   };
  
//   export default new Vuex.Store({
//     state: {
//       channelList: [],
//       channelListIds: [],
//     },
//     mutations: {
//       setChannelListData(state, payload) {
//         state.channelList = payload
//       },
//     },
//     getters: {
//       getchannelList: (state) => state.channelList,
//     },
//     actions: {
//       fetchData({ commit }, page) {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             const items = localDB[`page${page}`];
//             resolve(items);
//           }, 0);
//         }).then((res) => commit("setChannelListData", res));
//       },
//     },
//   });