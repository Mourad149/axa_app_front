import logo from './logo.svg';
import './App.css';
import { Route,   BrowserRouter as Router, Routes } from 'react-router-dom';
import DevisPage from './containers/DevisPage';
import AppBarComponent from './ui/AppBarComponent';
import AddDevisPage from './containers/AddDevisPage';

function App() {
  return (
  <Router>
   <AppBarComponent>
    <Routes>
      <Route path='/devis' Component={DevisPage}></Route>
      <Route path='/addDevis' Component={AddDevisPage}></Route>

    </Routes>
    </AppBarComponent>

  </Router>
  );
}

export default App;
