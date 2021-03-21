<template lang="pug">
  v-card(max-width="344" min-width="320")
    v-img.white--text.align-end(:src='card.jpegLink' height='200px' )
      v-chip(x-small v-for="(badge,index) in card.badges" :key="index").ma-2 {{ badge }}

    v-card-title
      | {{ card.title }}

    v-card-subtitle
      | {{ card.subtitle }}

    v-card-actions
      v-btn(
        color='primary lighten-2'
        small
        text
        rounded
        outlined
      )
        v-icon(left) mdi-eye
        .text перейти

      v-btn(
        v-if="isUserLoggedIn"
        color='primary lighten-2'
        small
        text
        rounded
        outlined
        @click="$router.push('/edit/'+id)"
      )
        v-icon mdi-pencil

      v-spacer
      span.mx-1 {{ card.likesCount }}
      v-btn(icon @click="liked = !liked; liked ? likesCount++ : likesCount--")
        v-icon(:color="liked ? 'cyan' : 'secondary'") mdi-heart

      v-btn(icon @click="show = !show")
        v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}

    v-expand-transition
      div(v-show='show')
        v-divider
        v-card-text
          | I&apos;m a t

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'WorkCard',
  props: {
    card: Object,
    id: String,
  },
  data() {
    return {
      show: false,
      liked: false,
    };
  },
  computed: {
    ...mapGetters(['isUserLoggedIn']),
  },
};
</script>

<style scoped>

</style>
