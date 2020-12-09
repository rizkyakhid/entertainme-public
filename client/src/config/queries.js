import { gql } from '@apollo/client'

export const GET_ENTERTAINMENT = gql`
  query getEntertainment {
    movies {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
    series {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const GET_MOVIE_BY_ID = gql`
  query getMovieById($id: ID) {
    movie(_id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const GET_SERIES_BY_ID = gql`
  query getSeriesById($id: ID) {
    seriesId(_id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const GET_FAVORITES = gql`
  query getFavorites {
    favorites @client {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`