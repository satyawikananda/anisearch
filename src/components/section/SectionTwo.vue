<template>
  <section class="mt-5 pb-2">
    <h2 class="text-center font-weight-bold" :style="{ color: '#E64A19' }">Top 10 Anime</h2>
    <p class="text-muted text-center" :style="{ color: '#E64A19' }">
      This data was provided from jikan.moe API
    </p>
    <hr :style="{ color: '#E64A19' }" />
    <div class="row">
      <slot />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'sectionTwo',
});
</script>
