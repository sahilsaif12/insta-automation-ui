import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import logoImg from '../../assets/botspace.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { postData } from '../../constants/postData';
export interface props {

      ChosenPostIndex: number;
      comment:string
}
const InstaUI = ({ChosenPostIndex,comment}:props) => {
  return (
    <Box
      sx={{
        width: '30%',
        height: '87%',
        border: '12px solid #151A22',
        borderRadius: '30px',
        overflow: 'hidden',
        mx: 'auto',
        bgcolor: '#000000',
        minWidth:'350px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:'space-between',
          px: 1,
          py: 1,
          borderBottom: '1px solid #222',
          bgcolor: '#000000',
        }}
      >
        
        <ArrowBackIosIcon sx={{color:"#d2cfcfe4",fontSize:'14px'}}/>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            flexGrow: 1,
            alignItems:'center',
             gap:'10px'

        }} >
            <Box sx={{
                width:'65px',
                height:'8px',
                background:'#1a202bff',
                borderRadius:'12px',
            }} ></Box>
        {/* <Typography variant="subtitle2" sx={{  color: '#ffffffeb', fontWeight: 400,textAlign:'center' }}>
          Botspacehq
        </Typography> */}
        <Typography variant="subtitle2" sx={{  color: '#ffffffc9', fontWeight: 200,textAlign:'center' }}>

        Posts
        </Typography>
        </Box>


      </Box>

      {/* Post Image */}
      <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
                  bgcolor: '#000000',
        p:1
      }}>
        <Box sx={{
            display:'flex',
            gap:'5px',
            alignItems:'center'
        }}>

        <Avatar src={logoImg} sx={{width:'30px',height:'30px',borderRadius:'50%'}} />
        <Typography variant="subtitle2" sx={{  color: '#ffffffc9', fontWeight: 200,textAlign:'center' }}>
        Botspacehq
        </Typography>
        </Box>
        <MoreHorizIcon sx={{ color: '#d2cfcfe4' }}/>

      </Box>
      <CardMedia
        component="img"
        height="50%"
        sx={{borderRadius:'2px',px:1}}
        image={postData[ChosenPostIndex].img} 
        alt="Post image"
      />

      {/* Action Buttons */}
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', px: 1, color: 'white', }}>
        <Box sx={{
            display:'flex',
            gap:'6px'
        }}>

            {/* like count */}
          <svg width="24" height="24" fill="currentColor" aria-label="Notifications" className="x1lliihq x1n2onr6 x5n08af"><path d="M16.792 3.904A4.99 4.99 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.99 4.99 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.05 6.05 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97q.426.368.853.747l1.027.918a45 45 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45 45 0 0 0 3.626-3.115l.922-.824q.441-.39.885-.774c2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218"/></svg>
          <Typography variant="subtitle2" >
            {postData[ChosenPostIndex].like_count}
        </Typography>
            {/* comment count */}
          <svg width="24" height="24" fill="currentColor" aria-label="Comment" className="x1lliihq x1n2onr6 xyb1xck"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"/></svg>
           <Typography variant="subtitle2" >
          {postData[ChosenPostIndex].comment_count}
        </Typography>
        {/* share count  */}
          <svg width="24" height="24" fill="currentColor" aria-label="Share" className="x1lliihq x1n2onr6 xyb1xck"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M22 3 9.218 10.083M11.698 20.334 22 3.001H2l7.218 7.083z"/></svg>
           <Typography variant="subtitle2" >
            {postData[ChosenPostIndex].share_count}
        </Typography>
        </Box>
        <svg width="24" height="24" fill="currentColor" aria-label="Save" className="x1lliihq x1n2onr6 xyb1xck"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 21-8-7.56L4 21V3h16z"/></svg>
      </CardActions>

      {/* Post Content */}
      <CardContent sx={{ px: 2, py: 0, color: '#e7e7e7ff',height:'20%',    overflow: 'hidden',}}>
        <Typography variant="caption">
          <strong>Botspacehq</strong>           {postData[ChosenPostIndex].caption}
        </Typography>
      </CardContent>

      <Box sx={{
        p:1,
        display:'flex',
        justifyContent:'space-around'
      }}>
        <svg width="23" height="23" fill="currentColor" aria-label="Home" className="x1lliihq x1n2onr6 x5n08af"><path fill="none" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="2" d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"/></svg>
        <svg width="23" height="23" fill="currentColor" aria-label="Search" className="x1lliihq x1n2onr6 x5n08af"><path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5M16.511 16.511 22 22"/></svg>
        <svg width="23" height="23" fill="currentColor" aria-label="New post" className="x1lliihq x1n2onr6 x5n08af"><path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552ZM6.545 12.001h10.91M12.003 6.545v10.91"/></svg>
        <svg width="23" height="23" fill="currentColor" aria-label="Reels" className="x1lliihq x1n2onr6 x5n08af"><path fill="none"  stroke="#FFFFFF" stroke-width="1.5" d="m12.823 1 2.974 5.002h-5.58l-2.65-4.971q.308-.02.642-.027L8.55 1Zm2.327 0h.298c3.06 0 4.468.754 5.64 1.887a6 6 0 0 1 1.596 2.82l.07.295h-4.629zm-9.667.377L7.95 6.002H1.244a6.01 6.01 0 0 1 3.942-4.53Zm9.735 12.834-4.545-2.624a.91.91 0 0 0-1.356.668l-.008.12v5.248a.91.91 0 0 0 1.255.84l.109-.053 4.545-2.624a.91.91 0 0 0 .1-1.507zl-4.545-2.624Zm-14.2-6.209h21.964l.015.36.003.189v6.899c0 3.061-.755 4.469-1.888 5.64-1.151 1.114-2.5 1.856-5.33 1.909l-.334.003H8.551c-3.06 0-4.467-.755-5.64-1.889-1.114-1.15-1.854-2.498-1.908-5.33L1 15.45V8.551l.003-.189Z"/></svg>
                <Avatar src={logoImg} sx={{width:'20px',height:'20px',borderRadius:'50%'}} />

      </Box>
<Box sx={{
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    marginTop:'1px'
}} >

       <Box sx={{
                width:'35%',
                height:'8px',
                background:'#d2d2d2ff',
                borderRadius:'12px',
            }} ></Box>

</Box>
    </Box>
  );
};

export default InstaUI;
