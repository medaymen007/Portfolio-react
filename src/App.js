import './App.css';
import "./css/mainProSite.css"
import "./css/nrml_lize.css"
import Navbar from './allComponent/navBar/navBar';
import FixBar from './allComponent/navBar/fixDiv/fixDiv';
import Landing from './allComponent/Landing/Landing';

function App() {
  return (
    <div className="App">
     <FixBar/>
     <Navbar/>
     <Landing/>
    </div>
  );
}

export default App;
