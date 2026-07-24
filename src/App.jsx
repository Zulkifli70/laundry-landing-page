import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { WhyUs } from "./sections/WhyUs";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { CTABanner } from "./sections/CTABanner";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

export default App;