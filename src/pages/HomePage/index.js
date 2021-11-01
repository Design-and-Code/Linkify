import React from "react";
import Header from "../../components/HomePage/header/Header.js";
import Home from "../../components/HomePage/featuresec/featuresec";
import HeroSection from "../../components/HomePage/herosection/herosection";
import Feature from "../../components/HomePage/features1/feature1";
import Footer from "../../components/HomePage/footer/footer.js";
import Modal from "../../components/login&signin/modal";
import { LinkifyContext } from "../../context.js";

function Homepage() {
  const { isModalOpen, setIsModalOpen } = React.useContext(LinkifyContext);
  console.log(Modal);
  return (
    <div>
      <Header />
      <HeroSection
        titleP="All your links in one place"
        about="The only link you'll ever need to connect with everyone in the world."
        start="Get Started"
      />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Home />
      <Feature />
      <Footer />
    </div>
  );
}

export default Homepage;