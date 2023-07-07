import { PropTypes } from 'prop-types';
import { StyledFriendList, StyledFriendSection } from './Friends.styled';
import { FriendsListItems } from './FriendsListItems';

export const FriendsList = ({ friends }) => {
  return (
    <StyledFriendSection>
      <StyledFriendList>
        <FriendsListItems friends={friends} />
      </StyledFriendList>
    </StyledFriendSection>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};
