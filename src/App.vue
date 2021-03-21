<template lang="pug">
  v-app
    Navbar

    v-main.grey.lighten-3
      v-container
        router-view

    Footer

</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: { Navbar, Footer },
};
</script>
