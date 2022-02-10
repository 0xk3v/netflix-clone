import { ThemeProvider } from "styled-components";
import { Footer, Hero, Nav, StoryCards } from "./components";
import FAQs from "./components/FAQs/FAQs";
import GlobalStyles from "./styles/globalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <Hero />
      <StoryCards />
      <FAQs />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
