import PropTypes from 'prop-types';
import {
  StyledFriendItem,
  StyledFriendStatus,
  StyledFriendName,
  StyledFriendAvatar,
} from './Friends.styled';

export const FriendsListItems = ({ friends }) => {
  return friends.map(friend => {
    const { avatar, name, isOnline, id } = friend;
    return (
      <StyledFriendItem key={id}>
        <StyledFriendStatus
          style={{
            backgroundColor: isOnline ? 'green' : 'red',
          }}
        ></StyledFriendStatus>
        <StyledFriendAvatar src={avatar} alt="User avatar" width="48" />
        <StyledFriendName>{name}</StyledFriendName>
      </StyledFriendItem>
    );
  });
};

FriendsListItems.propTypes = { friends: PropTypes.array };
