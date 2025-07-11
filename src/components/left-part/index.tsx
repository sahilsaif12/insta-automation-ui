import { Box } from '@mui/material'
export interface props {

    mode: 'dark' | 'light';
}
function LeftSide({mode}:props) {
  return (
    <Box sx={{background:mode==='light'? '#FFFFFF':'#000000',flex:'1'}} >LeftSide</Box>
  )
}

export default LeftSide