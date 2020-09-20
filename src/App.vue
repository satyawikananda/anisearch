<template>
  <Navbar />
  <div class="container">
    <section-one :desc="description" />
    <section-two :desc="description">
      <div class="col col-lg-6 col-md-12 col-sm-12" v-for="i in 3" :key="i">
        <rank-anime />
      </div>
    </section-two>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navbar from '@/components/navbar/Navbar.vue';
import SectionOne from '@/components/section/SectionOne.vue';
import SectionTwo from '@/components/section/SectionTwo.vue';
import RankAnime from '@/components/card/RankAnime.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    'section-one': SectionOne,
    'section-two': SectionTwo,
    'rank-anime': RankAnime,
  },
  setup() {
    const github = ref('https://github.com/satyawikananda/anisearch');
    const description = ref(
      // eslint-disable-next-line comma-dangle
      'Welcome to AniSearch! In this website, you can search your favorite anime and manga, and also you can see each of rank anime and manga'
    );
    return { github, description };
  },
});
</script>

<style></style>
