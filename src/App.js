import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./commons/appNavbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Statistics from './Pages/Statistics';
import Welcome from "./Pages/Welcome";
import Certificate from "./Pages/Certificate"

function App() {
  return (
    <>
      <AppNavbar />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/certificate" component={Certificate} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
