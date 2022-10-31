
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    //BEM Naming Convention app LowerCase
    <div className="app">
      <Header/>
      <Home/>
      
      {/* Footer  */}
    </div>
  );
}

export default App;
