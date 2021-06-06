import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import ShowDistrictCode from "./components/showDistrictCode";
import AppNavbar from "./components/appNavbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Statistics from './components/statistics';

function App() {
  return (
    <>
      <AppNavbar />
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShowDistrictCode} />
        <Route exact path="/statistics" component={Statistics} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
