import { Card } from "@/components/ui/card"
import { Cloud, Handshake, Building, Zap } from "lucide-react"

export function CommunityChoiceSection() {
  return (
    <section id="community-choice" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary transition-all duration-300 hover:scale-105 hover:text-secondary">Comunidade Escolhida</h2>

        <Card className="p-6 mb-8 bg-secondary/10 border-secondary/20">
          <h3 className="text-xl font-semibold mb-4 text-primary">Questões 2 e 3</h3>
          <p className="text-muted-foreground mb-6">
            Qual comunidade despertou interesse do grupo para a futura interação e parceria? Quais foram os motivos?
          </p>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-2">Bairro de Vargem Grande (Varginha)</h2>
            <p className="text-muted-foreground">Comunidade local</p>
          </div>
        </Card>

        <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Motivos do interesse:</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Cloud,
              title: "Demanda por Inclusão Digital",
              description: "Necessidade de alfabetização digital entre jovens e idosos da comunidade",
            },
            {
              icon: Handshake,
              title: "Parceria Facilitada",
              description: "Possibilidade de contato direto com coordenação local e abertura para colaboração",
            },
            {
              icon: Building,
              title: "Infraestrutura Disponível",
              description: "Existência de espaço físico com sala e microcomputadores para oficinas presenciais",
            },
            {
              icon: Zap,
              title: "Impacto Rápido",
              description:
                "Potencial para projetos de resultado imediato: portal de comunicação, agenda de serviços, sistema de acompanhamento",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-background/80 group interactive-element">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                  <item.icon className="h-6 w-6 transition-all duration-300 group-hover:scale-110" />
                </div>
                <h4 className="font-semibold text-primary transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1">{item.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
