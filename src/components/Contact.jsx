import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#081b29] text-white px-[9%] py-28"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-main">Me!</span>
      </h2>

      <form
        action="https://formspree.io/f/mnnakwrv" // you can update this link to your Formspree endpoint
        method="POST"
        className="max-w-3xl mx-auto space-y-6"
      >
        {/* Name & Email */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 bg-[#112e42] border border-main rounded-md outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 bg-[#112e42] border border-main rounded-md outline-none"
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full px-4 py-3 bg-[#112e42] border border-main rounded-md outline-none"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 bg-[#112e42] border border-main rounded-md outline-none"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="btn"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-12 flex justify-center gap-6 text-3xl">
        <a href="https://github.com/ahamza2" target="_blank" rel="noreferrer">
          <i className="bx bxl-github hover:text-main"></i>
        </a>
        <a href="https://linkedin.com/in/haarab" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin-square hover:text-main"></i>
        </a>
        <a href="mailto:haarab.me@gmail.com">
          <i className="bx bxl-gmail hover:text-main"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
