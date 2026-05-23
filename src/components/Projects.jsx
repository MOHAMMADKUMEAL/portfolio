import { pythonProjects, javaProjects } from "../data/projects";

function Card({ p }) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transition">
      <h4 className="text-lg font-semibold">{p.title}</h4>
      <p className="text-sm text-gray-400">{p.tech}</p>
      <p className="mt-2 text-gray-300">{p.desc}</p>
      <a
  href={p.github}
  target="_blank"
  rel="noreferrer"
>
  <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg glow-btn">
    GitHub
  </button>
</a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Projects</h2>

      {/* Python */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h3 className="text-2xl text-blue-400 mb-6">Python Full Stack</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {pythonProjects.map((p, i) => <Card key={i} p={p} />)}
        </div>
      </div>

      {/* Java */}
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl text-purple-400 mb-6">Java Full Stack</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {javaProjects.map((p, i) => <Card key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}