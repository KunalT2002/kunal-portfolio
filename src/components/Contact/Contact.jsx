import { ToastContainer } from "react-toastify";
import { FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
import "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kunal-thorat-248a54272" },
            { icon: <FaWhatsapp />, link: "https://wa.me/+917020406105" },
            { icon: <FaPhone />, link: "tel:+917020406105" },
            { icon: <FaEnvelope />, link: "mailto:kunalthorat581@gmail.com" },
          ].map((item, index) => (
              <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-purple-500 transition-transform transform hover:scale-110"
              >
                {item.icon}
              </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
