<template lang="pug">
  section#works
    v-row
      .col-12
        h2.text-center.text-uppercase
          .text-h5.text-sm-h4.font-weight-bold.text--secondary Работы

    v-row
      div.col-12(v-if="isUserLoggedIn")
        v-btn.primary.v-size--large(@click="addCard") Добавить карточку

      div.col-12.col-sm-6.col-md-4.col-xl-3(
        v-for="(card,index) in worksCards"
        :key="index"
      )
        WorkCard(:card="card" :id="index")

      div.col-12.col-sm-6.col-md-4.col-xl-3(v-if="cards.length === 0" v-for="idx in 3")
        v-skeleton-loader(
          class="mx-auto"
          min-width="300"
          type="image, article"
        )

</template>

<script>
import WorkCard from '@/components/WorkCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'WorksSection',
  components: { WorkCard },
  async mounted() {
    await this.$store.dispatch('fetchCards');
  },
  computed: {
    ...mapGetters(['isUserLoggedIn', 'cards']),
    worksCards() {
      return Object.keys(this.cards)
        .reverse()
        .reduce((acc, id) => {
          if (!this.cards[id]?.isCertificate) acc[id] = this.cards[id];
          return acc;
        }, {});
    },
  },
  methods: {
    addCard() {
      const card = {
        title: String(Date.now()),
        subtitle: 'test',
        date: String(Date.now()),
        likesCount: '',
        jpegLink: '',
        demoLink: '',
        sourceLink: '',
        text: '',
        badges: '',
        isMobile: true,
        isCertificate: true,
      };

      this.$store.dispatch('addCard', { ...card });
      this.$store.dispatch('fetchCards');
    },
  },
};
</script>

<style lang="stylus">

</style>
