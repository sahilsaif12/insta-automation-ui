import { Avatar, Box, Button } from '@mui/material'
import logoImg from '../../assets/botspace.png'

interface props {
    msg: string;
    submsg?: string;
    type: 'sent' | 'receive'

}
function Message({ msg, submsg, type }: props) {
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: type === 'sent' ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
                gap: 1,
                px: 1
            }}
        >
            {type === 'receive' &&
                <Avatar src={logoImg} sx={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            }
            <Box
                sx={{
                    bgcolor: type === 'sent' ? '#5A3BD7' : '#2f2f2f',
                    color: '#fff',
                    borderRadius: type === 'sent' ? "6px 6px 0 6px" : '6px 6px  6px 0',
                    px: 2,
                    py: 1.2,
                    maxWidth: '80%',
                    fontSize: 14,
                    whiteSpace: 'pre-wrap'
                }}
            >
                {msg}
                {submsg && (
                    <Box mt={1}>
                        <Button

                            fullWidth
                            size="small"
                            variant="contained"
                            sx={{
                                pointerEvents: 'none',
                                bgcolor: '#3a3a3a',
                                color: '#fff',
                                textTransform: 'none',
                                fontSize: 13,
                                '&:hover': { bgcolor: '#555' }
                            }}
                        >
                            Send me the link
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default Message