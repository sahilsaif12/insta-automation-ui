import { Badge, Box, Radio, Tooltip, Typography } from "@mui/material"

interface Props {
  mode: 'dark' | 'light';
  text:string;
  switchBtn?:boolean;
  radio?:boolean;
}
function ProFeature({mode,text,switchBtn,radio}:Props) {
  return (
    <Tooltip title="Upgrade your plan to Pro to use this" placement="right" >

   
    <Box sx={{
        display:'flex',
        justifyContent:"space-between",
        alignItems:'center',
        my:1,
        px:1,
        backgroundColor: mode == 'dark' ? '#363636' : "#f4f4f4ff",
        borderRadius:'3px'
    }}>
        <Box sx={{
            display:'flex',
            alignItems:'center',
        }}>
        {radio &&
        <Radio
            disabled
            sx={{
              fontSize: '10px',
              color: '#6e6e6eff',
              '&.Mui-checked': {
                color: '#6e6e6eff',
              },
            }}
          />}
          <Typography variant="subtitle1" >
           {text}
          </Typography>

        </Box>
         <Badge badgeContent={"Pro"} anchorOrigin={{horizontal:'left'}} sx={{
            px:1
         }} color="info"/>
    </Box>
     </Tooltip>
  )
}

export default ProFeature