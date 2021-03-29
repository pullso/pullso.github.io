<template lang="pug">
  .contacts
    a.text-decoration-none(
      :href="link.href"
      v-for='link in links'
      :key='link.href'
      target="_blank"
      )
      v-btn.mr-2.contacts__btn(
        icon color="primary"
        :outlined="outlined"
      )
        v-icon(:size="size + 'px'" outline)
          | {{ link.icon }}

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
      links: [
        { icon: 'mdi-telegram', href: 'https://t.me/pullso' },
        { icon: 'mdi-gmail', href: 'mailto: pullso.coge@gmail.com' },
        { icon: 'mdi-phone', href: 'tel:79920105554' },
        { icon: 'mdi-github', href: 'https://github.com/pullso' },
        { icon: 'mdi-gitlab', href: 'https://gitlab.com/pullso' },
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
