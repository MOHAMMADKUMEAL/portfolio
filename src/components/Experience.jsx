export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 bg-zinc-950 text-white">

      <div className="max-w-6xl mx-auto px-4 md:px-10">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Experience
        </h2>

        <div className="w-20 h-1 bg-blue-500 mx-auto my-6 rounded"></div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {/* LEFT - EXPERIENCE 1 */}
          <div className="bg-black/40 border border-white/10 p-6 rounded-xl">

            <h3 className="text-xl font-semibold">
              Cubiccode Digital Media LLP
            </h3>

            <p className="text-gray-400 mt-1">
              Web Development Intern
            </p>

            <p className="text-gray-400 mt-1">
              2025 • 1 Month
            </p>

            <ul className="mt-5 text-gray-300 space-y-3 list-disc pl-5">

              <li>Developed web applications using Laravel and PHP following MVC architecture.</li>

              <li>Built and integrated RESTful APIs and handled backend logic for scalable systems.</li>

              <li>Managed databases using MySQL and performed efficient data operations.</li>

              <li>Worked with XAMPP for local development and server configuration.</li>

            </ul>

          </div>

          {/* RIGHT - CERTIFICATES */}
          <div className="bg-black/40 border border-white/10 p-6 rounded-xl">

            <h3 className="text-xl font-semibold mb-4">
              Certificates & Documents
            </h3>

            <div className="space-y-4">

              <div className="p-4 border border-white/10 rounded-lg hover:border-blue-500 transition">
                <p className="font-medium">Offer Letter</p>
                <a
                  href="/offer-letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm"
                >
                  View Document
                </a>
              </div>

              <div className="p-4 border border-white/10 rounded-lg hover:border-blue-500 transition">
                <p className="font-medium">Experience Letter</p>
                <a
                  href="/experience-letter.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm"
                >
                  View Document
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* SECOND EXPERIENCE (TAP ACADEMY) */}
        <div className="mt-12 bg-black/40 border border-white/10 p-6 rounded-xl">

          <h3 className="text-xl font-semibold">
            TAP Academy
          </h3>

          <p className="text-gray-400 mt-1">
            Java Full Stack Development Intern (Ongoing)
          </p>

          <p className="text-gray-400 mt-1">
            Present
          </p>

          <ul className="mt-5 text-gray-300 space-y-3 list-disc pl-5">

            <li>Mastered Core Java and Collections Framework with strong understanding of OOP concepts.</li>

            <li>Learning Advanced Java technologies including JDBC, Servlets, J2EE, Spring, and Hibernate.</li>

            <li>Working with MySQL for database design, queries, and integration with backend systems.</li>

            <li>Gained hands-on experience in Multithreading, Exception Handling, and Java 8 features like Lambda Expressions and Stream API.</li>

            <li>Developed capstone project: Online Food Delivery application with full-stack implementation.</li>

            <li>Focused on building applications from database integration to responsive frontend UI design.</li>

          </ul>

        </div>

      </div>
    </section>
  );
}