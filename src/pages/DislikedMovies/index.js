import React, {useEffect, useContext} from 'react'
import Context from '../../store/context'
import PageDefault from '../../components/PageDefault'
import { ImageFilter } from '../../components/Container'

const DislikedMovies = () => {
  const { currentPage, actions } = useContext(Context)
  
  useEffect(() => {
    actions({type:'handleSetCurrentPage', payload: 3})
  }, [])

  return(
    <>
      <PageDefault>
        
      </PageDefault>
    </>
  )
}

export default DislikedMovies
