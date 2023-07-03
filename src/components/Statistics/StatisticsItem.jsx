import data from '../../data.json';
import {
  StyledStatsItem,
  StyledStatsItemLable,
  StyledStatsItemPercent,
} from './Statistics.styled';

export const Stats = () => {
  return data.map(statistic => {
    return (
      <StyledStatsItem
        key={statistic.id}
        style={{
          backgroundColor:
            '#' + Math.floor(Math.random() * 16777215).toString(16),
        }}
      >
        <StyledStatsItemLable>{statistic.label}</StyledStatsItemLable>
        <StyledStatsItemPercent>
          {statistic.percentage} %
        </StyledStatsItemPercent>
      </StyledStatsItem>
    );
  });
};
