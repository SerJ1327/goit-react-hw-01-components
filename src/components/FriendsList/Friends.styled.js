import styled from 'styled-components';

const StyledFriendSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0 0 0;
  background-color: white;
`;

const StyledFriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledFriendItem = styled.li`
  display: flex;
  padding: 8px 10px;
  gap: 10px;
  width: 350px;
  align-items: center;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3), -1px -1px 1px rgba(0, 0, 0, 0.1);
`;

const StyledFriendStatus = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const StyledFriendAvatar = styled.img`
  width: 60px;
`;

const StyledFriendName = styled.p`
  font-size: 30px;
`;

export {
  StyledFriendSection,
  StyledFriendList,
  StyledFriendItem,
  StyledFriendStatus,
  StyledFriendAvatar,
  StyledFriendName,
};
