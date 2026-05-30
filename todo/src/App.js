import './App.css';
import { Tasks } from './Component/Task';
import { Navbar } from './Component/Navbar';
import { BrowserRouter, Route ,  Routes } from 'react-router-dom';
import { About } from './Component/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/about" element={<About />} />
          </Routes>
         </main>
      </div>
    </BrowserRouter>
  );
}

export default App;