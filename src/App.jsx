import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/Hero/AboutMe/AboutMe';
import Hero from './Components/Hero/Hero';
import MyProjects from './Components/MyProjects/MyProjects';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <MyProjects></MyProjects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
