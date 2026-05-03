export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">

      <div className="max-w-4xl mx-auto px-4 md:px-10 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Contact Me
        </h2>

        <div className="w-20 h-1 bg-blue-500 mx-auto my-6 rounded"></div>

        <p className="text-gray-300 mb-10">
          Feel free to reach out for collaborations, opportunities, or project discussions.
        </p>

        {/* EMAIL BUTTON */}
        <a
          href="mailto:mohammadkumeal786@gmail.com"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition mb-3"
        >
          Send Me an Email
        </a>

        <p className="text-gray-400 mb-8">
          mohammadkumeal786@gmail.com
        </p>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://www.linkedin.com/in/mohammedkumealbagban"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 border border-white/10 rounded-lg hover:border-blue-500 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/MOHAMMADKUMEAL"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 border border-white/10 rounded-lg hover:border-blue-500 transition"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}