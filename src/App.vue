<template>
  <Navbar />
  <div class="container">
    <section-one :desc="description" :github="github" />
    <section-two>
      <Suspense>
        <template #default>
          <rank-anime />
        </template>
        <template #fallback>
          <div class="d-flex justify-content-center">
            <div class="spinner-border" :style="{ color: '#E64A19' }" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </template>
      </Suspense>
    </section-two>
    <section-three>
      <search-anime />
    </section-three>
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Navbar from '@/components/navbar/Navbar.vue';
import SectionOne from '@/components/section/SectionOne.vue';
import SectionTwo from '@/components/section/SectionTwo.vue';
import SectionThree from '@/components/section/SectionThree.vue';
import RankAnime from '@/components/RankAnime.vue';
import SearchAnime from '@/components/SearchAnime.vue';
import Footer from '@/components/section/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    'section-one': SectionOne,
    'section-two': SectionTwo,
    'section-three': SectionThree,
    'rank-anime': RankAnime,
    'search-anime': SearchAnime,
    Footer,
  },
  setup() {
    const github = ref('https://github.com/satyawikananda/anisearch');
    const description = ref(
      // eslint-disable-next-line comma-dangle
      'Welcome to AniSearch! In this website, you can search your favorite anime, and also you can see of rank anime'
    );
    return { github, description };
  },
});
</script>

<style></style>
