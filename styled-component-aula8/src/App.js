import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { themeLight, themeDark } from "./Components/UI/themes";
import { ButtonTheme } from "./Components/UI";
import SwitcherTheme from './Components/SwitcherTheme';


function App() {
  const [theme, setTheme] = useState(true)
  
  const toggleTheme = () =>{
    setTheme( !theme);
  }

	return (
		<ThemeProvider theme={theme? themeDark: themeLight}>
			<ButtonTheme onClick={toggleTheme}>
				<SwitcherTheme  theme={theme}/>
			</ButtonTheme>
			<GlobalStyle />
			<Header />
			<Container />
		</ThemeProvider>
	);
}

export default App;
