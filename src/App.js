import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GestionUsuarios } from './views/GestionUsuarios';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<GestionUsuarios/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
