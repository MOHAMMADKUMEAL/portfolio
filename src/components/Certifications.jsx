export default function Certifications() {
  const certs = [
    "Machine Learning Certification",
    "AI Fundamentals",
    "Hackathon – Top 10 (Anjuman College)",
    "Nexus 2.0 – 4th Place",
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {certs.map((c, i) => (
          <div key={i} className="bg-gray-800 px-6 py-3 rounded-lg">{c}</div>
        ))}
      </div>
    </section>
  );
}