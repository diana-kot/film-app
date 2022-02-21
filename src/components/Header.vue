<template>
  <header class="header">
    <div class="header__container _container">
      <div class="header__left left">
        <router-link :to="{ name: 'home' }" class="left__link">
          <div class="left__logo">
            <img alt="logo" src="../assets/logo.svg" />
          </div>
          <div class="left__txt">Видеосервис</div>
        </router-link>
      </div>
      <div class="header__middle middle">
        <form action="#" method="get" class="middle__form">
          <input placeholder="Поиск..." type="search" class="middle__input" />
          <button type="submit" class="middle__btn">Найти</button>
        </form>
      </div>
      <div class="wrapper__name">
        <div class="user__name" v-show="isAuthorized">
          <input
            class="user__input"
            :value="name"
            type="text"
            @input="onChangeName($event)"
          />
        </div>
        <div class="header__right right" @click="onAuthBtnClick">
          <a
            href="#"
            :class="className"
            class="right__btn btn"
            v-if="getUser ? this.success : this.unsuccess"
          >
            {{ getUser ? "Выйти" : "Вход" }}
          </a>
        </div>
      </div>
    </div>
    <auth-modal v-show="isAuthModalOpen" @close="closeModal" />
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AuthModal from "./AuthModal";

export default {
  name: "Header",
  components: { AuthModal },
  data() {
    return {
      isAuthorized: false,
      isAuthModalOpen: false,
      success: {
        type: Boolean,
        default: true,
      },
      unsuccess: {
        type: Boolean,
        default: false,
      },
    };
  },
  computed: {
    ...mapGetters({ getUser: "user/getUser" }),
    name() {
      localStorage.setItem("userNew", JSON.stringify(this.getUser));
      return this.getUser ? this.getUser.name : "";
    },

    className() {
      return this.getUser ? "success" : "unsuccess";
    },
  },
  created() {
    this.setUser(JSON.parse(localStorage.getItem("userNew")));
    this.getUser();
  },
  mounted() {
    if (this.getUser) {
      this.isAuthorized = "true";
    }
    const strName = localStorage.getItem("userNew");
    const parsName = JSON.parse(strName);
    this.getUser.name = parsName.name;
  },

  methods: {
    ...mapActions({
      setUser: "user/setUser",
      deleteUser: "user/deleteUser",
    }),
    onAuthBtnClick() {
      if (this.getUser) {
        this.isAuthorized = false;
        this.deleteUser();
        localStorage.removeItem("userNew");
      } else {
        this.isAuthModalOpen = true;
      }
    },
    onChangeName(event) {
      this.getUser.name = event.target.value;
    },
    closeModal() {
      this.isAuthModalOpen = false;
      this.isAuthorized = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/vars.scss";
@import "../scss/style.scss";

.success {
  background-color: $backgroundColor;
  color: $colorBtn;
  padding: 0;
  font-weight: 500;
  line-height: 19px;
  &:hover {
    background-color: $backgroundColor;
  }
}
.unsuccess {
  background-color: $colorBtn;
  color: $backgroundColor;
  padding: 0px 37px;
  margin-left: 70px;
  &:hover {
    background-color: $colorBtnHover;
  }
}
.header {
  margin-bottom: 42px;
  padding-top: 34px;

  // .header__container

  &__container {
    display: flex;
    height: 40px;
    align-items: center;
  }

  // .header__left

  &__left {
    display: flex;
    align-items: center;
    margin-right: 208px;
  }

  // .header__middle

  &__middle {
    width: 402px;
  }
}
.left {
  // .left__txt

  &__txt {
    font-size: 20px;
    line-height: 24px;
    color: $colorDark;
    font-weight: 500;
  }

  //.left__link
  &__link {
    display: flex;
    gap: 12px;
    align-items: center;
  }
}
.middle {
  margin-right: 207px;
  // .middle__form

  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 25px;
    color: $colorGray;
    background: $backgroundColor;
    display: flex;
    gap: 32px;
  }

  // .middle__input

  &__input {
    width: 320px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 1px solid #333333;
    outline: none;
    color: $colorDark;
    font-size: 16px;
    line-height: 19/16 * 100%;
    font-weight: 600;
    transition: 0.4s;
    &:focus {
      outline: 0;
      background: transparent;
      ::placeholder {
        opacity: 0;
      }
    }
    &::placeholder {
      font-weight: 400;
    }
  }

  // .middle__btn

  &__btn {
    color: $colorBtn;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    background-color: $backgroundColor;
    transition: background-color 0.3s ease 0s;
    &:hover {
      background-color: $colorBtnHover;
      color: $backgroundColor;
    }
  }
}

input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.user__input {
  display: flex;
  font-size: 16px;
  width: 114px;
  height: 19px;
  padding-right: 4px;
  padding-left: 4px;
  color: $colorDark;
  font-weight: 600;
  margin-right: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wrapper__name {
  display: flex;
  align-items: center;
  position: relative;
}

@media (max-width: 1023px) {
  ._container {
    padding-left: calc(50% - #{$widthSiteSml / 2});
    padding-right: calc(50% - #{$widthSiteSml / 2});
  }
  .middle__input {
    width: 220px;
  }
  .middle {
    margin-right: 20px;
  }
  .header__left {
    margin-right: 20px;
  }
  .wrapper__name {
    flex-flow: column-reverse;
    align-items: flex-end;
  }
  .user__input {
    margin-right: 0px;
    font-size: 14px;
  }
   .unsuccess {
    margin-left: 0px;
  }
}

@media (max-width: 767px) {
  ._container {
    padding-left: 16px;
    padding-right: 16px;
  }
  .header__middle {
    width: 9px;
  }
  .middle__form {
    justify-content: flex-start;
  }
  .header__container {
    justify-content: space-between;
  }
  .header__middle {
    position: absolute;
    top: 100px;
    left: 20%;
  }
}

@media (max-width: 425px) {
  .middle__form {
    width: 0px;
  }
  .middle__input {
    width: 150px;
  }
  .user__input {
    width: 100px;
  }
  .unsuccess {
    padding: 0px 24px;
  }
  .wrapper__name{
    align-items: center;
  }
}
</style>
