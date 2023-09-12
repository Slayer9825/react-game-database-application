import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { currentSpecificDetail } from '../script/fetchGamesScript';



interface TabPanelProps {
  children?: any;
  dir?: string;
  index: number;
  value: number;
  currentSpecificGame: any;
}

function TabPanel(props: TabPanelProps) {
  const { currentSpecificGame, children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme()
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box  sx={{overflow: "auto", bgcolor: 'background.paper', width: "100%", gridRow: "4 / 13", gridColumn: "3 / 21", zIndex: 1, boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px", backdropFilter: "blur(7px)", borderRadius: "20px 20px 0px 0px" }}>
      <AppBar   position="static" sx={{borderRadius: "20px 20px 0px 0px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel currentSpecificGame={currentSpecificDetail} value={value} index={0} dir={theme.direction}>
          {currentSpecificDetail}
        
        
        
        </TabPanel>
        <TabPanel currentSpecificGame={currentSpecificDetail} value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel currentSpecificGame={currentSpecificDetail} value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}