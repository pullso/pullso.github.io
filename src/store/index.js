import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
    cards: [],
  },
  mutations: {
    setLoggedIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },
    setCards(state, data) {
      state.cards = data;
    },
    updateCard(state, id, card) {
      state.cards[id] = card;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit('setLoggedIn', user !== null);
      if (user) {
        commit('setUser', {
          email: user.email,
        });
      } else {
        commit('setUser', null);
      }
    },
    addCard(context, card) {
      firebase.database().ref('cards').push({ ...card });
    },
    async updateCard({ commit }, { id, card }) {
      await firebase.database().ref('cards').child(id).update(card);
      commit('updateCard', id, card);
    },
    async fetchCards({ commit }) {
      const cards = await firebase.database().ref('cards').get();
      commit('setCards', cards.val());
    },
    async deleteCard(context, id) {
      await firebase.database().ref('cards').child(id).remove();
    },
    async fetchCardsById(context, id) {
      const card = await firebase.database().ref('cards').child(id).get();
      return card.val();
    },
  },
  modules: {
  },
  getters: {
    isUserLoggedIn(state) {
      return state.user.loggedIn;
    },
    cards(state) {
      return state.cards;
    },
    getCertificateCards(state) {
      if (!state.cards.length) return [];
      return state.cards.filter((card) => card.isCertificate);
    },
  },
});
