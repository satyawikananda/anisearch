<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12" v-for="(top, i) in data" :key="i">
        <div class="card d-flex justify-content-center mb-3 border-white shadow rounded-lg">
            <a :href="top.url ? top.url : '#'" target="_blank">
                <div class="row g-0">
                    <div class="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
                    <!-- eslint-disable-next-line max-len -->
                    <img
                        :src="top.image_url"
                        :alt="top.title"
                        class="img-fluid"
                        style="object-fit: cover"
                    />
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="card-body">
                        <div class="card-title font-weight-bold" :style="{ color: '#E64A19' }">
                        <p class="m-auto text-left">{{ top.title }}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <!-- eslint-disable-next-line max-len -->
                            <p :style="{ color: '#E64A19' }" class="m-auto">
                            Rank:
                            <span class="font-weight-bold">{{ top.rank }}</span>
                            </p>
                        </li>
                        <li class="list-group-item">
                            <p :style="{ color: '#E64A19' }" class="m-auto">
                            Type:
                            <span class="font-weight-bold">{{ top.type }}</span>
                            </p>
                        </li>
                        <li class="list-group-item">
                            <p :style="{ color: '#E64A19' }" class="m-auto">
                            Episodes:
                            <span class="font-weight-bold">{{ top.episodes }}</span>
                            </p>
                        </li>
                        <li class="list-group-item">
                            <p :style="{ color: '#E64A19' }" class="m-auto">
                            Start Date:
                            <span class="font-weight-bold">{{ top.start_date }}</span>
                            </p>
                        </li>
                        <li class="list-group-item">
                            <p :style="{ color: '#E64A19' }" class="m-auto">
                            End Date:
                            <span class="font-weight-bold">{{ top.end_date }}</span>
                            </p>
                        </li>
                        <li class="list-group-item">
                            <p :style="{ color: '#E64A19' }" class="m-auto">
                            Score:
                            <span class="font-weight-bold">{{ top.score }}</span>
                            </p>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'rankAnime',
  async setup() {
    const data = ref(null);
    const topAnime = await fetch('https://api.jikan.moe/v3/top/anime/1/favorite');
    const result = await topAnime.json();
    data.value = result.top.slice(0, 10);
    return { data };
  },
});
</script>
