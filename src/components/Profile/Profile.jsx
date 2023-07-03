import data from '../../user.json';
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

const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = data;

export const UserProfile = () => {
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
