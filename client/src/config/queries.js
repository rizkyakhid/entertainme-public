import { gql } from '@apollo/client'

export const getEntertainment = gql`
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

// export const getMovieById = gql`
//   query getMovieById($_id: ID!) {
//     movie(_id: $_id) {
//       _id
//       title
//       overview
//       poster_path
//       popularity
//       tags
//     }
//   }
// `