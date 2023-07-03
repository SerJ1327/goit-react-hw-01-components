import { Container } from './App.styled.js';
import { FriendList } from './FriendList/FriendList.jsx';
import { UserProfile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Transactions } from './TransactionHistory/Transaction.jsx';

export const App = () => {
  return (
    <Container>
      <UserProfile />
      <Statistics />
      <FriendList />
      <Transactions />
    </Container>
  );
};
