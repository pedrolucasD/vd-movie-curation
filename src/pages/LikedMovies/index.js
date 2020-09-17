import React, {useEffect, useContext, useState} from 'react'
import Context from '../../store/context'
import PageDefault from '../../components/PageDefault'
import EmptyMovie from '../../assets/img/video-camera-vazio.png'
import { EmptyPageBg } from '../../components/EmptyPageBg'

const LikedMovies = () => {
  const { currentPage, likes, actions } = useContext(Context)

  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 2})
  }, [])


  return (
    <>
      <PageDefault>
        { 
          likes.length == 0 ?
          <EmptyPageBg imgSrc={EmptyMovie}> Teste</EmptyPageBg> : 
          likes.slice(0).reverse().map(like => (
            <a>
              {like.title}
            </a>
          ))
        }   
      </PageDefault>
    </>
  )
}

export default LikedMovies
