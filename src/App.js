import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./views/Home"
import Pokemones from "./views/Pokemones"
import Detalles from "./views/Detalles"
import "./styles/main.css"
import { useEffect, useState } from 'react';
import MyContext from './myContext';

function App() {
  const [poke, setPoke] = useState([])
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
  let getPoke = async () => {
    let data = await fetch(pokeUrl);
    let res = await data.json();
    let listaPoke = res.results
    let listaOrdenada = listaPoke.sort()
    setPoke(listaOrdenada)
    console.log(listaPoke)
  }

  useEffect(() => {
      getPoke();
    },[])

  return (
    <MyContext.Provider value={ { poke, setPoke } }>
    <Container fluid>
      
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={ <Home /> } /> 
          <Route path='/Pokemones/' element={ <Pokemones /> } />
          <Route path='/Detalles/:name' element={ <Detalles /> } />
        </Routes>
      </BrowserRouter>
      
    </Container>
    </MyContext.Provider>
  );
}

export default App;
