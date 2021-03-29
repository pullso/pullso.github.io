<template lang="pug">
  section#serts
    v-row
      .col-12
        h2.text-center.text-uppercase
          .text-h5.text-sm-h4.font-weight-bold.text--secondary Сертификаты

    v-row
      div.col-12(v-if="isUserLoggedIn")
        v-btn.primary.v-size--large(@click="addCertificate") Добавить сертификат

      div.col-12.col-sm-6.col-md-4.col-xl-3(
        v-for="(card,index) in certificatesCards"
        :key="index"
      )
        CertificateCard(:card="card" :id="index")

      div.col-12.col-sm-6.col-md-4.col-xl-3(v-if="cards.length === 0" v-for="idx in 3")
        v-skeleton-loader(
          class="mx-auto"
          min-width="300"
          type="image, article"
        )

</template>

<script>
import CertificateCard from '@/components/CertificateCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CertificateSection',
  components: { CertificateCard },
  async mounted() {
    await this.$store.dispatch('fetchCards');
  },
  computed: {
    ...mapGetters(['isUserLoggedIn', 'cards']),
    certificatesCards() {
      return Object.keys(this.cards)
        .reverse()
        .reduce((acc, id) => {
          if (this.cards[id]?.isCertificate) acc[id] = this.cards[id];
          return acc;
        }, {});
    },
  },
  methods: {
    addCertificate() {
      const certificate = {
        title: String(Date.now()),
        subtitle: 'test',
        date: String(Date.now()),
        jpegLink: '',
        demoLink: '',
        text: '',
        isMobile: true,
        isCertificate: true,
      };

      this.$store.dispatch('addCard', { ...certificate });
      this.$store.dispatch('fetchCards');
    },
  },
};
</script>

<style lang="stylus">

</style>
