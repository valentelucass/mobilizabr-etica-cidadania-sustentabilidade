import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="pt-28 pb-16 bg-gradient-to-br from-background to-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text hover-float">Ética, Cidadania e Sustentabilidade</h1>

        <div className="space-y-3 mb-8 text-muted-foreground">
          <p className="text-lg">Curso: Análise e Desenvolvimento de Sistemas</p>
          <p className="text-lg">Disciplina: Ética, Cidadania e Sustentabilidade</p>
          <p className="text-lg">Professora: Marcela Bauer</p>
          <p className="text-lg">Data: setembro de 2025</p>
        </div>

        <Card className="p-6 bg-secondary/10 border-secondary/20 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-secondary/20 hover:border-secondary/30">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold transition-transform duration-500 hover:rotate-12 hover:scale-110 group">
              <Users className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-primary transition-colors duration-300 hover:text-primary/80">Grupo MobilizaBR</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong>Integrantes:</strong> Lucas Mateus Andrade da Costa, Eric Meireles Guedes da Silva, Christian Felix
            Leite, Matheus Fleckenstein Paina, Pedro Gabriel de Oliveira Pinheiro, Gabriel Galdino Andrade, David
            Henrique Carvalho de Matos, Matheus Lima Viana
          </p>
        </Card>
      </div>
    </section>
  )
}
