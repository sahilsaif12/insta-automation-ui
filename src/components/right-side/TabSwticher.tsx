
import  { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { tabs } from '../../constants/Tabs';
import type { MessageType } from '../../App';
interface props {
  comment: string;
  mode: 'dark' | 'light';
  messages: MessageType
}

export default function TabSwitcher({ comment, mode, messages }: props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (comment) setActive(tabs.indexOf('Comments'))
    else setActive(0)
  }, [comment])

  useEffect(() => {
    if (messages.openingDmActive || messages.linkMessage || (messages.links?.length && messages.links?.length > 0)) {
      setActive(tabs.indexOf("DM"))
    } else setActive(0)
  }, [messages])


  return (
    <Box
      sx={{
        display: 'inline-flex',
        bgcolor: mode === 'dark' ? '#525252ff' : '#dcdee4ff',
        borderRadius: '999px',
        p: '4px',
        position: 'relative',
        width: 'fit-content',
      }}
    >
      {/* Active Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 4,
          left: `calc(${active} * 100% / ${tabs.length})`,
          width: `calc(100% / ${tabs.length} )`,
          height: 'calc(100% - 8px)',
          bgcolor: mode === 'dark' ? '#242424ff' : '#fff',
          px: 1,
          borderRadius: '999px',
          transition: 'left 0.3s',
          zIndex: 0,
        }}
      />

      {tabs.map((label, index) => (
        <Box
          key={label}
          onClick={() => setActive(index)}
          sx={{
            mx: 3,
            py: 0.8,
            zIndex: 1,
            cursor: 'pointer',
            pointerEvents: 'none',
            color: active === index ? mode === 'dark' ? "#edededff" : '#000' : mode === "dark" ? '#cececeff' : '#555',

            fontWeight: active === index ? 600 : 500,
            position: 'relative',
            textAlign: 'center',
            width: `calc(100% / ${tabs.length})`,
          }}
        >
          <Typography variant="body2">{label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
