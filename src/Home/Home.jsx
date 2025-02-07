import Navbar from "../components/Navbar/Navbar";
import ParticleBg from "../components/ParticleBg/ParticleBg";
import About from "./About";
import Banner from "./Banner";
import ContactMe from "./ContactMe";
import PortfolioShowcase from "./PortfolioShowcase";

const Home = () => {
  return (
    <>
      <ParticleBg />
      <main className="w-10/12 mx-auto">
        <section className=" sticky top-0 z-50 shadow-md">
          <Navbar></Navbar>
        </section>
        <section id="home" className="">
          <Banner></Banner>
        </section>
        <section id="about">
          <About></About>
        </section>
        <section id="portfolio">
          <PortfolioShowcase></PortfolioShowcase>
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </main>
    </>
  );
};

export default Home;
