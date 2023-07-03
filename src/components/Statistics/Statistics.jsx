import { StyledStatsList, StyledStatsSection } from './Statistics.styled';
import { Stats } from './StatisticsItem';

export const Statistics = () => {
  return (
    <StyledStatsSection>
      <h2 className="title">UPLOAD STATS</h2>
      <StyledStatsList>
        <Stats />
      </StyledStatsList>
    </StyledStatsSection>
  );
};
