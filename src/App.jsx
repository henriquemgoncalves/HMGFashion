import HeroVideo from './components/HeroVideo';
import Intro from './components/Intro';
import LookBook from './components/LookBook';
import TitleLogo from './components/TitleLogo';
import NavBar from "./components/NavBar";
import './styles/app.sass'
import Credits from './components/Credits';
import Shop from './components/Shop';
import LastSeason from './components/LastSeason';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div id="app">
      <NavBar/>
      <TitleLogo/>
      <HeroVideo/>
      <Intro/>
      <LookBook/>
      <Credits/>
      <Shop/>
      <LastSeason/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default App;