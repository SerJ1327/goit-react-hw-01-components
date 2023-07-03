import data from '../../friends.json';
import {
  StyledFriendItem,
  StyledFriendStatus,
  StyledFriendName,
  StyledFriendAvatar,
} from './Friend.styled';

export const FriendListItem = () => {
  return data.map(friend => {
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

//
