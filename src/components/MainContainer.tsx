import { useState, useEffect } from 'react'
import { MuiGetDetailsButton, MuiFilterDetailsButton } from './MuiGetDetailsButton'
import '../styles/styles.css'
import { getGamesList, setYearRange, newArrayValueName, setCurrentGameId, currentSpecificDetail, fetchSpecificGameDetails } from '../script/fetchGamesScript.js';
import ListComponent from './ListComponent'
import DetailWindowComponent from './DetailWindowComponent'
import LabeledValuesSlider from './StyledSlider'
import TabDetailList from './TabDetailList'
export let selectedGameId = 0
let gameDescription: any

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
  const [currentSpecificGame, setCurrentSpecificGame] = useState('')

  async function fetchGamesDetails () {
    await getGamesList()
    retrieveGamesDetails()
    getListIndex(0)
    
  }
  const retrieveGamesDetails = async () => { 
    
    setGameDetails((gameDetails => ({
      ...newArrayValueName
    }))) 

    console.log(currentBackgroundImage)
    
    largeTextLine = `${gameDetails.gameName[currentListIndex]}`
      if(largeTextLine.length >= 30) {

        setLongTextLine('1 / span 3')
        //console.log(largeTextLine.length)

      } else {
        setLongTextLine('1 / span 2')
      }
    
  } 


  async function getListIndex(index: any) {
    let clickedListIndex = index.index
    if(index) {
      clickedListIndex = index.index
    } else {
      clickedListIndex = 0
    }
    
    setCurrentListIndex(clickedListIndex)
    setCurrentBackgroundImage(gameDetails.gameBackgroundImage[currentListIndex])
    setCurrentGameId(clickedListIndex)

    selectedGameId = newArrayValueName.gameId[clickedListIndex]
    await fetchSpecificGameDetails(selectedGameId)
    setGameDetailsFromFetch(currentSpecificDetail)

    largeTextLine = `${gameDetails.gameName[clickedListIndex]}`
      if(largeTextLine.length >= 31) {
        setLongTextLine('1 / span 3')
      } else {
        setLongTextLine('1 / span 2')
      }
  }

  function setGameDetailsFromFetch(value: any) {
    gameDescription = value
    setCurrentSpecificGame(gameDescription)
    //console.log(gameDescription)
  }

  function updateFetchRequest(e: any) {
    let newYear = e
    setYearRange(newYear)
  }


    useEffect(() => { }) 
    //Add some code if needed.
     
 
  return (
    <div id='gridWrapper' 
      style={{ 
        animation: "fadeIn 1s",
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

      <TabDetailList 

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

