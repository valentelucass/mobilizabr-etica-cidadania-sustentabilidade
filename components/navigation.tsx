"use client"

import { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Itens principais de navegação
const mainPages = [
  { id: "Home", label: "Início", title: "Página Inicial", href: "/" },
  { id: "Página 1", label: "Etapa 1", title: "Etapa 1", href: "/etapa1" },
  { id: "Página 2", label: "Etapa 2", title: "Etapa 2", href: "/etapa2" },
  { id: "Página 3", label: "Etapa 3", title: "Etapa 3", href: "/etapa3" },
  { id: "Sobre", label: "Sobre", title: "Sobre Nós", href: "/sobre" },
]

// Definindo o tipo para as seções
interface SectionItem {
  id: string;
  label: string;
  title: string;
}

// Tipagem para a prop, agora incluindo Home e Sobre
interface NavigationProps {
  activePageId: "Home" | "Página 1" | "Página 2" | "Página 3" | "Sobre" | "Sobre Nós";
}

export function Navigation({ activePageId }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Não usamos mais seções numeradas - apenas navegação entre páginas principais
  const currentSections: SectionItem[] = []

  useEffect(() => {
    if (currentSections.length > 0) {
      const handleScroll = () => {
        const sections = currentSections.map((item) => document.getElementById(item.id))
        const scrollPosition = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(currentSections[i].id)
            break
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [currentSections])

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
          <Link href="/" className="flex items-center space-x-2 text-primary-foreground group cursor-pointer hover-float">
            <Leaf className="h-6 w-6 text-secondary transition-all duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:text-secondary/80" />
            <span className="font-bold text-lg transition-all duration-300 group-hover:text-secondary group-hover:scale-105">MobilizaBR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Renderiza as Páginas Principais */}
            {mainPages.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activePageId === item.id
                    ? "bg-secondary text-secondary-foreground shadow-md scale-110"
                    : "text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 hover:shadow-md hover:rotate-1"
                }`}
                title={item.title}
              >
                <span className="transition-all duration-300 hover:scale-105 inline-block">{item.label}</span>
              </Link>
            ))}

            {/* Divisor Visual e Seções da Página (apenas se houver seções) */}
            {currentSections.length > 0 && (
              <>
                <div className="h-6 w-px bg-primary-foreground/30 mx-3" />
                {currentSections.map((item) => (
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
              </>
            )}
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
            <div className="space-y-2">
              {/* Páginas principais no mobile */}
              {mainPages.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`block p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activePageId === item.id
                      ? "bg-secondary text-secondary-foreground shadow-md"
                      : "text-primary-foreground hover:bg-primary-foreground/20"
                  }`}
                  title={item.title}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Seções da página atual no mobile (apenas se houver) */}
              {currentSections.length > 0 && (
                <>
                  <div className="border-t border-primary-foreground/20 my-2" />
                  <div className="grid grid-cols-2 gap-2">
                    {currentSections.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`p-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-secondary text-secondary-foreground shadow-md"
                            : "text-primary-foreground hover:bg-primary-foreground/20"
                        }`}
                        title={item.title}
                      >
                        {item.label} - {item.title}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}