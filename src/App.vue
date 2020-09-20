<template>
  <Navbar />
  <div class="container">
    <section class="mt-5">
      <div class="row">
        <div class="col col-sm-12 col-md-12 col-lg-6 m-auto">
          <h1 class="display-4">
            <div :style="{ color: '#E64A19', display: 'inline' }">Ani</div>
            Search
          </h1>
          <p class="lead text-left">
            Welcome to AniSearch! In this website, you can search your favorite anime and manga, and
            also you can see each of rank anime and manga
          </p>
          <div class="d-flex flex-wrap justify-content-start">
            <button
              type="button"
              class="btn btn-outline-primary"
              :style="{
                backgroundColor: '#E64A19',
                borderColor: '#E64A19',
                color: '#fff',
                outline: 'none',
              }"
            >
              Github
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div class="col col-sm-12 col-md-12 col-lg-6">
          <img src="./assets/images/hero.svg" alt="hero" class="img-fluid m-auto" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/navbar/Navbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
});
</script>

<style></style>
