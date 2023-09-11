import { MainContainer} from '../components/MainContainer.tsx'
import React, { useEffect, useState, props } from 'react';
import ListComponent from '../components/ListComponent.tsx'


const apiKey = 'key=26a8374f95c941478c89c39b3bc1193e'
const endpointUrl = 'https://api.rawg.io/api'
const queryParameters = '/games?'
export let yearRange = "2019"
let additionalParams = `&dates=${yearRange}-01-01,${yearRange}-12-31`
let dataFetched = 0;
export let backgroundImageLink
let previousEndpoint = ``
export let newArrayValueName = {
    gameId: [],
    gameName: [],
    gamePlaytime: [],
    gamePlatforms: [],
    gameBackgroundImage: [],
    gameMetacritic: [],
    gameReleased: [],
    gameEsrbRating: [], 
    gameBackgroundCurrentImage: "",
}

export function setYearRange(year) {
    yearRange = year
    additionalParams = `&dates=${yearRange}-01-01,${yearRange}-12-31`
}


export const getGamesList = async () => {
    const endpoint = `${endpointUrl}${queryParameters}${apiKey}${additionalParams}`;

    if (previousEndpoint !== endpoint) {
        
        try {
            const response = await fetch(`${endpoint}`, {  
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                }
            });
                if(response.ok) {

                    // Clearing array before pushing new values.
                    newArrayValueName = {
                        gameId: [],
                        gameName: [],
                        gamePlaytime: [],
                        gamePlatforms: [],
                        gameBackgroundImage: [],
                        gameMetacritic: [],
                        gameReleased: [],
                        gameEsrbRating: [], 
                        gameBackgroundCurrentImage: "",
                    }
                    const jsonResponse = await response.json();
                    previousEndpoint = endpoint

                    for (let i = 0; i < 20; i++) {
                        newArrayValueName.gameId.push(jsonResponse.results[i].id)
                        newArrayValueName.gameName.push(jsonResponse.results[i].name)
                        newArrayValueName.gamePlaytime.push(jsonResponse.results[i].playtime)
                        newArrayValueName.gamePlatforms.push(jsonResponse.results[i].platforms)
                        newArrayValueName.gameBackgroundImage.push(jsonResponse.results[i].background_image)
                        newArrayValueName.gameMetacritic.push(jsonResponse.results[i].metacritic)
                        newArrayValueName.gameEsrbRating.push(jsonResponse.results[i].esrb_rating)
                        newArrayValueName.gameReleased.push(jsonResponse.results[i].released)   

                    }
                //dataFetched=1
                //console.log(newArrayValueName)
                //console.log(jsonResponse.results)
                /*
                //console.log(gamesArray)
                console.log(gamesArray.results[0])
                //console.log(gamesArray.results[0].name)

                
                for (let i = 0; i < 20; i++) {

                    gamesArrayNames.push(gamesArray.results[i].name)
                    //console.log(gamesArrayNames[i])
                    gamesArrayCurrentName = gamesArrayNames[i]

                
            }
            console.log(gamesArrayNames)

            backgroundImageLink = gamesArray.results[0].background_image
            console.log(gamesArray.results[0].playtime)
            console.log(`${backgroundImageLink}`)
            console.log(backgroundImageLink)
            document.body.style.backgroundImage = "url(`${backgroundImageLink}`)";
            */
            }
        
      } catch (error) {
        console.log(error);
      }
    }
      return true
}