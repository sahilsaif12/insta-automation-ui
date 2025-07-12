import { Box } from '@mui/material';
import React, { type Dispatch, type SetStateAction } from 'react'
import InstaUI from './InstaUI';
import TabSwitcher from './TabSwticher';
import type { MessageType } from '../../App';
export interface props {

    mode: 'dark' | 'light';
      ChosenPostIndex: number;
          setChosenPostIndex:Dispatch<SetStateAction<number>>;
          comment:string,
          messages:MessageType

}
function RightSide({ mode,ChosenPostIndex,setChosenPostIndex,comment ,messages}: props) {
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
            <InstaUI ChosenPostIndex={ChosenPostIndex} comment={comment} messages={messages} />
            <TabSwitcher comment={comment} mode={mode} messages={messages}  />
        </Box>
    )
}

export default RightSide