import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between  items-center">
        <h1 className="text-2xl font-bold text-blue-600 hover:text-purple-600 transition-colors duration-300">
          AMADOU MBODJ
        </h1>
        <nav className="hidden md:flex ml-auto ">
        <a href="/portfolio">
          <Button variant="ghost" className="mr-2 hover:text-blue-600 transition-colors duration-300">
            Accueil
          </Button>
          </a>
          <a href="#projects">
          <Button variant="ghost" className="mr-2 hover:text-blue-600 transition-colors duration-300">
          Projets
          </Button>
          </a>
          <a href="CvAmadou.pdf">
          <Button variant="ghost" className="hover:text-blue-600 transition-colors duration-300">
           CV
          </Button>
          </a>
          <a href="#contact">
          <Button variant="outline" className="hover:bg-blue-600 hover:text-white transition-colors duration-300">Contactez moi 📞</Button>
          </a>
        </nav>


        <Sheet>
  <SheetTrigger>
    <MenuIcon className="md:hidden ml-auto" />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="hidden">Menu</SheetTitle>
    </SheetHeader>

    <nav className="mt-5">
        <ul className="space-y-4 flex flex-col font-medium">
        <li className="mr-2 hover:text-blue-600 transition-colors duration-300">
        <a href="/portfolio">Accueil</a>
          </li>
          <li className="mr-2 hover:text-blue-600 transition-colors duration-300">
          <a href="#projects">Projets</a>
          </li>
          <li className="hover:text-blue-600 transition-colors duration-300">
            <a href="CvAmadou.pdf">CV</a>
          </li>
          <Button className=" bg-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"><a href="#contact">Contactez moi 📞</a></Button>
        </ul>
          
        </nav>
  </SheetContent>
</Sheet>
      </div>
    </header>
  )
}

export default Header

