import React, { Suspense } from 'react';
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
import userImage1 from '../../userPic.png'
import userImage2 from '../../userImage.png'

const User = React.lazy(() => import('./User'));

const UserSelector = () => {

	const spinner = () => {
		return (
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		)
	}

	return (
		<React.Fragment>
			<Wrapper>
				<UserWrapper>
					<Suspense fallback={<div>{spinner()}</div>}>
						<User userName={'User 1'} userImage={userImage1}/>
					</Suspense>
				</UserWrapper>
				<UserWrapper>
					<Suspense fallback={<div>{spinner()}</div>}>
						<User userName={'User 2'} userImage={userImage2}/>
					</Suspense>
				</UserWrapper>
			</Wrapper>
			<h1>Please Select a User</h1>
		</React.Fragment>
	);
}

export default UserSelector;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-bottom: 5%
`

const UserWrapper = styled.div`
	width: 40%
`