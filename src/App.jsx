// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { DistributorForm } from './components/DistributorForm';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
       
        
            <section id="home">
            <Home/>
            </section> 
            
            <section id='about'>
            <About/>
            </section> 

            <section id='products'>
            <Products/>
            </section> 

            <section id='contact'>
            <Contact/>
            </section> 
            
            <section id='distributionform'>
              <DistributorForm/>
            </section>

        
        <Footer />
      </div>
   </>
  );
}

export default App;