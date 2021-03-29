<template lang="pug">
  header.header
    v-row(min-height="70vh")
      .col-xs-12.col-sm-6.d-flex.justify-center.align-center
        div
          .text-sm-h5.font-weight-light Здравствуйте, меня зовут
          h1.text-h5.text-sm-h4.font-weight-bold Павел Дубицкий
          .text-subtitle-1.text-h3.text--secondary.font-weight-regular
            .text Я - разработчик сайтов и приложений

          Contacts.mt-4(:outlined="true" :large="true" :size="24")

          .mt-6
            a.text-decoration-none(href="https://t.me/pullso" target="_blank")
              v-btn.header__btn.mr-4.my-2.mt-sm-0.primary(x-large)
                .text Связаться

            a.text-decoration-none(href="https://ekaterinburg.hh.ru/resume/a939d016ff07ebc4d10039ed1f626158574238" target="_blank")
              v-btn.header__btn.mt-sm-0.my-2(outlined color="primary" x-large)
                .text Резюме

      .col-xs-12.col-sm-6
        v-lazy
          v-img.header__img(
            bottom
            contain
            alt="man photo"
            src="../assets/man_min.png"
            max-height="450px"
          )

        v-divider

</template>

<script>
import Contacts from '@/components/Contacts.vue';

export default {
  name: 'MainSection',
  components: { Contacts },
  data: () => ({
  }),
};
</script>

<style lang="stylus" scoped>
  .header
    .header
      &__btn
        border-radius: 25px
        .text
          font-size: 0.8rem

      &__img:before
        content " "
        position: absolute
        height: 100%
        width: 100%
        left: 20px
        background-image: url('../assets/header_bg_min.png')
        mix-blend-mode: multiply;
        filter: hue-rotate(120deg) invert()
        z-index: -1

    h1
      margin-top: 0

</style>
