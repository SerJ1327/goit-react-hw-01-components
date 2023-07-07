import { PropTypes } from 'prop-types';
import { UserProfile } from 'components/Profile/Profile';
import { StyledStatsList, StyledStatsSection } from './Statistics.styled';
import { StatatisticItems } from './StatisticsItems';

export const Statistics = ({ data, title }) => {
  return (
    <StyledStatsSection>
      {title.length > 0 && <h2> {title}</h2>}
      <StyledStatsList>
        <StatatisticItems data={data} />
      </StyledStatsList>
    </StyledStatsSection>
  );
};

UserProfile.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};
