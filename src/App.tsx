import Hero from "./pages/Hero/Hero";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import NewReleaseBooks from "./pages/NewReleaseBooks/NewReleaseBooks";
import Contact from "./pages/Contact/Contact";
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from "./components/Footer/Footer";

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

