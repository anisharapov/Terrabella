
import logo from './logo.svg';
import './App.css';
import './assets/css/reset.css';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/aboutPage';
import { HomePage } from './pages/homePage';
import { Header } from './components/header';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <div className="container">
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>} />
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/subscribe" element={<Subscribe />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
          </div>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
