import React from 'react'
import { 
  AiFillHeart,
  AiOutlineHeart
} from 'react-icons/ai'
import styled from 'styled-components'


export const MovieRate = (rate, size, borderBlack, shadow) => { 

  const fill = borderBlack == true ? '#000' : '#fff'

  const DivShadow = styled.div`
    filter: ${props => props.shadow == false ? 'unset' : 'drop-shadow(0px 0px .05rem black)'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 644px){
      filter: unset;
      width: 100%;
    }    

  `

  const rateInt = rate -(rate%1)
  switch (rateInt) {
    case (1): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />  
        </DivShadow>
      )
      break
      case (2): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />
        </DivShadow>
      )
      break
      case (3): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />
        </DivShadow>
      )
      break
      case (5): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />
        </DivShadow>
      )
      break
      case (6): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />
        </DivShadow>
      )
      break
      case (7): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />
        </DivShadow>
      )
      break
      case (8): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />
        </DivShadow>
      )
      break
      case (9): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiOutlineHeart size={size} fill={fill} />
        </DivShadow>
      )
      break
      case (10): 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />
        </DivShadow>
      )
      break
      default: 
      return(
        <DivShadow shadow={shadow}>
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />&nbsp;
          <AiFillHeart size={size} fill="#ff5656ff" />
        </DivShadow>
      )
      break   
   }
}