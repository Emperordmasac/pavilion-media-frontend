import * as React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

import WidgetWrapper from 'components/widget-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from 'state';
import Friend from 'components/friend';

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const getFriends = async () => {
    const response = await fetch(
      `https://pavilion-media-node-server.onrender.com/users/${userId}/friends`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    const data = await response.json();

    dispatch(setFriends({ friends: data }));
  };

  React.useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant='h5'
        fontWeight='500'
        sx={{ mb: '1.5rem' }}
      >
        Friend List
      </Typography>
      <Box display='flex' flexDirection='column' gap='1.5rem'>
        {friends &&
          friends.length > 0 &&
          friends.map((friend, i) => (
            <Friend
              key={`${friend._id}-${i}`}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            ></Friend>
          ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
