import React from 'react';
import styled from 'styled-components'

const User = ({userName, userImage}) => {
	return (
		<Wrapper>
			<UserImage src={userImage} alt={'user'} />
			<UserName>{userName}</UserName>
		</Wrapper>
	);
}

export default User;

const UserImage = styled.img`
	border-radius: 50%;
	width: 100%
`;

const UserName = styled.p`
	text-align: center;
	font-size: 20pt;
	margin-top: 10%;
`;

const Wrapper = styled.div`
	background-color: white;
	border-radius: 5%;
	box-shadow: 0px 11px 16px -4px rgba(0,0,0,0.36);
	padding: 20%
	
`
