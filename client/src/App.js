import { ApolloProvider } from '@apollo/client'
import client from './config'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './pages/Home'
import AddMovies from './pages/AddMovies'
import EditMovies from './pages/EditMovies'
import SeriesOnly from './pages/SeriesOnly'
import MoviesOnly from './pages/MoviesOnly'
import Favorites from './pages/Favorites'
import MovieDetails from './pages/MovieDetails'
import SeriesDetails from './pages/SeriesDetails'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/series'>
            <SeriesOnly></SeriesOnly>
          </Route>
          <Route path='/movies'>
            <MoviesOnly></MoviesOnly>
          </Route>
          <Route path='/add'>
            <AddMovies></AddMovies>
          </Route>
          <Route path='/favorites'>
            <Favorites></Favorites>
          </Route>
          <Route path='/movie-details/:id'>
            <MovieDetails></MovieDetails>
          </Route>
          <Route path='/series-details/:id'>
            <SeriesDetails></SeriesDetails>
          </Route>
          <Route path='/edit/:id'>
            <EditMovies></EditMovies>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
