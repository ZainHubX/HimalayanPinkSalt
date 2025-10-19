import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { DistributorForm } from './components/DistributorForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/distributor" element={<DistributorForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;