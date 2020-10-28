import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Insert from './components/Insert'
import Edit from './components/Edit'
import View from './components/View'
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <div className="container">
        <br />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/insert" component={Insert} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/view" component={View} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
