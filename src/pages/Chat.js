import React, { useState } from 'react';
import UserSelector from '../components/userSelector/UserSelector'
import styled from 'styled-components'

const Chat = () => {
	const [showUserSelector, setShowUserSelector] = useState(true);

	return (
		<Wrapper>
			{ showUserSelector && <UserSelector /> }

		</Wrapper>
	)
}

export default Chat

const Wrapper = styled.div`
	padding: 10%;
	background-color: #dedede;
`
