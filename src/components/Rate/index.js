import React from 'react'
import favorite from '../../assets/icons/favorite.png'
import favorite_ from '../../assets/icons/favorite_.png'

import styled from 'styled-components'

export const MovieRate = (rate, borderColor, mobileSize) => { 

  const BorderedImage = styled.img`
    filter: ${props => props.border == true ?  'drop-shadow(0px 0px .1rem black)' : 'none' };

    @media only screen and (max-width: 420px){
      height: ${props => props.mobileSize == false ? 'unset' : props.mobileSize };
    }
  `

  const rateInt = rate -(rate%1)
  switch (rateInt) {
    case (1): 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;   
        </div>
      )
      break
      case (2): 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (3): 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (5): 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (6): 
      return(
        <div>
          <BorderedImage  border={borderColor}  mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor}  mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor}  mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor}  mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor}  mobileSize={mobileSize} src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (7): 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (8): 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (9): 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite  } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
        </div>
      )
      break
      case (10): 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite } />&nbsp;
        </div>
      )
      break
      default: 
      return(
        <div>
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
          <BorderedImage  border={borderColor} mobileSize={mobileSize} src={ favorite_ } />&nbsp;
        </div>
      )
      break   
   }
}