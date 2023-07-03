import { StyledFriendList, StyledFriendSection } from './Friend.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
  return (
    <StyledFriendSection>
      <StyledFriendList>
        <FriendListItem />
      </StyledFriendList>
    </StyledFriendSection>
  );
};
