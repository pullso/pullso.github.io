<template lang="pug">
  v-app
    v-app-bar(app='' color='primary' dark='')
      v-spacer
    v-main
      router-view
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>
