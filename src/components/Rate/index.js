import React from 'react'
import favorite from '../../assets/icons/favorite.png'
import favorite_ from '../../assets/icons/favorite_.png'
import { MovieDetails } from '../../components/MainCard/components/MovieOverview'


export function getMovieRate(rate){
  const rateInt = rate -(rate%1)
  switch (rateInt) {
    case (1): 
      return(
        <div>
          <img src={ favorite  } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;   
        </div>
      )
      break
      case (2): 
      return(
        <div>
          <img src={ favorite  } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (3): 
      return(
        <div>
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (5): 
      return(
        <div>
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (6): 
      return(
        <div>
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (7): 
      return(
        <div>
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (8): 
      return(
        <div>
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (9): 
      return(
        <div>
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite  } />&nbsp;
          <img src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (10): 
      return(
        <div>
          <img src={ favorite } />&nbsp;
          <img src={ favorite } />&nbsp;
          <img src={ favorite } />&nbsp;
          <img src={ favorite } />&nbsp;
          <img src={ favorite } />&nbsp;
        </div>
      )
      break
      default: 
      return(
        <div>
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
          <img src={ favorite_ } />&nbsp;
        </div>
      )
      break   
   }
}