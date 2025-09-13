"use client"

import { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  { id: "hero", label: "01", title: "Início" },
  { id: "introduction", label: "02", title: "Introdução" },
  { id: "ethics", label: "03", title: "Ética" },
  { id: "extension", label: "04", title: "Extensão" },
  { id: "community-concept", label: "05", title: "Comunidade" },
  { id: "community-choice", label: "06", title: "Escolha" },
  { id: "characterization", label: "07", title: "Caracterização" },
  { id: "proposal", label: "08", title: "Proposta" },
  { id: "resources", label: "09", title: "Recursos" },
  { id: "conclusion", label: "10", title: "Conclusão" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b-4 border-secondary shadow-lg transition-all duration-500 hover:shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-primary-foreground group cursor-pointer hover-float">
            <Leaf className="h-6 w-6 text-secondary transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-secondary/80" />
            <span className="font-bold text-lg transition-all duration-300 group-hover:text-secondary group-hover:scale-105">MobilizaBR</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-secondary text-secondary-foreground shadow-md scale-110"
                    : "text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 hover:shadow-md hover:rotate-1"
                }`}
                title={item.title}
              >
                <span className="transition-all duration-300 hover:scale-105 inline-block">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110 hover:shadow-md group"
            >
              {isMenuOpen ? 
                <X className="h-5 w-5 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110 group-hover:text-secondary" /> : 
                <Menu className="h-5 w-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-secondary" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20 animate-in fade-in-50 duration-300">
            <div className="grid grid-cols-5 gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-secondary text-secondary-foreground shadow-md scale-105"
                      : "text-primary-foreground hover:bg-primary-foreground/20 hover:scale-105 hover:shadow-md hover:rotate-1"
                  }`}
                  title={item.title}
                >
                  <span className="transition-all duration-300 hover:scale-105 inline-block">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
