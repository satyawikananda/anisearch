<template>
  <section class="mt-5 pb-5">
    <div class="row">
      <div class="col col-sm-12 col-md-12 col-lg-6 m-auto">
        <h1 class="display-4">
          <div :style="{ color: '#E64A19', display: 'inline' }">Ani</div>
          Search
          <p class="fa fa-search" :style="{ color: '#E64A19' }"></p>
        </h1>
        <p class="lead text-left">
          {{ desc }}
        </p>
        <div class="d-flex flex-wrap justify-content-start">
          <a
            type="button"
            class="btn btn-outline-primary"
            :style="{
              backgroundColor: '#E64A19',
              borderColor: '#E64A19',
              color: '#fff',
              outline: 'none',
            }"
            :href="github"
            target="_blank"
          >
            Github
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div class="col col-sm-12 col-md-12 col-lg-6">
        <img src="../../assets/images/hero.svg" alt="hero" class="img-fluid m-auto" />
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'heroSection',
  props: ['desc'],
});
</script>
