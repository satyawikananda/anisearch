<template>
  <div class="col-lg-8 col-md-12 col-sm-12 m-auto">
    <form action="#" @submit.prevent="search.search">
      <div class="row">
        <div class="col-lg-9 col-md-6 col-sm-12 mb-2">
          <!-- eslint-disable-next-line max-len -->
          <input type="text" class="form-control" v-model="search.anime.search" placeholder="Search the anime here..." />
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <!-- eslint-disable-next-line max-len -->
          <button type="submit" class="btn btn-primary btn-block" :style="{ backgroundColor: '#E64A19', borderColor: '#E64A19' }">
            <i class="fas fa-search mr-2"></i>Search
          </button>
        </div>
      </div>
    </form>
    <div class="row mt-2">
      <!-- eslint-disable-next-line max-len -->
      <h5 class="font-weight-bold text-center" :style="{ color: '#E64A19' }">Search: {{ search.anime.search }}</h5>
    </div>
  </div>
  <div class="row m-auto">
    <div v-if="search.anime.isLoading">
      <div class="d-flex justify-content-center">
        <div class="spinner-border" :style="{ color: '#E64A19' }" role="status"></div>
      </div>
    </div>
    <div v-else>
      <!--  eslint-disable-next-line max-len -->
      <div class="container">
        <div class="row">
          <!-- eslint-disable-next-line max-len -->
          <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-5" v-for="data in search.anime.animes" :key="data.id">
            <div class="card w-100 shadow">
              <!-- test -->
              <!-- eslint-disable-next-line max-len -->
              <img :src="data.coverImage.large" :alt="data.title.romaji" class="p-2 h-75" :style="{ objectFit: 'cover' }" />
              <div class="card-body">
                <div class="card-title">
                  <h6 class="font-weight-bold" :style="{ color: '#E64A19' }">
                    {{ data.title.romaji }}
                  </h6>
                </div>
                <ul class="list-group">
                  <li class="list-group-item">
                    <p :style="{ color: '#E64A19' }" class="m-auto">
                      Season:
                      <span class="font-weight-bold">
                        {{ data.season == null ? 'N/a' : data.season }}
                      </span>
                    </p>
                  </li>
                  <li class="list-group-item">
                    <p :style="{ color: '#E64A19' }" class="m-auto">
                      Episodes:
                      <span class="font-weight-bold">
                        {{ data.episodes == null ? 'N/a' : data.episodes }}
                      </span>
                    </p>
                  </li>
                  <li class="list-group-item">
                    <p :style="{ color: '#E64A19' }" class="m-auto">
                      Genres:
                      <span class="font-weight-bold">{{ handleComma(data.genres) }}</span>
                    </p>
                  </li>
                  <li class="list-group-item">
                    <p :style="{ color: '#E64A19' }" class="m-auto">
                      Popularity:
                      <span class="font-weight-bold">{{ data.popularity }}</span>
                    </p>
                  </li>
                  <li class="list-group-item">
                    <p :style="{ color: '#E64A19' }" class="m-auto">
                      Trending:
                      <span class="font-weight-bold">{{ data.trending }}</span>
                    </p>
                  </li>
                  <li class="list-group-item">
                    <p :style="{ color: '#E64A19' }" class="m-auto">
                      Favourite:
                      <!-- eslint-disable-next-line max-len -->
                      <span class="font-weight-bold"> {{ data.favourites }}</span>
                      people's like this anime
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import search from '@/utils/searchAnime';

export default defineComponent({
  name: 'searchAnime',
  setup() {
    const handleComma = (arr: Array<string>) => arr.join(', ');
    return {
      search,
      handleComma,
    };
  },
});
</script>
