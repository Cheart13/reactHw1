import { useState } from 'react';
import './App.css';
import FriendListItem from './components/FriendListItem';
import friends from './components/friends.json';
import user from './components/user.json';
import Profile from './components/Profile';


function App() {

	const [frends, setFrends] = useState(friends);
	const profile = user;

	console.log(profile);



	return (
		<div className="App">
			{<Profile name={profile.name} avatar={profile.avatar} tag={profile.tag} location={profile.location} stats={profile.stats} />}
			{frends.map(friend =>
				
				<FriendListItem dryg={friend} name='clava' />
			)}

		</div>
	);
}

export default App;
