import Footer from "./Footer";
import Header from "./Header";
import Mainpage from "./Mainpage";
import Navigation from "./Navigation";
import Testimonials from "./Testimonials";

function Home() {
    return (
        <>
            <Navigation></Navigation>
            <Header></Header>
            <Mainpage></Mainpage>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </>
    )
}

export default Home;