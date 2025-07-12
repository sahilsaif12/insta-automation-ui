import { Box } from '@mui/material'
import AutomationSteps from './AutomationSteps';
import type { Dispatch, SetStateAction } from 'react';
import type { MessageType } from '../../App';
interface props {

  mode: 'dark' | 'light';
  ChosenPostIndex: number;
  setChosenPostIndex: Dispatch<SetStateAction<number>>;
  comment: string;
  setcomment: Dispatch<SetStateAction<string>>
  messages: MessageType
  setMessages: Dispatch<SetStateAction<MessageType>>
}
function LeftSide({ mode, ChosenPostIndex, setChosenPostIndex, comment, setcomment, messages, setMessages }: props) {
  return (
    <Box sx={{
      background: mode === 'light' ? '#FFFFFF' : '#000000',
      flex: '1',
      maxHeight: "100vh",
      overflowY: "scroll",
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: mode === 'light' ? '#bbb' : '#555',
        borderRadius: '10px',
      },
      scrollbarWidth: 'thin', // For Firefox
      scrollbarColor: `${mode === 'light' ? '#bbb' : '#555'} transparent`, // For Firefox

    }} >


      <AutomationSteps mode={mode} ChosenPostIndex={ChosenPostIndex} setChosenPostIndex={setChosenPostIndex} comment={comment} setcomment={setcomment} messages={messages} setMessages={setMessages} />
    </Box>
  )
}

export default LeftSide