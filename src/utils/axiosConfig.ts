/* eslint-disable */
import { AxiosRequestConfig } from 'axios';

const BASE_URL: string = 'https://graphql.anilist.co';

export default function axiosConfig(anime: string, query: any) {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://graphql.anilist.co',
    data: {
      variables: {
        anime: anime,
      },
      query: query,
    },
  };

  return config;
}
