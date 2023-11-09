import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

import NavBar from 'scenes/navbar';
import UserWidget from 'scenes/widgets/user-widget';
import MyPostWidget from 'scenes/widgets/mypost-widget';
import PostsWidget from 'scenes/widgets/posts-widget';
import AdvertWidget from 'scenes/widgets/advert-widget';
import FriendListWidget from 'scenes/widgets/friendlist-widget';

const HomePage = () => {
  const desktopScreen = useMediaQuery('(min-width: 1000px)');
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <NavBar />
      <Box
        width='100%'
        padding='2rem 6%'
        display={desktopScreen ? 'flex' : 'block'}
        gap='0.5rem'
        justifyContent='space-between'
      >
        <Box flexBasis={desktopScreen ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={desktopScreen ? '42%' : undefined}
          mt={desktopScreen ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {desktopScreen && (
          <Box flexBasis='26%'>
            <AdvertWidget />
            <Box m='2rem 0' />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
