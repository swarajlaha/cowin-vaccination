import 'bootstrap/dist/css/bootstrap.min.css';
import SearchByDistrict from './components/searchByDistrict';
import ShowDistrictCode from './components/showDistrictCode';

function App() {
  return (
    <div className="App">
      <ShowDistrictCode />
      <SearchByDistrict />
    </div>
  );
}

export default App;
