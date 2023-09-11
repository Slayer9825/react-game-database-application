import { getGamesList, backgroundImageLink } from '../script/fetchGamesScript.js';
import PropTypes from 'prop-types'
import * as React from 'react';
import Button from '@mui/material/Button';
import '../styles/styles.css'

export const MuiGetDetailsButton = (props:{onClick:()=>void}) => {

  return <Button onClick={props.onClick} variant="contained" id="loadListButton">Load List</Button>;
}

export const MuiFilterDetailsButton = (props:{onClick:()=>void}) => {
  return <Button onClick={props.onClick} variant="contained" id="filterListButton" color='warning'>Something Else</Button>;
  
}