
export let backgroundImageLink
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

let specificGameId
const apiKey = 'key=26a8374f95c941478c89c39b3bc1193e'
const endpointUrl = 'https://api.rawg.io/api'
const gameListQuery = '/games?'
export let yearRange = "2023"
let specificGameEndpoint = '0'
let additionalParams = `&dates=${yearRange}-01-01,${yearRange}-12-31`
let previousEndpoint = ``
export let currentSpecificDetail = ''


export function setYearRange(year) {
    yearRange = year
    additionalParams = `&dates=${yearRange}-01-01,${yearRange}-12-31`
    console.log(specificGameId)
}

export function setCurrentGameId(index) {
    specificGameId = newArrayValueName.gameId[index]
    specificGameEndpoint = `/games/`
    
}

export const fetchSpecificGameDetails = async (id) => {
    let endpoint
    await getGamesList()
    if(id) {
        endpoint = `${endpointUrl}${specificGameEndpoint}${id}?${apiKey}`;
    } else {
        setCurrentGameId(0)
        endpoint = `${endpointUrl}${specificGameEndpoint}${specificGameId}?${apiKey}`;
    }
    specificGameId = newArrayValueName.gameId[0]
    
    console.log(id)
    console.log(specificGameEndpoint)
    console.log(specificGameId)


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
                    currentSpecificDetail = ''
                    const jsonResponse = await response.json();
                    currentSpecificDetail = jsonResponse.description_raw
                    previousEndpoint = endpoint
                    
                    console.log(jsonResponse)
                    console.log(typeof(currentSpecificDetail.description_raw))
                //console.log(jsonResponse.results)
            }
        
      } catch (error) {
        console.log(error);
      }
    }
}


export const getGamesList = async () => {

    const endpoint = `${endpointUrl}${gameListQuery}${apiKey}${additionalParams}`;
    console.log(endpoint)
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
                //console.log(jsonResponse.results)
                specificGameId = newArrayValueName.gameId[0]
                console.log(endpoint)
            }
        
      } catch (error) {
        console.log(error);
      }
    }
}