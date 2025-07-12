import React, { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  Paper,
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Chip,
  TextField
} from '@mui/material';
import { postData } from '../../constants/postData';
import ProFeature from './ProFeature';
import { keywordComments } from '../../constants/keywordComments';
interface props {

  mode: 'dark' | 'light';
  setChosenPostIndex: Dispatch<SetStateAction<number>>;
  ChosenPostIndex: number;
   comment:string;
      setcomment:Dispatch<SetStateAction<string>>
}




export default function AutomationSteps({ mode, ChosenPostIndex, setChosenPostIndex ,comment,setcomment}: props) {
  const [steps, setsteps] = useState(1);
  const [showMore, setshowMore] = useState(false)
  const [option, setOption] = useState('specific');
  const handleNext = () => {
    setsteps((prev) => prev + 1)
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{
      p: 2, color: mode === 'dark' ? '#b6b6b6ff' : '#6f6f6fff',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {steps >= 1 &&
        <Box>

          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>
            When someone comment on
          </Typography>

          <Paper sx={{ p: 1, mt: 1, backgroundColor: mode == 'dark' ? '#1b1a1aff' : "#f4f4f4ff", }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              // gap:'4px',
            }} >
              <Radio
                checked
                sx={{
                  fontSize: '10px',
                  color: mode == 'dark' ? "#c5c5c5ff" : '#363636',
                  '&.Mui-checked': {
                    color: mode == 'dark' ? "#c5c5c5ff" : '#363636',
                  },
                }}
              />
              <Typography variant="subtitle1" >
                A specific post or reel
              </Typography>

            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: "8px",
              flexWrap: "wrap",
            }}>
              {postData.slice(0, showMore ? postData.length - 1 : 4).map((post, index) => (
                <Box onClick={() => setChosenPostIndex(index)} sx={{
                  width: "70px",
                  height: "100px",
                  borderRadius: "6px",
                  overflow: 'hidden',
                  cursor: 'pointer',
                  outline: ChosenPostIndex === index ? '3px solid #0288D1' : "none",
                  outlineOffset: '2px'

                }}


                >
                  <img onClick={() => setChosenPostIndex(index)} src={post.img} style={{ width: '100%', height: "100%" }} alt="" />
                </Box>
              ))}

            </Box>

            <Box mt={1} >
              <Box
                onClick={() => setshowMore((prev) => !prev)}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 400,
                  color: "#2B99F2",
                  ml: 2,
                  fontSize: '14px'
                }}
              >
                {showMore ? 'Show less' : 'Show All'}
              </Box>
            </Box>
          </Paper>
          <ProFeature mode={mode} text='Any post or reel' radio={true} />
          <ProFeature mode={mode} text='Next post or reel' radio={true} />
          <Button onClick={handleNext} disabled={steps > 1} variant='outlined' size='small' sx={{
            color: mode == 'dark' ? "#c5c5c5ff" : '#363636',
            fontSize: '12px',
            fontWeight: "600",
            border: "1px solid #898989bf",
            textTransform: "capitalize"
          }} >
            Next
          </Button>

        </Box>
      }

      {steps >= 2 &&
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            And this comment has
          </Typography>

          <Paper sx={{ p: 1, mt: 1, backgroundColor: mode == 'dark' ? '#1b1a1aff' : "#f4f4f4ff", }}>
            <FormControl component="fieldset">
              <RadioGroup value={option} onChange={handleOptionChange}>

                <FormControlLabel
                  value="specific"
                  control={<Radio
                    checked
                    sx={{
                      fontSize: '10px',
                      color: mode == 'dark' ? "#c5c5c5ff" : '#363636',
                      '&.Mui-checked': {
                        color: mode == 'dark' ? "#c5c5c5ff" : '#363636',
                      },
                    }}
                  />}
                  label="a specific word or words"
                />
                {option === 'specific' && (
                  <>
                    <TextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      placeholder="Price"
                      value={comment}
                      onChange={(e) => setcomment(e.target.value)}
                      sx={{
                        mt: 1,
                        borderRadius:'4px',
                        background: mode === 'dark' ? '#0e0e0eff' : '#ffffffff',
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'transparent',
                          },
                          '&:hover fieldset': {
                            borderColor: 'transparent',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'transparent',
                          },
                        },
                      }} />
                    <Typography variant="caption" sx={{ mt: 1, display: 'block', color: 'gray' }}>
                      Use commas to separate words
                    </Typography>
                    <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {keywordComments.map((word) => (
                        <Chip onClick={() => setcomment(word)} sx={{ cursor: 'pointer' }} key={word} label={word} size="small" />
                      ))}
                    </Box>
                  </>
                )}

              </RadioGroup>
            </FormControl>
          </Paper>
          <ProFeature mode={mode} text='Any word' radio={true} />

          <Button onClick={handleNext} disabled={steps > 2 || comment===''} variant='outlined' size='small' sx={{
            color: mode == 'dark' ? "#c5c5c5ff" : '#363636',
            fontSize: '12px',
            mt: 1,
            fontWeight: "600",
            border: "1px solid #898989bf",
            textTransform: "capitalize"
          }} >
            Next
          </Button>
        </Box>
      }

      {steps>=3 && 
      <div className="d">step3 </div>
      }
      
      {/* {activeStep === steps.length && (
        <Paper sx={{ p: 3, mt: 3, bgcolor: '#e0ffe0' }}>
          <Typography variant="h6">All steps completed — you're done!</Typography>
        </Paper>
      )} */}
    </Box>
  );
}
