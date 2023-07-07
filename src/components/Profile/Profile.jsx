import PropTypes from 'prop-types';

import {
  StyledUserProfile,
  StyledAvatar,
  StyledTitle,
  StyledText,
  StyledStatsList,
  StyledStatsItem,
  StyledStatsLable,
  StyledStatsQuantity,
} from './Profile.styled';

export const UserProfile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <StyledUserProfile>
      <div>
        <StyledAvatar src={avatar} alt="User avatar" className="avatar" />
        <StyledTitle>{username}</StyledTitle>
        <StyledText>@{tag}</StyledText>
        <StyledText>{location}</StyledText>
      </div>

      <StyledStatsList>
        <StyledStatsItem>
          <StyledStatsLable>Followers: </StyledStatsLable>
          <StyledStatsQuantity>{followers}</StyledStatsQuantity>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledStatsLable>Views: </StyledStatsLable>
          <StyledStatsQuantity>{views}</StyledStatsQuantity>
        </StyledStatsItem>
        <StyledStatsItem>
          <StyledStatsLable>Likes: </StyledStatsLable>
          <StyledStatsQuantity>{likes}</StyledStatsQuantity>
        </StyledStatsItem>
      </StyledStatsList>
    </StyledUserProfile>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
