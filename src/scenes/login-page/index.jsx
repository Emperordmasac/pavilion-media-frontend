import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import FlexBetween from 'components/flex-between';

import Form from './form';

const LoginPage = () => {
  const theme = useTheme();
  const desktopScreen = useMediaQuery('(min-width: 1000px)');
  return (
    <Box>
      <Box
        width='100%'
        backgroundColor={theme.palette.background.alt}
        p='1rem 6%'
        textAlign='center'
      >
        <Typography fontWeight='bold' fontSize='32px' color='primary'>
          PavilionMedia
        </Typography>
      </Box>
      <FlexBetween>
        {/* <Box width={desktopScreen ? '50%' : null}></Box> */}
        <Box
          width={desktopScreen ? '50%' : '93%'}
          p='2rem'
          m='2rem auto'
          borderRadius='1.5rem'
          // backgroundColor={theme.palette.background.alt}
        >
          <Typography
            fontWeight='500'
            variant='h5'
            sx={{ mb: '1.5rem' }}
            textAlign='center'
          >
            Welcome to PavilionMedia, the social media for pavilion members
          </Typography>
          <Form />
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default LoginPage;
