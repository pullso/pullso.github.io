<template lang="pug">
  .container(v-if="isUserLoggedIn")
    .row.justify-content-center
      .col-md-8
        .card
          h3 {{ cardName }} | Редактировать карточку

          template(v-if="card")
            v-form(action='#' @submit.prevent='submit')
              .card-body
                v-row
                  .col-md-6(v-for="(options, index) in card" :key="index")
                    v-text-field(
                      :label="index"
                      :value="options"
                      v-model="card[index]"
                      clearable
                    )

              v-row
                v-btn.primary.ml-2(type="submit") Сохранить
                v-btn.danger.ml-4(@click="$router.push('/')") Назад
                v-spacer
                v-btn.danger.ml-2(@click="deleteCard") Удалить

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EditCard',
  async mounted() {
    this.card = await this.$store.dispatch('fetchCardsById', this.$route.params.id);
    this.cardName = this.card.title;
  },
  data() {
    return {
      card: null,
      cardName: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters(['isUserLoggedIn']),
    emittedValue() {
      return {
        ...this.card,
        badges: String(this.card.badges).split(','),
        jpegLink: this.card.jpegLink ? this.card.jpegLink : `http://mini.s-shot.ru/?${this.card.demoLink}`,
      };
    },
  },
  methods: {
    async submit() {
      await this.$store.dispatch('updateCard', { id: this.$route.params.id, card: this.emittedValue });
      await this.$router.push('/');
    },
    async deleteCard() {
      await this.$store.dispatch('deleteCard', this.$route.params.id);
      await this.$router.push('/');
    },
  },
};
</script>

<style>

</style>
