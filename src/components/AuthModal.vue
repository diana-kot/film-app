<template>
  <div>
    <transition name="fade" appear>
      <div class="modal-overlay"></div>
    </transition>

    <modal
      name="auth-modal"
      classes="auth-modal"
      height="394px"
      width="304px"
      :resizable="true"
      :adaptive="true"
      :clickToClose="false"
      :overlay-fade="false"
    >
      <form @submit.prevent="submitHandler">
        <span class="card-title">Вход</span>
        <div class="text__div">
          <input
            class="input__form"
            id="name"
            type="text"
            placeholder="Логин"
            v-model.trim="name"
            :class="{
              invalid: $v.name.$dirty && !$v.name.required,
            }"
          />
          <small
            class="helper-text invalid"
            v-if="$v.name.$dirty && !$v.name.required"
            >Поле Логин не должно быть пустым</small
          >
        </div>
        <div class="text__div">
          <input
            class="input__form"
            id="password"
            type="password"
            placeholder="Пароль"
            v-model.trim="password"
            :class="{
              invalid:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength),
            }"
          />

          <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
          >
            Введите пароль
          </small>
          <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
          >
            Пароль должен быть
            {{ $v.password.$params.minLength.min }} символов. Сейчас он
            {{ password.length }}
          </small>
        </div>

        <div class="check">
          <input id="cbx1" type="checkbox" v-model="checked" />
          <label for="cbx1" class="cbx">
            <span class="txt__form">Запомнить</span>
            <div class="flip">
              <div class="front"></div>
              <div class="back">
                <svg width="16" height="14" viewBox="0 0 16 14">
                  <path d="M2 8.5L6 12.5L14 1.5"></path>
                </svg>
              </div>
            </div>
          </label>
          
        </div>
        <button type="submit" class="btn form__button">Войти</button>
      </form>
    </modal>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

import { mapActions } from "vuex";
export default {
  name: "auth-modal",
  data: () => ({
    isAuthModalOpen: true,
    name: "",
    password: "",
    agree: false,
    mode: "signIn",
    checked: false,
  }),
  validations: {
    name: { required },
    password: { required, minLength: minLength(6) },
  },
  mounted() {
    this.$modal.show("auth-modal");
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    this.checked = initialValue.checked;
    if (this.checked === true) {
      this.name = initialValue.name;
      this.password = initialValue.password;
    }
  },

  // computed: {
  //   ...mapGetters({ getUser: "user/getUser" }),

  //   userFromState() {
  //     return this.getUser;
  //   },
  //   // isSignInForm() {
  //   //   return this.mode === "signIn";
  //   // },
  // },

  methods: {
    ...mapActions(["user/setUser"]),

    //  changeUserState() {
    //   if (this.auth) {
    //     localStorage.removeItem('auth')
    //     this.$router.push({ name: 'main'})
    //   } else {
    //     localStorage.setItem('auth', true)
    //     this.auth = true
    //   }
    // },
    // close() {
    //   console.log('Colose modal');
    //   this.$emit("close");
    // },
    // showUser(){
    //   this.$emit("showUser");
    // },
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const fromdata = {
        name: this.name,
        password: this.password,
        checked: this.checked,
        // isSignIn: true
      };

      try {
        await this.$store.dispatch("user/setUser", fromdata);
        localStorage.setItem("user", JSON.stringify(fromdata));
        console.log('getFromData');
        // if (localStorage.getItem("checked") === "true") {
        //   const saved = localStorage.getItem("user");
        //   const initialValue = JSON.parse(saved);
        //   return initialValue || "";
        // }
        this.$emit("close");
      } catch (e) {
        console.log(e);
      }
    },
    signIn() {},
  },
};
</script>

<style lang="scss">
@import "../scss/vars.scss";
@import "../scss/style.scss";
.auth-modal {
  padding: 30px 40px;

  form {
    display: flex;
    flex-direction: column;

    .input__form {
      font-size: 16px;
      line-height: 19px;
      border-bottom: 1px solid $colorDark;
      box-sizing: border-box;
      margin-bottom: 24px;
      height: 25px;
      width: 232px;
      transition: all 0.5s ease 0s;
    }

    .text__div {
      position: relative;
    }

    .helper-text {
      color: $colorBtnHover;
      font-size: 12px;
      position: absolute;
      top: 50%;
      left: 0;
    }
    .card-title {
      font-weight: 500;
      font-size: 28px;
      margin-bottom: 23px;
      text-align: center;
    }
    .form__button {
      max-width: 113px;
      margin-top: 130px;
      margin-left: 25%;
      font-weight: 600;
    }

    // Чекбокс............................

    .check {
      display: inline-block;
      position: relative;
      margin-left: 13px;
    }
    .cbx {
      position: absolute;
      top: 14px;
      left: 0px;
      margin: -12px;
      border: 1px solid $colorDark;
      background-color: $backgroundColor;
      border-radius: 4px;
      transform: translate3d(0, 0, 0);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .flip {
      display: block;
      transition: all 0.4s ease;
      transform-style: preserve-3d;
      position: relative;
      width: 16px;
      height: 16px;
    }
    input[type="checkbox"] {
      display: none;
    }

    input[type="checkbox"]:checked + .cbx .flip {
      transform: rotateY(180deg);
    }
    .front,
    .back {
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      border-radius: 4px;
    }
    .front {
      background: $backgroundColor;
    }
    .back {
      transform: rotateY(180deg);
      background: $backgroundColor;
      text-align: center;
    }
    .back svg {
      margin-bottom: 5px;
      fill: none;
      width: 10px;
    }
    .back svg path {
      stroke: $colorBtnHover;
    }
    .txt__form {
      font-size: 19px;
      text-align: left;
      align-items: center;
      left: 28px;
      position: absolute;
      // top: 10px;
    }
  
  }

  /* ---------------------------------- */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s linear;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    z-index: 0;
  }

  .pop-enter-active,
  .pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
  }
  .modal-overlay {
    content: "";
    position: absolute;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: $colorDark;
    opacity: 0, 6;
    cursor: pointer;
  }
}
</style>
