import * as React from 'react';
import { styled, alpha, Box } from '@mui/system';
import { Slider, sliderClasses } from '@mui/base/Slider';

export default function DiscreteSlider(props: {updateFetchRequest: any}) {
  const { updateFetchRequest } = props

  const handleChange = (e: any) => {
    let currentSelectedYear = e.target.value
    //console.log(e.target.value)
    updateFetchRequest(currentSelectedYear)
    
  };

  return (
    <Box sx={{ width: 350, height: 40, gridColumnStart: 3, gridColumnEnd: 13, gridRowStart: 14, gridRowEnd: 15, backgroundColor: "rgb(200,200,200,0.6)", borderRadius: "50px", zIndex: "1", backdropFilter: "blur(20px)", boxShadow: "rgba(0, 0, 0, 0.5) 0px 8px 10px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 12px 8px, rgba(0, 0, 0, 0.09) 0px 16px 16px"}}>
      <StyledSlider
        aria-label="Temperature"
        defaultValue={2023}
        getAriaValueText={valuetext}
        step={1}
        marks
        min={2000}
        max={2023}
        slots={{ valueLabel: SliderValueLabel }}
        onChange={(e: any) => handleChange(e)}
        
      />
    </Box>
  );
}



interface SliderValueLabelProps {
  children: React.ReactElement;
}

function SliderValueLabel({ children }: SliderValueLabelProps) {
  return <span className="valueLabel">{children}</span>;
}

function valuetext(value: number) {
  return `${value}`;
}

const blue = {
  100: '#000000',
  200: '#000000',
  400: '#000000',
  300: '#66B2FF',
  500: '#000000',
  600: '#183D3D',
  900: '#183D3D',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#183D3D',
  400: '#8c959f',
  500: '#6e7781',
  600: '#183D3D',
  700: '#424a53',
  800: '#32383f',
  900: '#183D3D',
};

const StyledSlider = styled(Slider)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
  height: 6px;
  width: 300px;
  padding: 16px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  

  &:hover {
    opacity: 1;
  }

  &.${sliderClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === 'light' ? grey[300] : grey[600]};
    opacity: 0.5;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 300px;
    height: 4px;
    margin-top: 3px;
    border-radius: 2px;
    background-color: ${theme.palette.mode === 'light' ? blue[200] : blue[900]};
    
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    margin-top: 3px;
    border-radius: 2px;
    background-color: #000000;

    
  }

  & .${sliderClasses.thumb} {
    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: -8px;
    margin-top: -3px;
    box-sizing: border-box;
    border-radius: 50%;
    
    outline: 0;
    border: 3px solid #183D3D;
    background-color: #fff;
    display: flex;
    flex-direction: column-reverse;

    :hover,
    &.${sliderClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? blue[400] : blue[300],
        0.15,
      )};
    }

    &.${sliderClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? blue[200] : blue[300],
        0.3,
      )};
    }
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 99%;
    background-color: ${theme.palette.mode === 'light' ? blue[200] : blue[900]};
    top: 43%;
    margin-top: 1px;
    transform: translateX(-50%);
  }

  & .${sliderClasses.markActive} {
    background-color: ${theme.palette.mode === 'light' ? blue[500] : blue[400]};
  }

  & .valueLabel {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    font-size: 14px;
    position: relative;
    color: #F5F5F5;
    background-color: #183D3D;
    padding: 4px;
    border-radius: 10px;
    top: -1.5em;
    text-align: center;
    align-self: center;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
`,
);