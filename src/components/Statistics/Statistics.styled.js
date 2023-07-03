import styled from 'styled-components';

const StyledStatsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0 0 0;
  background-color: white;
`;

const StyledStatsList = styled.ul`
  display: flex;
  margin: 0;
  width: 100%;
  padding: 0;
`;

const StyledStatsItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: calc(100% / 4);
  background-color: {'#' + Math.floor(Math.random() * 16777215) .toString(16)};
  align-items: center;
  justify-content: center;
`;

const StyledStatsItemLable = styled.span`
  color: white;
`;

const StyledStatsItemPercent = styled.span`
  color: white;
  padding-top: 10px;
  font-size: 24px;
`;

export {
  StyledStatsSection,
  StyledStatsList,
  StyledStatsItem,
  StyledStatsItemLable,
  StyledStatsItemPercent,
};
