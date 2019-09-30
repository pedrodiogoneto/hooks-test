import React, { useState } from 'react';
import UserSelector from '../components/userSelector/UserSelector'

const Chat = () => {
	const [showUserSelector, setShowUserSelector] = useState(true);

	return (
		<React.Fragment>
			{ showUserSelector && <UserSelector /> }
			<h1>Parent component</h1>
		</React.Fragment>
	)
}

export default Chat