import { Typography, useTheme } from '@mui/material';
import FlexBetween from 'components/flex-between';
import WidgetWrapper from 'components/widget-wrapper';

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width='100%'
        height='auto'
        alt='advert'
        src='https://pavilion-media-node-server.onrender.com/assets/info4.jpeg'
        style={{ borderRadius: '0.75rem', margin: '0.75rem 0' }}
      />
      <FlexBetween>
        <Typography color={main}>PavilionCommerce</Typography>
        <Typography color={medium}>PavilionCommerce.com</Typography>
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        It's about more than just making a purchase; it's about creating a
        shopping journey that understands and caters to your unique preferences
        and needs
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
