import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Routes/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AllRoutes/>       */}
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
