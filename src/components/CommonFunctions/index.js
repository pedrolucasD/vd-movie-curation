import React, { useContext } from 'react'
import Context from '../../store/context'

const winWidth = window.screen.width


export function getFormatedGenres(genres){
  const getMovieGenres = genres?.map(genre => 
    ( genre.name !== genres[genres.length -1].name ?
      genre.name + '/' :
      genre.name ))
  return getMovieGenres
}

export function getFormatedMovieTime(movieTime){
  const durationTime = new Date('2020-01-01 00:00:00')
  const hours = new Date(durationTime.setMinutes(durationTime.getMinutes() + (movieTime)))
  const formatedHours = hours.getHours()+'H '+hours.getMinutes()+'M'
  return formatedHours
}

export function getFormatedMovieYear(year){
  const getYear = year?.substr(0, 4)
  return getYear
}

export function getFormatedMovieTitle(title){
  const movieTitle = title?.length > 27 ? title?.substr(0, 27)+"..." : title
  return movieTitle
}

export function getFormatedOverview(overview, mobileOverviewMaxLength, desktopOverviewMaxLenght){
  const movieOverview = winWidth < 720 ?
  (overview?.length > mobileOverviewMaxLength ? overview?.substr(0, mobileOverviewMaxLength)+"..." : overview) :
  (overview?.length > desktopOverviewMaxLenght ? overview?.substr(0, desktopOverviewMaxLenght)+"..." : overview) 
  
  if(overview === ""){
    return true
  } else {
    return movieOverview
  }
}