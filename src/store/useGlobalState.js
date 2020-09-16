import { useState } from 'react'

const useGlobalState = () => {
  const [movieNumber, setMovieNumber] = useState(2)
  const [likes, setLikes] = useState([]) 
  const [dislikes, setDislikes] = useState([]) 
  const [currentPage, setCurrentPage] = useState(0) 


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
      default:
        return null
    }
  }
  return {movieNumber, likes, dislikes, actions, currentPage}
}

export default useGlobalState