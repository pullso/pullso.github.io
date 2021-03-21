<template lang="pug">
  v-footer
      v-container
        v-row.align-center.d-flex
          .col-xs-12.col-sm-6.text-center.text-sm-start
            Contacts

          .col-xs-12.col-sm-6.text-center.text-sm-end
            .text
              | {{ thisYear }} &mdash;&nbsp;
              strong
                a(href="https://github.com/pullso" target="_blank") @pullso

</template>
<script>
import Contacts from '@/components/Contacts.vue';

export default {
  components: { Contacts },
  data: () => ({
    thisYear: new Date().getFullYear(),
  }),
};
</script>
