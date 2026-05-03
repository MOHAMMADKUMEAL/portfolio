export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="w-full px-4 md:px-10 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">

        {/* LOGO / TITLE */}
       <div className="w-full md:w-auto">
  <h1 className="text-white font-bold text-sm md:text-lg leading-tight break-words">
    Bachelor of Engineering in Artificial Intelligence and Data Science
  </h1>
</div>

        {/* NAV LINKS */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-gray-300 text-sm md:text-base">

          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
          <a href="#experience" className="hover:text-blue-500 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#certifications" className="hover:text-blue-500 transition">Certificates</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>

        </nav>

      </div>

    </header>
  );
}