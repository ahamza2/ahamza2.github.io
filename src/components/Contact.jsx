import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";

const Contact = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal(0.1);
  const [socialRef, socialVisible] = useScrollReveal(0.2);

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-[150px]" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div
          ref={titleRef}
          className={`transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to connect? I’m always open to
            new opportunities and conversations.
          </p>
        </div>

        <form
          ref={formRef}
          action="https://formspree.io/f/mnnakwrv"
          method="POST"
          className={`space-y-4 text-left transition-all duration-700 delay-200 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg outline-none focus:border-emerald-500/60 focus:shadow-lg focus:shadow-emerald-500/5 transition-all text-neutral-200 placeholder-neutral-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg outline-none focus:border-emerald-500/60 focus:shadow-lg focus:shadow-emerald-500/5 transition-all text-neutral-200 placeholder-neutral-600"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg outline-none focus:border-emerald-500/60 focus:shadow-lg focus:shadow-emerald-500/5 transition-all text-neutral-200 placeholder-neutral-600"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-lg outline-none focus:border-emerald-500/60 focus:shadow-lg focus:shadow-emerald-500/5 transition-all text-neutral-200 placeholder-neutral-600 resize-none"
          />
          <div className="text-center">
            <button type="submit" className="btn-primary !px-10 !py-3 group">
              Send Message
              <FaPaperPlane className="inline ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </form>

        {/* Social */}
        <div
          ref={socialRef}
          className={`mt-16 flex justify-center gap-8 transition-all duration-700 delay-300 ${socialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="https://github.com/ahamza2"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/haarab"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="mailto:haarab.me@gmail.com"
            className="flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1"
          >
            <FaEnvelope className="text-xl" />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
