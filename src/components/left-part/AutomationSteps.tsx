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
  TextField,
  Switch
} from '@mui/material';
import { postData } from '../../constants/postData';
import ProFeature from './ProFeature';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { keywordComments } from '../../constants/keywordComments';
import type { MessageType } from '../../App';
interface props {

  mode: 'dark' | 'light';
  setChosenPostIndex: Dispatch<SetStateAction<number>>;
  ChosenPostIndex: number;
  comment: string;
  setcomment: Dispatch<SetStateAction<string>>
  messages: MessageType
  setMessages: Dispatch<SetStateAction<MessageType>>

}




export default function AutomationSteps({ mode, ChosenPostIndex, setChosenPostIndex, comment, setcomment, messages, setMessages }: props) {
  const [steps, setsteps] = useState(1);
  const [showMore, setshowMore] = useState(false)
  const [option, setOption] = useState('specific');

  const [openingDmEnabled, setopeningDmEnabled] = useState(true);
  const [openingDm, setOpeningDm] = useState('Hey there! I’m so happy you’re here, thanks so much for your interest 😊 Click below and I’ll send you the link in just a sec ✨');
  const [openingDmSubText, setopeningDmSubText] = useState('send me the link');
  const [linkMessage, setLinkMessage] = useState('Hey');
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState('');

  const handleNext = () => {
    if (steps === 2) {
      setMessages((prev) => ({ ...prev, openingDmActive: true }))
    }
    setsteps((prev) => prev + 1)
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption(event.target.value);
  };


  const handleAddLink = () => {
    const trimmed = linkInput.trim();
    if (trimmed && !links.includes(trimmed)) {
      setLinks([...links, trimmed]);
      setLinkInput('');
    }
  };

  const handleRemoveLink = (index: number) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setMessages((prev) => ({ ...prev, links: links }))
  }, [links])

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
                        borderRadius: '4px',
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

          <Button onClick={handleNext} disabled={steps > 2 || comment === ''} variant='outlined' size='small' sx={{
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

      {steps >= 3 &&
        <Box >
          {/* Title */}
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            They will get
          </Typography>

          {/* Opening DM Toggle & Message */}
          <Paper variant="outlined" sx={{ p: 1, my: 1, backgroundColor: mode == 'dark' ? '#1b1a1aff' : "#f4f4f4ff", }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography fontWeight={500}>an opening DM</Typography>
              <Switch
                checked={messages.openingDmActive}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#00b40f',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#00b40f',
                  },
                }}
                onChange={() => setMessages((prev) => ({ ...prev, openingDmEnabled: !prev.openingDmActive }))} />
            </Box>

            {messages.openingDmActive && (
              <Box mt={2}>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  sx={{
                    mt: 1,
                    borderRadius: '4px',
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
                  }}
                  value={messages.openingDm}
                  onChange={(e) => setMessages((prev) => ({ ...prev, openingDm: e.target.value }))}

                >

                </TextField>

                <TextField
                  fullWidth
                  size="small"
                  placeholder="Send me the link"
                  sx={{
                    mt: 1,
                    borderRadius: '4px',
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
                  }}
                  value={messages.openingDmSubText}
                  onChange={(e) => setMessages((prev) => ({ ...prev, openingDmSubText: e.target.value }))}
                />

                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <InfoOutlinedIcon sx={{ fontSize: 18, color: '#3f51b5', mr: 0.5 }} />
                  <Typography variant="caption" color="primary">
                    Why does an Opening DM matter?
                  </Typography>
                </Box>
              </Box>
            )}
          </Paper>

          {/* DM with the link */}
          <Paper sx={{ p: 1, mt: 2, backgroundColor: mode == 'dark' ? '#1b1a1aff' : "#f4f4f4ff", }}>
            <Typography fontWeight={500} mb={1}>
              a DM with the link
            </Typography>
            {/* DM message input */}
            <TextField
              fullWidth
              multiline
              minRows={2}
              value={messages.linkMessage}
              onChange={(e) => setMessages((prev) => ({ ...prev, linkMessage: e.target.value }))}
              placeholder="Type your DM message here..."
              sx={{
                mt: 1,
                borderRadius: '4px',
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
              }}
            />

            {/* Link input */}
            <TextField
              fullWidth
              size="small"
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              placeholder="Paste a link here..."
              sx={{
                mt: 1,
                borderRadius: '4px',
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
              }}
            />

            {/* Add Link button */}
            <Button
              fullWidth
              variant="outlined"
              onClick={handleAddLink}
              sx={{ mt: 1, textTransform: 'none' }}
              startIcon={<Typography fontSize={20}>+</Typography>}
            >
              Add {linkInput ? "This" : 'A'} Link
            </Button>

            {/* Display added links */}
            {links.length > 0 && (
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {links.map((link, index) => (
                  <Chip
                    key={index}
                    label={link}
                    onDelete={() => handleRemoveLink(index)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            )}
          </Paper>
          <Button onClick={handleNext} disabled={steps > 3 || (links.length === 0 && messages.linkMessage === '')} variant='outlined' size='small' sx={{
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

      {steps >= 4 &&
        <Box>
          <Typography variant="subtitle1" fontWeight={600} mb={1}>
            Other things to automate
          </Typography>
          <ProFeature mode={mode} text='Reply under the post so people feel seen and special' switchBtn={true} />
          <ProFeature mode={mode} text='Follow up to re-engage and build trust' switchBtn={true} />
          <ProFeature mode={mode} text='Automatically ask for a follow to build your audience' switchBtn={true} />
          <ProFeature mode={mode} text='Ask for emails in DMs to keep in touch beyond social' switchBtn={true} />
          <Button variant='outlined' size='small' sx={{
            color: mode == 'dark' ? "#c5c5c5ff" : '#363636',
            fontSize: '12px',
            mt: 1,
            fontWeight: "600",
            border: "1px solid #898989bf",
            textTransform: "capitalize"
          }} >
            Finish
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
