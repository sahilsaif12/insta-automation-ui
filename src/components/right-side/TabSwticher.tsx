
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { tabs } from '../../constants/Tabs';


export default function TabSwitcher() {
  const [active, setActive] = useState(0);

  return (
    <Box
      sx={{
        display: 'inline-flex',
        bgcolor: '#dcdee4ff',
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
          width: `calc(100% / ${tabs.length})`,
          height: 'calc(100% - 8px)',
          bgcolor: '#fff',
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
            color: active === index ? '#000' : '#555',
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
