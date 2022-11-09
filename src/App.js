import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Exhibition from './routes/exhibition';
import NeedForStreet from './routes/needForStreet';
import Blood from './routes/blood';
import About from './routes/about';
import Home from './routes/home';
import Contact from './routes/contact';
import Header from './components/header';
import { AnimatePresence } from 'framer-motion';

import "./styles.scss"

const App = () => {
  const location = useLocation();

  return (
    <>
    <Header/>
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="needForStreet" element={<NeedForStreet />} />
        <Route path="exhibition" element={<Exhibition />} />
        <Route path="blood" element={<Blood />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </AnimatePresence >
    </>
  );
}

export default App;
