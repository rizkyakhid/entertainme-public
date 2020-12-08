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

export const GET_BY_ID = gql`
  query getMovieById($id: ID) {
    movie(_id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
    series(_id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`