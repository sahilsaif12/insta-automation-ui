import { Box } from '@mui/material';
import React from 'react'
import InstaUI from './InstaUI';
export interface props {

    mode: 'dark' | 'light';
}
function RightSide({ mode }: props) {
    return (
        <Box sx={{
            backgroundColor: mode == 'dark' ? '#363636' : "#f4f4f4ff",
            height: "100%", 
            flex: '3',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }} >
            <InstaUI/>

        </Box>
    )
}

export default RightSide