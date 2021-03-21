<template lang="pug">
  .navbar
    v-app-bar(app color='white' flat)
      v-container.p-0.fill-height.col-xs-12.flex-nowrap
        v-app-bar-nav-icon.mr-0.mr-sm-2(@click="drawer = !drawer")

        v-avatar.mr-0.mr-sm-2(color='secondary' size='46')
          v-img(src="../assets/avatar.jpeg")

        div.ml-2
          .text-body-2 Павел Дубицкий
          .text-sm-subtitle-2.text-body-2.text--secondary Front-End разработчик

        div.ml-2(v-if="isUserLoggedIn")
          v-btn(@click="signOut" rounded outlined icon small)
            v-icon(color="green" center small) mdi-logout

        v-spacer

        v-btn.hidden-md-and-down(
          v-for='link in links'
          :key="link.text" text
        )
          v-icon(left small color="primary") {{ link.icon }}
          .text {{ link.text }}

    v-navigation-drawer(v-model='drawer' app left temporary)
      v-list(nav)
        v-list-item-group(active-class='primary--text text--accent-4')
          v-list-item(v-for="link in links" :key='link.text')
            v-list-item-icon
              v-icon {{ link.icon }}

            v-list-item-title {{ link.text }}

</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex';

export default {
  name: 'Navbar',
  data: () => ({
    drawer: false,
    links: [
      { text: 'Работы', icon: 'mdi-book', href: '/#works' },
      { text: 'Сертификаты', icon: 'mdi-book-check' },
      { text: 'Обо мне', icon: 'mdi-file-account' },
      { text: 'Контакты', icon: 'mdi-message' },
    ],
  }),
  computed: {
    ...mapGetters(['isUserLoggedIn']),
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.go(0));
    },
  },
};
</script>

<style lang="stylus">
  .navbar
    &__btn
      margin-left: 2px

</style>
