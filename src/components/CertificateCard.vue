<template lang="pug">
  v-card(min-width="300px" max-width="400px" lazy)
    v-img.white--text.align-end(v-if="card.jpegLink" :src='card.jpegLink' min-height='230px')
      v-chip(
        v-if="card.badges"
        small v-for="(badge,index) in card.badges"
        :key="index" :color="index === 0 ? 'primary' : 'secondary'"
      ).ma-2 {{ badge.toUpperCase() }}

    v-card-title
      | {{ card.title }}

    v-card-subtitle
      | {{ card.subtitle }}

    v-card-actions
      a.text-decoration-none(:href="card.demoLink" target="_blank")
        v-btn(
          color='primary lighten-2'
          small
          text
          rounded
          outlined
        )
          v-icon(left) mdi-eye
          .text перейти

      v-btn.ml-1(
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
      div(v-if="card.likesCount")
        span.mx-1 {{ card.likesCount }}
        v-btn(icon @click="liked = !liked; liked ? likesCount++ : likesCount--")
          v-icon(:color="liked ? 'cyan' : 'secondary'") mdi-heart

      v-btn(icon @click="show = !show" v-if="card.text")
        v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}

    v-expand-transition
      div(v-show='show')
        v-divider
        v-card-text
          | {{ card.text }}

</template>

<script>
import WorkCard from '@/components/WorkCard.vue';

export default {
  name: 'CertificateCard',
  extends: WorkCard,
  props: {
    card: Object,
    id: String,
  },
};
</script>

<style scoped>

</style>
