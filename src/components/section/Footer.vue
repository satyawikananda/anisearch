<template>
  <div class="footer d-flex flex-column p-3 m-auto">
    <h6 class="font-weight-normal text-center" :style="{ color: '#E64A19' }">
      Copyright &copy; {{ new Date().getFullYear() }}
      Anisearch | Satya Wikananda. All right reserved.
    </h6>
    <h6 class="font-weight-normal text-center mt-2" :style="{ color: '#E64A19' }">
      This website is made using
      <div class="font-weight-bolder d-inline">Vue.JS 3</div>
      ,
      <div class="font-weight-bolder d-inline">Typescript</div>
      and
      <div class="font-weight-bolder d-inline">Bootstrap 5</div>
      . Hosted on
      <div class="font-weight-bolder d-inline">Vercel</div>
    </h6>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'footer',
});
</script>
