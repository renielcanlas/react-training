import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeSearch from './components/RecipeSearch/RecipeSearch';
import RecipeViewer from './components/RecipeSearch/RecipeViewer';
import GraphQL from './components/GraphQL/GraphQL';
import Continents from './components/GraphQL/Continents';
import client from './components/GraphQL/client';
import { ApolloProvider } from '@apollo/client';
import CountryDetails from './components/GraphQL/CountryDetails';

const App = () => {
  return(
    <ApolloProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/recipe" element={<RecipeSearch  />} />
        <Route path="/recipe/:name" element={<RecipeViewer />} />
        <Route path="/countries" element={<GraphQL />} />
        <Route path="/country/:code" element={<CountryDetails />} />
        <Route path="/continents" element={<Continents />} />
      </Routes>
    </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;
