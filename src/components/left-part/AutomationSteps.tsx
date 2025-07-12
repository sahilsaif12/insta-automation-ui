import React, { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  Paper,
  Radio
} from '@mui/material';
import { postData } from '../../constants/postData';
import ProFeature from './ProFeature';
interface props {

  mode: 'dark' | 'light';
  setChosenPostIndex: Dispatch<SetStateAction<number>>
  ChosenPostIndex: number
}




export default function AutomationSteps({ mode, ChosenPostIndex, setChosenPostIndex }: props) {
  const steps = 1
  const [activeStep, setActiveStep] = useState(0);
  const [showMore, setshowMore] = useState(false)
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("setChosenPostIndex", setChosenPostIndex);

  }, [setChosenPostIndex])

  return (
    <Box sx={{ p: 2, color: mode === 'dark' ? '#b6b6b6ff' : '#6f6f6fff' }}>
      {steps >= 1 &&
        <Box>

          <Typography sx={{ fontWeight: 'bold' }} variant='h6'>
            When someone comment on
          </Typography>

          <Paper sx={{ p: 1, mt: 1, backgroundColor: mode == 'dark' ? '#363636' : "#f4f4f4ff", }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              // gap:'4px',
            }} >
              <Radio
                checked
                sx={{
                  fontSize: '10px',
                  color: '#363636',
                  '&.Mui-checked': {
                    color: '#363636',
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
          <Button variant='outlined' size='small' sx={{
            color: "#363636",
            fontSize: '12px',
            fontWeight: "600",
            border: "1px solid #898989bf",
            textTransform: "capitalize"
          }} >
            Next
          </Button>

        </Box>
      }
      {/* {activeStep === steps.length && (
        <Paper sx={{ p: 3, mt: 3, bgcolor: '#e0ffe0' }}>
          <Typography variant="h6">All steps completed — you're done!</Typography>
        </Paper>
      )} */}
    </Box>
  );
}
