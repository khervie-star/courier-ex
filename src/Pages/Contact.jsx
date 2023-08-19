import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="my-[120px]">
        <div className="container mx-auto">
          <div className="w-[85%] mx-auto flex items-center">
            <div>
              <h2>Let's Chat</h2>
              <h2>Get in Touch</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
