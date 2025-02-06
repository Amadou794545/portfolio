import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import project1image from "@/assets/img/Detection-de-fraude-de-paiement-en-ligne.jpeg"
import project2image from "@/assets/img/Prevision-de-survie-des-arbres.jpg"
import project3image from "@/assets/img/Prediction_de_risque_de_credit_bancaire.jpg"
import project4image from "@/assets/img/prediction_du_couts_de_frais_medicaux.jpg"
import project5image from "@/assets/img/prediction_du_flux_du_traffic.jpg"
import project6image from "@/assets/img/classico.jpg"

const projects = [
  {
    title: "Detection de fraude de paiement en ligne",
    description:
      "Le projet consiste à détecter les fraudes de paiements en ligne à l'aide de l'apprentissage automatique. Il inclut des étapes de prétraitement des données, d'ingénierie des caractéristiques et de sélection de modèles pour classifier les transactions comme frauduleuses ou légitimes. Ce projet vise à améliorer la sécurité des paiements en ligne en automatisant la détection de fraudes.",
    image: project1image,
    url:'https://github.com/Amadou794545/Detection-de-fraude-de-paiement-en-ligne'
  },
  {
    title: "Prevision de survie des arbres",
    description:
      "Ce projet semble se concentrer sur la modélisation et la prédiction de la survie des arbres en fonction de diverses variables environnementales et biologiques. Il utilise des techniques d'apprentissage automatique pour analyser les données et prédire la probabilité de survie des arbres.",
    image: project2image,
    url:'https://github.com/Amadou794545/Prevision-de-survie-des-arbres'
  },
  {
    title: "Prediction de risque de credit bancaire",
    description:
      "L'objectif est de prédire le risque de défaut de paiement sur la base de données financières et personnelles, ce qui aide les institutions bancaires à prendre des décisions éclairées sur l'octroi de crédits. ",
    image: project3image,
    url:'https://github.com/Amadou794545/Prediction_de_risque_de_credit_bancaire'
  },
  {
    title: "Prediction du couts de frais medicaux",
    description:
      "L’objectif principal de ce projet est de développer un modèle prédictif capable d’estimer avec précision les coûts médicaux des individus en fonction de leurs caractéristiques. En analysant l’ensemble de données et en identifiant des tendances et des relations, le modèle fournira des informations sur les facteurs influençant les dépenses médicales.",
    image: project4image,
    url:'https://github.com/Amadou794545/prediction_du_couts_de_frais_medicaux'
  },
  {
    title: "Prediction du flux du traffic",
    description:
      "Ce projet vise à prédire le flux de trafic en se basant sur des données historiques, notamment le nombre de véhicules (voitures, vélos, bus, camions), l'heure et le jour de la semaine. En analysant ces données, nous cherchons à identifier les tendances dans le flux de trafic, à prédire les situations de trafic et à fournir des informations exploitables pour gérer la congestion et améliorer la mobilité urbaine. Le modèle aide également à optimiser les stratégies de contrôle du trafic et contribue aux objectifs de durabilité en réduisant les émissions et la consommation de carburant grâce à une meilleure gestion du trafic.",
    image: project5image,
    url:'https://github.com/Amadou794545/prediction_du_flux_du_traffic'
  },
  {
    title: "Classico (en cours)",
    description:
      "Le projet 'Classico' a pour objectif de prédire les résultats de matchs de football, en utilisant des modèles d'apprentissage automatique et des données actuelles pour estimer les scores ou la probabilité de victoire des équipes.",
    image: project6image,
    url:'https://github.com/Amadou794545/Classico'
  }
]

function Projects() {
  return (
    <section className="mb-12" id="projects">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Mes projets 🚀</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 bg-white/50 backdrop-blur-md"
          >
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle className="text-blue-600 hover:underline"><a href={project.url}>{project.title}</a></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects