import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center mb-20 justify-center min-h-screen border rounded-2xl text-white p-6 active">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
          Contact Me
        </h2>
        <p className="text-gray-400 max-w-md mx-auto" data-aos="fade-down">
          Feel free to reach out via email, phone, or WhatsApp. I’m always open
          to discussing new projects and opportunities.
        </p>
      </div>

      <div className="mt-8 space-y-6 w-full max-w-sm">
        {/** Contact Card */}
        <div
          className="flex items-center gap-4 p-4 border-2 rounded-lg bg-gray-800 shadow-lg transition hover:scale-105"
          data-aos="fade-right"
          style={{
            borderImage:
              "linear-gradient(to right, #3b82f6, #9333ea, #3b82f6) 1",
            borderImageSlice: 1,
          }}
        >
          <Mail className="text-blue-400 w-6 h-6" />
          <a
            href="mailto:your.email@example.com"
            className="text-lg hover:text-blue-400 transition"
          >
            ibrahimfuad729@gmail.com
          </a>
        </div>

        <div
          className="flex items-center gap-4 p-4 border-2 rounded-lg bg-gray-800 shadow-lg transition hover:scale-105"
          data-aos="fade-left"
          style={{
            borderImage:
              "linear-gradient(to right, #3b82f6, #9333ea, #3b82f6) 1",
            borderImageSlice: 1,
          }}
        >
          <Phone className="text-green-400 w-6 h-6" />
          <a
            href="tel:+1234567890"
            className="text-lg hover:text-green-400 transition"
          >
            +88 01629559720
          </a>
        </div>

        <div
          className="flex items-center gap-4 p-4 border-2 rounded-lg bg-gray-800 shadow-lg transition hover:scale-105"
          data-aos="fade-right"
          style={{
            borderImage:
              "linear-gradient(to right, #3b82f6, #9333ea, #3b82f6) 1",
            borderImageSlice: 1,
          }}
        >
          <MessageCircle className="text-teal-400 w-6 h-6" />
          <a
            href="https://wa.me/01629559720"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-teal-400 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
