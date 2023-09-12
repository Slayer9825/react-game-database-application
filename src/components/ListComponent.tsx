import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import { useState } from 'react'
import darkScrollbar from '@mui/material/darkScrollbar'

export default function GameNameList(props: {getListIndex: any, gameName: string[], gameId: string[]}) {

  
    const { gameName, gameId, getListIndex } = props
    //const [gameNameTitles, setGameNameTitles] = useState([])


    const handleClick = (index: any) => {
      const clickedItemIndex = index
      getListIndex(index)

      //console.log(typeof(index.index))
    };

    let gameNameList: any[] = []
    gameName.forEach((item,index)=>{
    gameNameList.push(<ListItemButton onClick={(e) => handleClick({index})} key={index}>{item}</ListItemButton>)
    })
    

  return ( 
    <List 
      sx={{ 
        width: 300, 
        maxWidth: 300,
        bgcolor: "rgb(24,61,61,0.5)",
        color: "#F5F5F5",
        position: "relative",
        overflow: "auto",
        overflowX: "hidden",
        maxHeight: "100%",
        marginBottom: "0px",
        "& ul": { padding: 0 }, 
        borderRadius: "25px 0px 0px 25px",
        gridColumnStart: 1,
        gridColumnEnd: 1,
        gridRowStart: 1,
        gridRowEnd: 18,
        zIndex: 2,

        
        //border: "1px solid black",
        //borderRight: "0px"
      }} 
    > 

        <li> 
            <ul style={{fontSize: "0.7em"}}>
            
              {gameNameList}

            </ul>    
        </li>
      
    </List>
  );
}

//<ListItemButton>Yes</ListItemButton>

