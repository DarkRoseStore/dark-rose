import Hero from "./pages/Hero/Hero";
import News from "./pages/News/News";
import NewReleaseBooks from "./pages/NewReleaseBooks/NewReleaseBooks";
import Contact from "./pages/Contact/Contact";
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services/Services";

export function App() {
  return (
      <>
        <Hero />
        <hr className="absolute w-full" />
        <News />
        <hr className="absolute w-full" />
        <NewReleaseBooks />
        <hr className="absolute w-full" />
        <Services />
        <Contact />
        <AboutUs />
        <Footer />
      </>
  );
}

