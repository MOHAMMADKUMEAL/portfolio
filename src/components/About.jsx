export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - TEXT */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-500 my-6 rounded"></div>

          <ul className="text-gray-300 space-y-4 text-lg md:text-xl list-disc pl-5">

            <li>Aspiring Full-Stack Developer and AI/ML enthusiast focused on building intelligent and scalable applications.</li>

            <li>Experience in Java (Collection Framework), React, and backend development.</li>

            <li>Exploring Python for AI/ML and building real-world intelligent systems.</li>

            <li>Worked on AI projects, detection models, and full-stack applications with focus on performance and UI design.</li>

            <li>Strengthening skills in DSA, Java backend, and AI/ML engineering.</li>

          </ul>

        </div>

        {/* RIGHT - IMAGE */}
        <div className="flex justify-center">

          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-80 h-80 object-cover rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition duration-300"
          />

        </div>

      </div>

    </section>
  );
}