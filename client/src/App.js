import { Switch, Route, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Home from './pages/Home';
import Create from './pages/Create';
import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      EduLight {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  return (
    <div className="App" id="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
      </Switch>
      <Copyright />
    </div>
  );
}

export default App;
