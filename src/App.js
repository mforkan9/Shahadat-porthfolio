import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';

export const ContextUser = createContext()
function App() {
  return (
  <ContextUser.Provider>
      <Home></Home>
   </ContextUser.Provider>
  );
}

export default App;
