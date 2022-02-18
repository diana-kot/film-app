<template>
  <header class="header _container">
    <div class="header__container">
      <div class="header__left left">
        <router-link :to="{ name: 'home' }" class="left__link">
          <div class="left__logo">
            <img alt="logo" src="../assets/logo.svg" />
          </div>
          <div class="left__txt">Видеосервис</div>
        </router-link>
      </div>
      <div class="header__middle middle">
        <form
          action="#"
          method="get"
          class="middle__form"
          :class="{ active: isActive }"
        >
          <input
            placeholder="Поиск..."
            type="search"
            class="middle__input"
            v-model="userSearch"
          />
          <button type="submit" class="middle__btn">Найти</button>
        </form>
      </div>
      <div class="wrapper__name">
        <div class="user__name" v-show="isAuthorized">
          <input
            class="input__name"
            :value="name"
            type="text"
            @input="onChangeName($event)"
          />
        </div>

        <div class="header__right right" @click="onAuthBtnClick">
          <a href="#" :class="classes" class="right__btn btn">
            {{ isAuthorized ? "Выйти" : "Вход" }}
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
      isActive: false,
      userSearch: "",
      isAuthorized: false,
      isAuthModalOpen: false,
      // isSignIn:false,
      classes: {
        success: false,
        right__btn: false,
      },
    };
  },
  computed: {
    
    ...mapGetters({ getUser: "user/getUser" }),
    name() {
      // this.isAuthorized = localStorage.getItem("isAuthorized");
      // localStorage.getItem("isAuthorized", JSON.stringify(this.isAuthorized)),
      localStorage.getItem("user", JSON.stringify(this.getUser));
      console.log("computed");
      return this.getUser ? this.getUser.name : "";
    },
  },
  created() {

    this.isAuthorized = localStorage.getItem("isAuthorized");
    // this.isAuthorized(localStorage.getItem("isAuthorized"));
    console.log('isAuthorized', this.isAuthorized);

    this.setUser(JSON.parse(localStorage.getItem("user")));
    this.getUser();
    console.log('reload', this.getUser)

  },

  mounted() {
    console.log(this.isAuthorized);
    console.log(this.isAuthorized ? "Выйти" : "Вход" );
    console.log(this.isAuthorized);
    if (this.getUser && this.isAuthorized) 
    {    
      console.log("user в системе");
      this.classes.success = "true";
      this.classes.right__btn = "false";
      // this.classes.user_name
      // this.isAuthorized = true;
    } else {
      // this.isAuthorized = "false";
      this.classes.right__btn = "true";
      this.classes.success = "false";
      console.log("user вышел");
    }

    // const strName = localStorage.getItem("user");
    // const parsName = JSON.parse(strName);
    // this.getUser.name = parsName.name;
  },

  methods: {
    ...mapActions({
      setUser: "user/setUser",
      // setSignIn: "user/setSignIn",
      deleteUser: "user/deleteUser",
      updateUser: "user/updateUser",
    }),
    onAuthBtnClick() {
     if (this.getUser) {
        this.classes.success = "true";
        this.classes.right__btn = "false";
        this.deleteUser();
        this.isAuthorized = false;
        localStorage.setItem("isAuthorized", this.isAuthorized);
        // this.isSignIn = false;
        // localStorage.removeItem("userNew");
        // this.isAuthModalOpen = "false";
        console.log('выход')
      } else {
        this.classes.success = "false";
        this.classes.right__btn = "true";
        this.isAuthModalOpen = "true";
        // this.isAuthorized = true;
        localStorage.getItem("user", JSON.stringify(this.setUser));
        // this.showUser();
        console.log('вход')
      }
      // console.log('Зашли сюда', this.getSignIn)
      // console.log('Зашли сюда', this.setSignIn)

      // localStorage.setItem("isAuthorized", this.isAuthorized);
    },
    onChangeName(event) {
      this.getUser.name = event.target.value;
    },

    // showUser() {
    //   if(this.isAuthModalOpen == "true")
    //     this.isAuthorized = "false";
    // },

    closeModal() {
      this.isAuthModalOpen = false;
      this.isAuthorized = true;
      localStorage.setItem("isAuthorized", this.isAuthorized);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/mob1023.scss";
@import "../scss/mob1023.scss";
@import "../scss/vars.scss";
@import "../scss/style.scss";

.success {
  background-color: $backgroundColor;
  color: $colorBtn;
  padding: 0;

  &:hover {
    color: $backgroundColor;
  }
}
.un_success {
  background-color: $colorBtn;
  color: $colorBtn;
  padding: 2px;
  &:hover {
    color: $colorBtnHover;
  }
}

.header {
  margin-bottom: 42px;
  padding-top: 34px;

  // .header__container

  &__container {
    display: flex;
    min-height: 40px;
    align-items: center;
    justify-content: space-between;
  }

  // .header__left

  &__left {
    display: flex;
    align-items: center;
    gap: 208px;
  }

  // .header__middle

  &__middle {
    width: 402px;
  }

  // .header__right

  &__right {
  }
}

.left {
  // .left__logo

  &__logo {
  }

  // .left__txt

  &__txt {
    font-size: 20px;
    line-height: 24px;
    color: $colorDark;
    font-weight: 600;
  }

  //.left__link
  &__link {
    display: flex;
    gap: 12px;
    align-items: center;
  }
}
.middle {
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

input::-webkit-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input::-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:-moz-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:-ms-input-placeholder {
  opacity: 1;
  transition: opacity 0.3s ease;
}
input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus::-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus:-moz-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}
input:focus:-ms-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.user__name {
  font-size: 16px;
  width: 114px;
  // top: 19px;
  font-weight: 500;
  // position: absolute;
  // right: 196px;
  // top: 10px;
  border: 1px solid grey;
  margin-right: 16px;
}

.wrapper__name {
  display: flex;
  align-items: center;
  position: relative;
}

.input__name {
  width: 114px;
  display: flex;
}

.user {
  font-size: 16px;
  width: 114px;
  top: 19px;
  font-weight: 500;
  color: aqua;
  border: 1px solid red;
}

@media (max-width: 1023px) {
  ._container {
    padding-left: calc(50% - #{$widthSiteSml / 2});
    padding-right: calc(50% - #{$widthSiteSml / 2});
  }

  .middle__input {
    width: 220px;
  }

  .middle__form {
    justify-content: start;
    gap: 12px;
  }

  .header__left {
    margin-right: 20px;
  }

  .wrapper__name {
    flex-flow: column-reverse;
  }

  // .header__middle {
  //   width: 10px;
  // }

  // .middle__input {
  //   width: 200px;
  // }
  // .header__left {
  //   margin-right: 160px;
  // }

  .header__container {
    justify-content: start;
  }

  // .middle__form {
  //   width: 0px;
  //   position: relative;
  // }

  // .middle__input {
  //   border-bottom: none;
  //   width: 0px;
  //   padding: 0px;
  //   transition: all 0.3s ease;
  // }

  // .active {
  //   width: 320px;
  //   padding-left: 10px;
  //   padding-right: 10px;
  //   border-bottom: 1px solid #333333;
  //   outline: none;
  //   color: $colorDark;
  //   font-size: 16px;
  //   line-height: 19/16 * 100%;
  //   font-weight: 600;
  //   transition: 0.4s;
  // }

  // .middle__btn {
  //   position: absolute;
  //   left: 45px;
  // }
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
    width: 0px;
  }

  .middle__input {
    width: 100px;
  }
}

@media (max-width: 425px) {
  .header__middle {
    position: absolute;
    top: 12%;
    left: 20%;
  }

  .middle__form {
    width: 0px;
  }

  .middle__input {
    width: 200px;
  }
}
</style>
