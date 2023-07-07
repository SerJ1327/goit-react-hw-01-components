import { StyledFriendList, StyledFriendSection } from './Friends.styled';
import { FriendsListItems } from './FriendsListItems';

export const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <StyledFriendSection>
      <StyledFriendList>
        <FriendsListItems data={friends} />
      </StyledFriendList>
    </StyledFriendSection>
  );
};
