import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


interface gameDetails {
    gameId: [],
    gameName: [],
    gamePlaytime: [],
    gamePlatforms: [],
    gameBackgroundImage: [],
    gameMetacritic: [],
    gameReleased: [],
    gameEsrbRating: [], 
}

const DetailWindowComponent = (props: {setListIndex: number, textDescription: string[], gridRowValue: string, gridColumnValue: string, detailHeader: string}) => {
    const { textDescription, gridRowValue, gridColumnValue, detailHeader, setListIndex } = props
    
    //{console.log(setListIndex)}
    return (

        <div style={{
            height: "100%",
            minHeight: "3em",
            margin: "auto",
            padding: "auto",
            width: "100%",
            gridRow: gridRowValue,
            gridColumn: gridColumnValue,
            borderRadius: "0px 0px 5px 5px",
            backgroundColor: "rgb(200,200,200,0.6)",
            textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            backdropFilter: "blur(20px)",
            
            color: "#F5F5F5",
            zIndex: "1",
            textAlign: "center",
            boxShadow: "rgba(0, 0, 0, 0.5) 0px 8px 10px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 12px 8px, rgba(0, 0, 0, 0.09) 0px 16px 16px"
            
        }}>         
            <Typography variant="h6" sx={{fontWeight: "400", fontSize: "0.80em", backgroundColor: "#183D3D", borderRadius: "0px 0px 10px 10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 3px 3px 0px", }}>
            {detailHeader}
            </Typography>
            <Typography variant="h6" sx={{fontWeight: "400", fontSize: "0.92em" }}>
                    
                    {textDescription[`${setListIndex}`]}
                </Typography>
            
        </div>
    )
}

export default DetailWindowComponent

