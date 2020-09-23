/* eslint-disable */
import { reactive } from 'vue';
import axiosConfig from './axiosConfig';
import axios from 'axios';

interface dataReactive {
  search: string;
  animes: Array<string>;
}

export default {
  anime: reactive({
    search: '',
    animes: [],
  }) as dataReactive,
  async search() {
    const query: string = `
      query ($anime: String!) {
        Page(perPage: 6){
          pageInfo {
            total
            lastPage
        }
        media(search: $anime, type: ANIME) {
          id
          idMal
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            extraLarge
            large
          }
          genres
          season
          episodes
          trailer {
            id
          }
        }
      }
    }
  `;
    const anime = await axios.request(axiosConfig(this.anime.search, query));
    const result = await anime.data.data.Page.media;
    this.anime.animes.push(result);
    this.anime.search = '';
  },
};
