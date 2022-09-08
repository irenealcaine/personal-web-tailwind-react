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

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet"></link>

      <Home />

      <div>
        <Header />
        <Portfolio />
        {/* <Carousel /> */}
        <Skills />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

export default App;
