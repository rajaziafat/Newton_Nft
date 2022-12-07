import TokenDistribution from "components/TokenDistribution";
import About from "layouts/About";
import Charts from "layouts/Charts";
import Footer from "layouts/Footer";
import Levels from "layouts/Levels";
import RevivialOfAvalanche from "layouts/RevivialOfAvalanche";
import TeamAndPartners from "layouts/TeamAndPartners";
import Unique from "layouts/Unique";
import Hero from "./layouts/Hero";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div>
      <div className="header z-10">
        <Navbar />
        <Hero />

        <img
          src="images/header-bg.png"
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          alt=""
        />
      </div>
      <About />
      <Unique />
      <RevivialOfAvalanche />

      <div className="relative">
        <img
          src="images/levels-bg.png"
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          alt=""
        />

        <Levels />
        <TokenDistribution />
      </div>

      <Charts />
      <TeamAndPartners />
      <Footer />
    </div>
  );
}

export default App;
