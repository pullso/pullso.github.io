<template lang="pug">
  section#works
    v-row
      .col-12
        h2#works.text-center.text-uppercase
          .text-h5.text-sm-h4.font-weight-bold.text--secondary Работы

    v-row
      div.col-12(v-if="isUserLoggedIn")
        v-btn.primary.v-size--large(@click="addCard") Добавить карточку

      div.col-12.col-sm-4.col-xl-3(v-for="(card,index) in $store.state.cards" :key="index")
        WorkCard(:card="card" :id="index")

</template>

<script>
import WorkCard from '@/components/WorkCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'WorksSection',
  components: { WorkCard },
  mounted() {
    this.$store.dispatch('fetchCards');
  },
  computed: {
    ...mapGetters(['isUserLoggedIn']),
  },
  methods: {
    addCard() {
      const card = {
        title: String(Date.now()),
        subtitle: 'test',
        date: String(Date.now()),
        likesCount: 13,
        jpegLink: '',
        demoLink: '',
        sourceLink: '',
        text: '',
        badges: ['Javascript', 'scss'],
        isMobile: false,
      };

      this.$store.dispatch('addCard', { ...card });
      this.$store.dispatch('fetchCards');
    },
  },
};
</script>

<style lang="stylus">

</style>
