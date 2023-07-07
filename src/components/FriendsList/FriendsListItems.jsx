import {
  StyledFriendItem,
  StyledFriendStatus,
  StyledFriendName,
  StyledFriendAvatar,
} from './Friends.styled';

export const FriendsListItems = ({ data }) => {
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
