import { Badge } from "@/components/ui/badge"


const skills = [
  { name: "Python", type: "hardskills" },
  { name: "SQL", type: "hardskills" },
  { name: "Machine Learning", type: "hardskills" },
  { name: "matplotlib", type: "hardskills" },
  { name: "seaborn", type: "hardskills" },
  { name: "pandas", type: "hardskills" },
  { name: "numpy", type: "hardskills" },
  { name: "scikit-learn", type: "hardskills" },
  { name: "mySQL", type: "hardskills" },
  { name: "sqlite", type: "hardskills" },
  { name: "Analyse de données", type: "hardskills" },
  { name: "jupyter notebook", type: "hardskills" },
  { name: "Comunication", type: "softskills" },
  { name: "travail en équipe", type: "softskills" },
  { name: "Gestion de projet", type: "softskills" },
  { name: "Autodidacte", type: "softskills" },
];


function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">Mes outils 🧰</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className={`text-sm py-2 px-4 ${skill.type === 'softskills' ? 'bg-blue-400' : 'bg-red-400'}  backdrop-blur-md ${skill.type === "softskills" ?  'hover:bg-blue-600' : 'hover:bg-red-600'} hover:text-white transition-all duration-300 transform hover:scale-110`}
          >
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  )
}

export default Skills