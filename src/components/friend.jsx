import * as React from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';

import { setFriends } from 'state';
import UserImage from './user-image';
import FlexBetween from './flex-between';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);

  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  // const isFriend = friends.find((friend) => friend._id === friendId);
  const isFriend =
    friends && friends.length > 0
      ? friends.find((friend) => friend._id === friendId)
      : false;

  const patchFriend = async () => {
    const response = await fetch(
      `https://pavilion-media-node-server.onrender.com/users/${_id}/${friendId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();

    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap='1rem'>
        <UserImage image={userPicturePath} />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            //--DIRTY WORKAROUND
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant='h5'
            fontWeight='500'
            sx={{
              '&:hover': {
                cursor: 'pointer',
                color: palette.primary.light,
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize='0.75rem'>
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: '0.6rem' }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};

export default Friend;
