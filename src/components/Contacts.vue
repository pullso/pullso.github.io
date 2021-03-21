<template lang="pug">
  .contacts
    v-btn.mr-2.contacts__btn(
      v-for='icon in icons'
      :key='icon' icon color="primary"
      :outlined="outlined"
    )
      v-icon(:size="size + 'px'" outline)
        | {{ icon }}

</template>

<script>
export default {
  name: 'Contacts',
  props: {
    outlined: Boolean,
    large: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  data() {
    return {
      icons: [
        'mdi-telegram',
        'mdi-gmail',
        'mdi-phone',
        'mdi-github',
        'mdi-gitlab',
      ],
    };
  },
};
</script>
<style lang="stylus">
.contacts
  .contacts__btn
    border-color secondary

</style>
