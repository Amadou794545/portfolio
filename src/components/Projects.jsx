import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import project1image from "@/assets/img/Detection-de-fraude-de-paiement-en-ligne.jpeg"
import project3image from "@/assets/img/Prediction_de_risque_de_credit_bancaire.jpg"
import project4image from "@/assets/img/prediction_du_couts_de_frais_medicaux.jpg"
import project5image from "@/assets/img/prediction_du_flux_du_traffic.jpg"
import project6image from "@/assets/img/classico.jpg"
import project7image from "@/assets/img/Segmentation-des-donnees-bancaires.jpg"
import project8image from "@/assets/img/Segmentation-des-clients-d-un-site-de-e-commerce.png"
import project9image from "@\assets\img\Analyse_de_donnée_RH.jpg"

const projects = [
  {
    title: "Détection de fraude de paiement en ligne",
    description:
      "Le projet consiste à détecter les fraudes de paiements en ligne à l'aide de l'apprentissage automatique. Il inclut des étapes de prétraitement des données, d'ingénierie des caractéristiques et de sélection de modèles pour classifier les transactions comme frauduleuses ou légitimes.Il vise à améliorer la sécurité des paiements en ligne en automatisant la détection de fraudes.",
    image: project1image,
    url:'https://github.com/Amadou794545/Detection-de-fraude-de-paiement-en-ligne'
  },
  {
    title: "Prédiction de risque de crédit bancaire",
    description:
      "L'objectif est de prédire le risque de défaut de paiement sur la base de données financières et personnelles, ce qui aide les institutions bancaires à prendre des décisions éclairées sur l'octroi de crédits. ",
    image: project3image,
    url:'https://github.com/Amadou794545/Risque_de_credit'
  },
  {
    title: "Prédiction du coûts de frais medicaux",
    description:
      "L’objectif principal de ce projet est de développer un modèle prédictif capable d’estimer avec précision les coûts médicaux des individus en fonction de leurs caractéristiques. En analysant l’ensemble de données et en identifiant des tendances et des relations, le modèle fournira des informations sur les facteurs influençant les dépenses médicales.",
    image: project4image,
    url:'https://github.com/Amadou794545/prediction_du_couts_de_frais_medicaux'
  },
  {
    title: "Prédiction du flux du traffic",
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
  },
  {
    title: "Segmentation des Données Bancaires",
    description:
      "Ce projet vise à segmenter des clients bancaires en différents groupes à l'aide du clustering. L'objectif est d'identifier des profils clients distincts afin d'optimiser les stratégies marketing et d'améliorer la gestion de la relation client.",
    image: project7image,
    url:'https://github.com/Amadou794545/Segmentation-des-donnees-bancaires'

  },
  {
    title: "Segmentation des clients d'un site de e-commerce",
    description:
      "Ce projet se concentre sur la segmentation des clients d'un site de e-commerce à partir de données d'achats. L'objectif est de diviser les clients en groupes homogènes pour mieux comprendre leurs comportements et optimiser les stratégies marketing.",
    image: project8image,
    url:'https://github.com/Amadou794545/Segmentation-des-clients-d-un-site-de-e-commerce'
  },
  {
    title: "Analyse de donnée Ressource Humaine",
    description: "Ce projet vise à analyser les données RH de 1 470 employés pour comprendre les dynamiques liées aux salaires, à la satisfaction, aux performances et aux caractéristiques démographiques. L'objectif est de fournir aux équipes RH une vision globale et interactive pour améliorer la prise de décision (rétention, équité, motivation).",
    image: project9image,
    url:'https://github.com/Amadou794545/Projet_Analyse_Ressource_Humaine'
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