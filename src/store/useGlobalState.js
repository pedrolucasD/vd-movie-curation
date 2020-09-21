import { useState } from 'react'

const useGlobalState = () => {
  const [movieNumber, setMovieNumber] = useState(2)
  const [likes, setLikes] = useState([]) 
  const [dislikes, setDislikes] = useState([]) 
  const [currentPage, setCurrentPage] = useState(0) 
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const apiKey = '?&api_key=97e4b05e62f59396b9df37e305734e91&language=pt-BR'


  const actions = (action) => {
    const { type, payload } = action
    switch (type) {
      case 'handleSetMovieNumber':
        return setMovieNumber(payload)
      case 'handleLikeMovie':
        return setLikes(payload)
      case 'handleDislikeMovie':
        return setDislikes(payload)
      case 'handleSetCurrentPage':
        return setCurrentPage(payload)
      case 'handleSetModalIsOpen':
        return setModalIsOpen(payload)
      default:
        return null
    }
  }
  return {movieNumber, likes, dislikes, actions, currentPage, modalIsOpen, apiKey}
}

export default useGlobalState