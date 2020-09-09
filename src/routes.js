import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import UnratedMovies from './pages/UnratedMovies'
import LikedMovies from './pages/LikedMovies'
import DislikedMovies from './pages/DislikedMovies'

const Routes = () => {
  return(
    <Switch>
      <BrowserRouter>
        <Route path="/" exact component={ UnratedMovies } />
        <Route path="/likes" exact component={ LikedMovies } />
        <Route path="/dislikes" exact component={ DislikedMovies } />
      </BrowserRouter>
    </Switch>
  )
}

export default Routes