import { gql } from "@apollo/client";

export const ADD_MOVIE = gql`
  mutation addMovie($newAddedMovie: newMovie) {
    addMovie(newAddedMovie: $newAddedMovie) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const EDIT_MOVIE = gql`
  mutation editMovie($id: ID, $newEditedMovie: newMovie) {
    editMovie(_id: $id, newEditedMovie: $newEditedMovie) { 
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`

export const DELETE_MOVIE = gql`
  mutation deleteMovie($id: ID) {
    deleteMovie(_id: $id) {
      _id
      title
      overview
      poster_path
      popularity
      tags
    }
  }
`