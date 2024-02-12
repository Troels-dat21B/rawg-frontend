import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return <Grid
  templateAreas={
    {base: '"nav" "main"',
    lg: '"nav nav" "aside main" ' 
  }}

>
  <GridItem bg='pink.300' gridArea={'nav'}>
  <NavBar />  
  </GridItem>
  <Show above="lg">
    <GridItem bg='yellow.300' gridArea={'aside'}>
      Aside
    </GridItem>
  </Show>
  <GridItem bg='green.300' gridArea={'main'}>
    <GameGrid></GameGrid>
  </GridItem>
</Grid>;
}

export default App;