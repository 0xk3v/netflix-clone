import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after{
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'Open Sans', sans-serif;
	}
`;

export default GlobalStyles;
