<template>
  <Navbar />
  <div class="container">
    <section-one :desc="description" />
    <section-two :desc="description">
      <Suspense>
        <template #default>
          <rank-anime />
        </template>
        <template #fallback>loading...</template>
      </Suspense>
    </section-two>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navbar from '@/components/navbar/Navbar.vue';
import SectionOne from '@/components/section/SectionOne.vue';
import SectionTwo from '@/components/section/SectionTwo.vue';
import RankAnime from '@/components/RankAnime.vue';

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
