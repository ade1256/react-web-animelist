import { gql } from "@apollo/client";

export const ANIME_LIST = gql`
  query GetAllAnime ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        averageScore
      }
    }
  }
`;

export const ANIME_DETAIL = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      title {
        english
        native
      }
      coverImage {
        large
      }
      duration
      seasonYear
      averageScore
      genres
      description
    }
  }
`;