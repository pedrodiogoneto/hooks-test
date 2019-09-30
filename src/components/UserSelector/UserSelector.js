import React, { Suspense } from 'react';
import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'
const User = React.lazy(() => import('./User'));



const UserSelector = () => {

	const spinner = () => {
		return(
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		)
	}

	return (
		<Wrapper>
			<UserWrapper>
				<Suspense fallback={<div>{spinner()}</div>}>
						<User userName={'test1'}/>
				</Suspense>
			</UserWrapper>
			<UserWrapper>
				<Suspense fallback={<div>{spinner()}</div>}>
					<User userName={'test2'}/>
				</Suspense>
			</UserWrapper>
		</Wrapper>
	);
}

export default UserSelector;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around
`

const UserWrapper = styled.div`
	width: 30%
`