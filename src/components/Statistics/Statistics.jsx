import PropTypes from 'prop-types';
import { StyledStatsList, StyledStatsSection } from './Statistics.styled';
import { StatatisticItems } from './StatisticsItems';

export const Statistics = ({ data, title }) => {
  return (
    <StyledStatsSection>
      {title && <h2> {title}</h2>}
      <StyledStatsList>
        <StatatisticItems data={data} />
      </StyledStatsList>
    </StyledStatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
