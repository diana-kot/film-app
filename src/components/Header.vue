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
          <input
            placeholder="Поиск..."
            type="search"
            class="middle__input"
            v-model="userSearch"
          />
          <button type="submit" class="middle__btn">Найти</button>
        </form>
      </div>
      <div @click="onAuthBtnClick" class="header__right right">
        <a href="#" :class="classes"  class="right__btn btn" @click="$emit('click')"
         > 
          {{ getUser ? 'Выйти' : 'Вход' }}
        </a>
      </div>
    </div>
    <auth-modal
      v-if="isAuthModalOpen"
      @close="isAuthModalOpen = false"
    />
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AuthModal from './AuthModal'

export default {
  name: "Header",
  components: { AuthModal },
  data() {
    return {
      userSearch: "",
      isAuthorized: false,
      isAuthModalOpen: false,
      classes:{
        success: false,
        danger: false,
      }
    };
  },
  computed:{
    ...mapGetters({getUser: 'user/getUser'})
  },
  created() {
    this.setUser(JSON.parse(localStorage.getItem('user')))
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
      deleteUser: 'user/deleteUser'
    }),
    onAuthBtnClick() {
      if (this.getUser) {
        let c = this.classes
        c.success = 'true'
        localStorage.removeItem('user')
        this.deleteUser()
      } else {
        this.isAuthModalOpen = false
      }
    }
  }

};
</script>

<style lang="scss" scoped>
@import "../scss/vars.scss";

.success {
  background-color: $backgroundColor;
  color: $colorBtn;
  &:hover{
     color:$backgroundColor;
  }

}

.header {
  margin-bottom: 42px;
  padding-top: 34px;

  // .header__container

  &__container {
    display: flex;
    flex: 1 1 auto;
    min-height: 40px;
    align-items: center;
    justify-content: space-between;
  }

  // .header__left

  &__left {
    display: flex;
    align-items: center;
  }

  // .header__middle

  &__middle {
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
    width: 400px;
    height: 25px;
    color: $colorGray;
    background: $backgroundColor;
    display: flex;
    gap: 32px;
    margin-right: 90px;
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
</style>
