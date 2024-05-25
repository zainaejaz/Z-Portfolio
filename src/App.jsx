import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Services from "./components/Services";

export default function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
