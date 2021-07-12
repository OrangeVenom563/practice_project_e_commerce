import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const Hatspage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div className='container'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hatspage} />
      </Switch>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
