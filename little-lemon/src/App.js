import './App.css';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Mainpage from './Mainpage';
import Testimonials from './Testimonials';
import About from './About';

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <Mainpage></Mainpage>
      <Testimonials></Testimonials>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
