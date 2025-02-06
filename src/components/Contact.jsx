import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaEnvelope, FaDiscord, FaLinkedin } from "react-icons/fa"

function Contact() {
  return (
    <section className="mb-12" id='contact'>
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-600"> Contactez-moi🤝</h2>
      <Card className="bg-white/50 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-blue-600"></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row justify-around items-center gap-4">
          <a
            href="mailto:amadoumbodj2294@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
            <span>amadoumbodj2294@gmail.com</span>
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            <FaDiscord size={24} />
            <span>amadou2294</span>
          </a>
          <a
              href="https://www.linkedin.com/in/amadoumbodj/"
              target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
            <span>Amadou Mbodj</span>
          </a>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact

