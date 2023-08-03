import Footer from "./Footer";
import Header from "./Header";
import Mainpage from "./Mainpage";
import Navigation from "./Navigation";
import Testimonials from "./Testimonials";
import About from './About';

function Home() {
    return (
        <>
            <Navigation></Navigation>
            <Header></Header>
            <Mainpage></Mainpage>
            <Testimonials></Testimonials>
            <About></About>
            <Footer></Footer>
        </>
    )
}

export default Home;