import styled from 'styled-components';

const StyledPlatformButton = styled.button`
	background-color: ${({ $active }) => ($active ? 'steelblue' : 'darkgray')};
	color: ${({ $active }) => ($active ? 'white' : 'black')};
	border: none;
`;

export { StyledPlatformButton };
