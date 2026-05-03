export default function Skills() {

  const groups = {
    Programming: ["Python", "Java"],
    Backend: ["REST APIs", "API Integration", "Java Collections"],
    Database: ["MySQL"],
    Tools: ["Git", "GitHub", "VS Code", "Eclipse", "Jupyter", "Colab"],
    Core: ["OOP", "DBMS", "OS", "CN", "Artificial Intelligence", "Machine Learning", "Data Science"]
  };

  const logos = {
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    Jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    Colab: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecolab/googlecolab-original.svg"
  };

  return (
    <section id="skills" className="py-24 bg-black text-white">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto px-6 space-y-10">

        {Object.entries(groups).map(([title, items]) => (

          <div key={title} className="grid md:grid-cols-2 gap-6 items-center">

            {/* LEFT SIDE - SKILL NAMES (UNCHANGED STRUCTURE) */}
            <div>
              <h3 className="text-xl text-blue-400 mb-3">{title}</h3>

              <div className="flex flex-wrap gap-3">
                {items.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE - LOGOS ONLY */}
            <div className="flex flex-wrap gap-4 justify-start md:justify-end">

              {items.map((s) => logos[s] && (
                <div
                  key={s}
                  className="bg-zinc-900 p-3 rounded-xl border border-white/10 hover:border-blue-500 transition"
                >
                  <img
                    src={logos[s]}
                    alt={s}
                    className="w-10 h-10"
                  />
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}