import About from "./components/About";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Reveal from "./components/Reveal";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Terms from "./components/Terms";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Reveal>
        <Products />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Steps />
      </Reveal>
      <Reveal>
        <Terms />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Partners />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
