<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__left">
        <img alt="Vue logo" src="../assets/Vector.svg" />
      </div>
      <div class="footer__right">
        <p>
          426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
          246 (ДК «Металлург»)
        </p>
        <p>+7 (3412) 93-88-61, 43-29-29</p>
        <a class="footer__link" href="https://htc-cs.ru/">htc-cs.ru</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "../scss/vars.scss";

.footer {
  background-color: $backgroundColorFooter;
  padding-top: 22px;
  padding-bottom: 25px;

  // .footer__container

  &__container {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  // .footer__right

  &__right {
    display: flex;
    justify-content: left;
    flex-direction: column;
    gap: 6px;
    font-size: 16px;
    line-height: 19px;
  }

  //.footer__link
  &__link {
    color: $colorLink;
    font-weight: 500;
    transition: background-color 0.3s ease 0s;
    &:hover {
      filter: saturate(190%);
    }
  }

  @media (max-width: 767px) {
    .footer__right {
      font-size: 14px;
    }
  }
}
</style>
