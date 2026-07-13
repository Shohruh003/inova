import About from "./components/About";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Terms from "./components/Terms";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Services />
      <Steps />
      <Terms />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
