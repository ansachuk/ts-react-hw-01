import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { data, friends, transactions, user } from "../data";

const App = () => {
	return (
		<>
			<Profile user={user} />
			<Statistics title="Upload stats" stats={data} />
			<FriendList friends={friends} />
			<TransactionHistory transactions={transactions} />
		</>
	);
};

export default App;
