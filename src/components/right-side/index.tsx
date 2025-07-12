import { Box } from '@mui/material';
import React, { type Dispatch, type SetStateAction } from 'react'
import InstaUI from './InstaUI';
import TabSwitcher from './TabSwticher';
export interface props {

    mode: 'dark' | 'light';
      ChosenPostIndex: number;
          setChosenPostIndex:Dispatch<SetStateAction<number>>
}
function RightSide({ mode,ChosenPostIndex,setChosenPostIndex }: props) {
    return (
        <Box sx={{
            backgroundColor: mode == 'dark' ? '#363636' : "#f4f4f4ff",
            height: "100%", 
            flex: '3',
            display:'flex',
            flexDirection:'column',
            gap:"10px",
            justifyContent:'center',
            alignItems:'center'
        }} >
            <InstaUI ChosenPostIndex={ChosenPostIndex} />
            <TabSwitcher/>
        </Box>
    )
}

export default RightSide