import React, {useEffect} from 'react'
import api from '../../services/api'
import PageDefault from '../../components/PageDefault'

const UnratedMovies = () => {

  useEffect(() => {
    loadMovies()
  }, [])

  async function loadMovies(movie = 2){
    const response = await api.get('/'+movie+'?api_key=97e4b05e62f59396b9df37e305734e91')
    console.log( response )
    return response
  }

  // const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
  
  return(
    <PageDefault>
      teste
    </PageDefault>
  )
}

export default UnratedMovies
