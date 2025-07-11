
import Container from '@mui/material/Container';
import Sidebar from './components/Sidebar'
import { Box, createTheme, CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import LeftSide from './components/left-part';
import RightSide from './components/right-side';

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

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
     <Box sx={{display:'flex' ,background:'green',width:'100%',height:'100%'}} >
      <LeftSide mode={mode} />
      <RightSide  mode={mode} />
     </Box>
     </Box>
    {/* </Container> */}
    </ThemeProvider>
  );
}

export default App;