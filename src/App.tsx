import Hero from "./pages/Hero";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import NewReleaseBooks from "./pages/NewReleaseBooks";
import Contact from "./pages/Contact";
import AboutUs from './pages/AboutUs';
import Footer from "./components/Footer";

export function App() {
  return (
      <>
        <Hero />
        <Categories />
        <Products />
        <NewReleaseBooks />
        <Contact />
        <AboutUs />
        <Footer />
      </>
  );
}

