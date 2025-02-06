import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

