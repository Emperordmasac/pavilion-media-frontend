import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import NavBar from 'scenes/navbar';
import FriendListWidget from 'scenes/widgets/friendlist-widget';
import MyPostWidget from 'scenes/widgets/mypost-widget';
import PostsWidget from 'scenes/widgets/posts-widget';
import UserWidget from 'scenes/widgets/user-widget';

const ProfilePage = () => {
  const [user, setUser] = React.useState(null);

  const { userId } = useParams();

  const token = useSelector((state) => state.token);

  const desktopScreen = useMediaQuery('(min-width: 1000px)');

  const getUser = async () => {
    const response = await fetch(`http://localhost:5000/users/${userId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();

    setUser(data);
  };

  React.useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;
  return (
    <Box>
      <NavBar />
      <Box
        width='100%'
        padding='2rem 6%'
        display={desktopScreen ? 'flex' : 'block'}
        gap='2rem'
        justifyContent='center'
      >
        <Box flexBasis={desktopScreen ? '26%' : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m='2rem 0' />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={desktopScreen ? '42%' : undefined}
          mt={desktopScreen ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m='2rem 0' />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
