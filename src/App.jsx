/**
 * @copyright 2025 Patrick Ma
 * @license Apache-2.0
 */

/**
 *
 * Node Modules
 */

import { ReactLenis, useLenis } from "lenis/react";

/**
 *  Components
 */
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill/Skills";
import Work from "./components/Work/Work";
import Review from "./components/Review/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};
export default App;
