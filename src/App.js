import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Home from './views/Home/Home';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
          <Home />
        </main>
    </div>
  );
}

export default App;
