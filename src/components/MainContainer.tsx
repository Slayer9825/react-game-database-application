import { colors } from '@mui/material'
import React from 'react'
import ReactDOM from "react-dom"
import { useState, useEffect } from 'react'
import { MuiGetDetailsButton, MuiFilterDetailsButton } from './MuiGetDetailsButton'
import '../styles/styles.css'
import { getGamesList, setYearRange } from '../script/fetchGamesScript.js';
import { newArrayValueName } from '../script/fetchGamesScript'
import ListComponent from './ListComponent'
import DetailWindowComponent from './DetailWindowComponent'
import LabeledValuesSlider from './StyledSlider'




const MainContainer = () => {

  const [gameDetails, setGameDetails] = useState({
    gameId: [],
    gameName: [],
    gamePlaytime: [],
    gamePlatforms: [],
    gameBackgroundImage: [],
    gameMetacritic: [],
    gameReleased: [],
    gameEsrbRating: [], 
    gameBackgroundCurrentImage: "",
    
  })  


  let largeTextLine = `Null`
  const [currentListIndex, setCurrentListIndex] = useState(0)
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState('')
  const [longTextLine, setLongTextLine] = useState('1 / span 2')
  const [headerContainerSize, setHeaderContainerSize] = useState('')

  async function fetchGamesDetails () {
    await getGamesList()
    retrieveGamesDetails()
    

  }
  const retrieveGamesDetails = () => { 
    
    setGameDetails((gameDetails => ({
      ...newArrayValueName
    }))) 
    setCurrentListIndex(0)
    setCurrentBackgroundImage(gameDetails.gameBackgroundImage[currentListIndex])
    //console.log(currentBackgroundImage)
    
    largeTextLine = `${gameDetails.gameName[currentListIndex]}`
      if(largeTextLine.length >= 30) {

        setLongTextLine('1 / span 3')
        //console.log(largeTextLine.length)

      } else {
        setLongTextLine('1 / span 2')
      }
    
  } 

  function getListIndex(index: any) {

    let clickedListIndex = index.index
    setCurrentListIndex(clickedListIndex)
    setCurrentBackgroundImage(gameDetails.gameBackgroundImage[currentListIndex])
    //console.log(currentBackgroundImage)

    
    largeTextLine = `${gameDetails.gameName[clickedListIndex]}`
      if(largeTextLine.length >= 30) {

        setLongTextLine('1 / span 3')
        //console.log(largeTextLine.length)

      } else {
        setLongTextLine('1 / span 2')
      }
  }

  function updateFetchRequest(e: any) {
    let newYear = e
    setYearRange(newYear)
  }

  let initialized = false 

    useEffect(() => { }) 
    //Add some code if needed.
     
 
  return (
    <div id='gridWrapper' 
      style={{ 
        animation: "fadeIn 1s",
        //backgroundImage: `url(${gameDetails.gameBackgroundImage[`${currentListIndex}`]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
 
      <div id='gridBackground' 
        style={{
          backgroundImage: `url(${gameDetails.gameBackgroundImage[`${currentListIndex}`]})`
      }}>
        
        
      </div> 
       
      <DetailWindowComponent
        detailHeader='Title:'
        textDescription={gameDetails.gameName}
        gridRowValue={longTextLine}
        gridColumnValue={'8 / span 9'} 
        setListIndex={currentListIndex}
      />

      <DetailWindowComponent  
        detailHeader='Release:'
        textDescription={gameDetails.gameReleased}
        gridRowValue={`1 / span 2`}
        gridColumnValue={'3 / span 4'}
        setListIndex={currentListIndex}
      />

      <DetailWindowComponent 
        detailHeader='Metacritic:'
        textDescription={gameDetails.gameMetacritic}
        gridRowValue={'1 / span 2'}
        gridColumnValue={'18 / span 3'} 
        setListIndex={currentListIndex}
      />

      <LabeledValuesSlider 
        updateFetchRequest={updateFetchRequest}
      />

      <ListComponent 
        gameName={gameDetails.gameName}
        gameId={gameDetails.gameId}
        getListIndex={getListIndex}
        /> 
      
      <MuiGetDetailsButton 
        onClick={() => fetchGamesDetails()}/>
      <MuiFilterDetailsButton 
        onClick={() => console.log({gameDetails})} />
       
    </div> 
  )
}

export default MainContainer

