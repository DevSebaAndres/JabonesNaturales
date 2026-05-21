
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Features } from './components/Features/Features';
import { Manifesto } from './components/Manifesto/Manifesto';
import { Collection } from './components/Collection/Collection';
import { Footer } from './components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main className="relative w-full min-h-screen bg-butter overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Manifesto />
      <Collection />
      <Footer />
    </main>
  );
}

export default App;
