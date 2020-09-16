import React, {useEffect, useContext} from 'react'
import Context from '../../store/context'
import PageDefault from '../../components/PageDefault'
import { ImageFilter } from '../../components/Container'

const LikedMovies = () => {
  const { currentPage, actions } = useContext(Context)

  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 2})
  }, [])

  return (
    <>
      <PageDefault>
        
      </PageDefault>
    </>
  )
}

export default LikedMovies
