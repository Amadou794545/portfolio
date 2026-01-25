import { Card, CardContent } from "@/components/ui/card"
import { FaLinkedin, FaGithub} from "react-icons/fa"
import profile from "@/assets/img/Amadou_photo.jpg"
function Introduction() {
  return (
    <Card className="mb-8 overflow-hidden bg-white/50 backdrop-blur-md">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={profile}
            alt="Jane Doe"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 mb-4"
          />
          <h2 className="text-3xl font-bold mb-2 text-blue-600">AMADOU MBODJ</h2>
          <h3 className="text-xl mb-4 text-blue-600">Etudiant en Data/IA</h3>
          <p className="text-gray-600 mb-6 max-w-lg">
          Je suis passionné par la science des données, je recherche un stage de trois à six mois pour mettre à profit mes compétences en Python, machine learning et analyse de données, tout en contribuant à des projets innovants alignés avec les besoins de votre entreprise. De plus, je suis également à la recherche d'une alternance pour la rentrée de septembre 2026.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/amadoumbodj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/Amadou794545"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
            
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Introduction

