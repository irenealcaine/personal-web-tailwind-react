import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
// import Carousel from './components/Carousel';

function App() {
  return (
    <div className="bg-zinc-900 text-white scroll-smooth">

      <Home />

      <div>
        <Header />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
