import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./commons/appNavbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Statistics from './Pages/Statistics';
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <>
      <AppNavbar />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/statistics" component={Statistics} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
