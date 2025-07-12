// SidebarWithHoverExpand.tsx
import  { useState, type Dispatch, type SetStateAction } from 'react';
import {
    Avatar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
    Typography,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const drawerWidth = 200;
const collapsedWidth = 60;
const sidebarItemList = [
    {
        text: 'Home',
        icon: <HomeOutlinedIcon />
    },
    {
        text: 'User',
        icon: <PermIdentityOutlinedIcon />
    },
    {
        text: 'Automation',
        icon: <InsightsOutlinedIcon sx={{color:"#18C064"}} />
    },
    {
        text: 'Messages',
        icon: <MarkChatUnreadOutlinedIcon />
    },
    {
        text: 'Shares',
        icon: <NearMeOutlinedIcon />
    },
    {
        text: 'Setting',
        icon: <SettingsSuggestOutlinedIcon />
    },
]

export interface props {

    mode: 'dark' | 'light';
    setMode: Dispatch<SetStateAction<'light' | 'dark'>>;
}

export default function Sidebar({ mode, setMode }: props) {
    const [open, setOpen] = useState(false);

    const isExpanded =  open;

    return (

            <Drawer
                variant="permanent"
                sx={{
                    width: isExpanded ? drawerWidth : collapsedWidth,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                    transition: 'width 0.3s',
                    overflow: 'visible',
                    '& .MuiDrawer-paper': {
                        width: isExpanded ? drawerWidth : collapsedWidth,
                        transition: 'width 0.3s',
                        overflowX: 'hidden',
                        backgroundColor: mode == 'dark' ? '#363636' : "#f4f4f4ff",
                        color: '#fff',
                    },
                }}
            >

                <Box
                    sx={{
                        height: 64,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isExpanded ? 'space-between' : 'center',
                        px: 2,
                        position: 'relative',
                        color: mode === 'dark' ? '#dededeff' : "#4d4747ff"
                    }}
                >
                    {isExpanded && <Box sx={{ fontWeight: 'bold' }}>Insta-fied</Box>}
                    <IconButton
                        color="inherit"
                        onClick={() => setOpen((prev) => !prev)}
                        size="small"
                        sx={{
                            borderRadius: "6px",
                            background: mode === 'dark' ? '#3f3f3fff' : '#e6e6e6ff',
                            '&:focus': {
                                outline: 'none',
                                boxShadow: 'none',
                            },
                            '&:focus-visible': {
                                outline: 'none',
                                boxShadow: 'none',
                            },
                        }}
                    >
                        <SyncAltOutlinedIcon />
                    </IconButton>
                </Box>
                <List>
                    {sidebarItemList.map((item, index) => (
                        <Tooltip key={index} title={!isExpanded ? item.text : ''} placement="right">
                            <ListItem disablePadding sx={{ color: mode === 'dark' ? '#dededeff' : "#4d4747ff", }} >
                                <ListItemButton sx={{ px: 2, my: 1 }}>
                                    <ListItemIcon sx={{ minWidth: 0, mr: isExpanded ? 2 : 'auto', justifyContent: 'center' }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText sx={{ visibility: isExpanded ? "visible" : "hidden" }} primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        </Tooltip>
                    ))}
                </List>
                <Box
                    sx={{
                        p: 2,
                        borderTop: '1px solid rgba(0,0,0,0.12)',
                        backgroundColor: 'inherit',
                        position: 'absolute',
                        bottom: 0,
                        display: 'flex',
                        flexDirection: isExpanded ? 'row' : 'column',
                        gap: '4px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >

                    <Tooltip title={!isExpanded ? 'Sk Saifuddin' : ''} placement="right">
                        <>
                            <Avatar
                                sx={{ background: '#0288D1' }}
                                alt="Sk Saifuddin"
                                src="/broken-image.jpg"
                            />
                            {isExpanded && <Typography sx={{ color: mode === 'dark' ? '#dededeff' : "#4d4747ff", }} >Sk Saifuddin</Typography>}
                        </>
                    </Tooltip>
                    <IconButton
                        color="inherit"
                        onClick={() => setMode((prev) => prev === 'dark' ? 'light' : 'dark')}
                        size="small"
                        sx={{
                            width: '40px',
                            height: '40px',
                            background: mode === 'dark' ? '#919191ff' : '#555555ff',
                            '&:focus': {
                                outline: 'none',
                                boxShadow: 'none',
                            },
                            '&:focus-visible': {
                                outline: 'none',
                                boxShadow: 'none',
                            },
                            '&:hover': {
                                background: mode === 'dark' ? '#919191ff' : '#555555ff', // Prevent any background on hover
                            },
                        }}
                    >
                        {mode === 'dark' ? <WbTwilightOutlinedIcon sx={{ color: "#282828ff" }} /> : <DarkModeIcon />}

                    </IconButton>
                </Box>
            </Drawer>
    );
}
