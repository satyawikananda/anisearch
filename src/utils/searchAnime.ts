/* eslint-disable */
import { reactive } from "vue";
import axiosConfig from "./axiosConfig";
import axios from "axios";

interface dataReactive {
  search: string;
  animes: Array<any>;
  isLoading: boolean;
}

export default {
  anime: reactive({
    search: "",
    animes: [],
    isLoading: false,
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
            large
          }
          genres
          season
          episodes
          popularity
          trending
          status
          favourites
          trailer {
            id
          }
        }
      }
    }
  `;
    this.anime.isLoading = true;
    const anime = await axios.request(axiosConfig(this.anime.search, query));
    const result = await anime.data.data.Page.media;
    this.anime.animes = result;
    this.anime.search = "";
    this.anime.isLoading = false;
  },
};
