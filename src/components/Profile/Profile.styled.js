import styled from 'styled-components';

const StyledUserProfile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  background-color: white;
`;

const StyledAvatar = styled.img`
  width: 250px;
  border: 1px solid black;
  border-radius: 50%;
`;

const StyledTitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 20px;
  text-align: center;
  color: gray;
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

  width: calc(100% / 3);
  border: 1px solid gray;
  background-color: lightgrey;
  align-items: center;
  justify-content: center;
`;

const StyledStatsLable = styled.p`
  font-size: 16px;
  margin: 0;
  color: gray;
`;

const StyledStatsQuantity = styled.span`
  font-weight: bold;
`;

export {
  StyledUserProfile,
  StyledAvatar,
  StyledTitle,
  StyledText,
  StyledStatsList,
  StyledStatsItem,
  StyledStatsLable,
  StyledStatsQuantity,
};
