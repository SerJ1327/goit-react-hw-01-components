import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import { Container } from './App.styled.js';
import { UserProfile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendsList } from './FriendsList/FriendsList.jsx';
import { Transactions } from './TransactionsHistory/Transactions.jsx';

export const App = () => {
  return (
    <Container>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" data={data} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </Container>
  );
};
