import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Booking from './components/Booking';
import Stats from './components/Stats';
import Professionals from './components/Professionals';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About/>
      <Booking />
      <Stats />
      <Professionals />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}

export default App;