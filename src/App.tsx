
import Container from '@mui/material/Container';
import Sidebar from './components/Sidebar'
import { Box, createTheme, CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import LeftSide from './components/left-part';
import RightSide from './components/right-side';
export interface MessageType{
  openingDm:string;
  openingDmSubText:string
  linkMessage?:string;
  links?:string[];
  openingDmActive:boolean
}

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [ChosenPostIndex, setChosenPostIndex] = useState<number>(0);
      const [comment, setcomment] = useState('');
      let initialMsg={
        openingDm:'Hey there! I’m so happy you’re here, thanks so much for your interest 😊 Click below and I’ll send you the link in just a sec ✨',
        openingDmSubText:'send me the link',
        linkMessage:'',
        links:[],
        openingDmActive:false
      }
      const [messages, setmessages] = useState<MessageType>(initialMsg);
    
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
         {/* <Container maxWidth="sm"> */}
      <CssBaseline />
      <Box sx={{display:'flex',background:'teal',width:'100vw',height:'100%'}} >

      
     <Sidebar mode={mode} setMode={setMode} />
     <Box sx={{display:'flex' ,background:'green',width:'100%',height:'100%' ,overflow:'hidden'}} >
      <LeftSide mode={mode} ChosenPostIndex={ChosenPostIndex}  setChosenPostIndex={setChosenPostIndex} comment={comment} setcomment={setcomment} messages={messages} setMessages={setmessages} />
      <RightSide  mode={mode}  ChosenPostIndex={ChosenPostIndex}  setChosenPostIndex={setChosenPostIndex} comment={comment} messages={messages} />
     </Box>
     </Box>
    {/* </Container> */}
    </ThemeProvider>
  );
}

export default App;