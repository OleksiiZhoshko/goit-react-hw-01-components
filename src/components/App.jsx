import { Profile } from './profile/profile';
import user from '../path/user.json';
import { Statistics } from './statistics/statistics';
import stats from '../path/data.json';
import { FriendList } from './frendList/friendList';
import friends from '../path/friends.json';
// import { TransactionHistory } from './transactionHistory'
// import transactions from '../path/transactions.json';

;

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      {/* <TransactionHistory items={transactions} />; */}
    </>
  );
};
