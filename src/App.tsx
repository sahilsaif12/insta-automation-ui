
import Container from '@mui/material/Container';
import Sidebar from './components/Sidebar'
import { Box, createTheme, CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import LeftSide from './components/left-part';
import RightSide from './components/right-side';

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [ChosenPostIndex, setChosenPostIndex] = useState<number>(0);
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
      <LeftSide mode={mode} ChosenPostIndex={ChosenPostIndex}  setChosenPostIndex={setChosenPostIndex} />
      <RightSide  mode={mode}  ChosenPostIndex={ChosenPostIndex}  setChosenPostIndex={setChosenPostIndex} />
     </Box>
     </Box>
    {/* </Container> */}
    </ThemeProvider>
  );
}

export default App;