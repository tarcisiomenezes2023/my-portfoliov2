import Hero from  "./components/Hero"
import Who from "./components/Who"
import Work from "./components/Work"
import Contact from "./components/Contact"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import "./App.css"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body {
    height: 100%;
    overflow: hidden;
    }
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: #00001b;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
  <>
    <GlobalStyle />
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </Container>
  </>
  )
}

export default App
