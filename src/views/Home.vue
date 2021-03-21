<template lang="pug">
  .home
    HeaderSection
    WorksSection.mt-4

</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import WorksSection from '@/components/WorksSection.vue';

export default {
  name: 'Home',
  components: {
    HeaderSection, WorksSection,
  },
};
</script>
