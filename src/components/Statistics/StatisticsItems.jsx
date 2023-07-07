import { PropTypes } from 'prop-types';
import {
  StyledStatsItem,
  StyledStatsItemLable,
  StyledStatsItemPercent,
} from './Statistics.styled';

export const StatatisticItems = ({ data }) => {
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

StatatisticItems.propTypes = {
  data: PropTypes.array,
};
