<template>
  <div>
    <div class="modal-overlay"></div>

    <modal
      name="auth-modal"
      classes="auth-modal"
      height="394px"
      width="304px"
      :resizable="true"
      :adaptive="true"
      @before-close="close"
    >
      <form @submit.prevent="submitHandler">
        <span class="card-title">Вход</span>
        <div>
          <input
            class="input__form"
            id="name"
            type="login"
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
        <div>
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
            Пароль должен быть {{ $v.password.$params.minLength.min }} символов.
            Сейчас он {{ password.length }}
          </small>
        </div>

        <div class="check">
          <input id="cbx1" type="checkbox" />
          <label class="cbx" for="cbx1">
            <div class="flip">
              <div class="front"></div>
              <div class="back">
                <svg width="16" height="14" viewBox="0 0 16 14">
                  <path d="M2 8.5L6 12.5L14 1.5"></path>
                </svg>
              </div>
            </div>
          </label>
          <span class="txt__form">Запомнить</span>
        </div>
        <button
          type="submit"
          class="btn form__button"
          @click="mode = isSignInForm ? 'signUp' : 'signIn'"
        >
          Войти
        </button>
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
    name: "",
    password: "",
    agree: false,
    mode: "signIn",
  }),
  validations: {
    name: { required },
    password: { required, minLength: minLength(6) },
  },
  mounted() {
    this.$modal.show("auth-modal");
  },
  computed: {
    isSignInForm() {
      return this.mode === 'signIn'
    }
  },

  methods: {
    ...mapActions(['user/setUser']),

     changeUserState() {
      if (this.auth) {
        localStorage.removeItem('auth')
        this.$router.push({ name: 'main'})
      } else {
        localStorage.setItem('auth', true)
        this.auth = true
      }
    },
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name,
        password: this.password,
      };

      try {
        // await this.$store.dispatch("login", formData);
        // console.log(formData);
        localStorage.setItem('user', JSON.stringify(formData))
        await this.$store.dispatch('user/setUser', formData )
        this.$emit("close");
      } catch (e) {
        console.log(e);
      }
    },
      signIn(){
        
      },





  
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

    .helper-text {
      color: $colorBtnHover;
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
    }

    // Чекбокс............................

    .check {
      display: inline-block;
      position: relative;
      margin-left: 13px;
    }
    .cbx {
      position: absolute;
      top: 55%;
      left: 0%;
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
      z-index: 66;
      top: 2px;
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
      margin-left: 12px;
    }
  }
}
.v--modal-overlay {
  background: red;
}
.v--modal-overlay[data-modal="auth-modal"] {
  background: red;
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
  opacity: 0.6;
  cursor: pointer;
}
</style>
