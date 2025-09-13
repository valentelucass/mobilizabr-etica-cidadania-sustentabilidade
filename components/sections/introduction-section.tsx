import { Card } from "@/components/ui/card"
import { Target, Calendar, CheckCircle } from "lucide-react"

export function IntroductionSection() {
  return (
    <section id="introduction" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Introdução e Objetivos da Etapa 1
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card className="p-6 interactive-element">
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-secondary mr-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-primary">Objetivo desta etapa</h3>
              </div>
              <p className="text-muted-foreground">
                Apropriar-se dos conceitos de ética, extensão e comunidade e iniciar a atividade extensionista.
              </p>
            </Card>

            <Card className="p-6 interactive-element">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-secondary mr-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-primary">Prazo de entrega</h3>
              </div>
              <p className="text-muted-foreground">24/09 até 23:59</p>
            </Card>

            <Card className="p-6 interactive-element">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-secondary mr-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-xl font-semibold text-primary">Resumo do que entregamos</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Apresentação com capa</li>
                <li>• Respostas sobre Ética, Extensão e Comunidade</li>
                <li>• Caracterização da comunidade escolhida</li>
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 overflow-x-auto scrollbar-hide pb-2">
              <div className="min-w-[280px]">
                {[
                  {
                    number: "01",
                    title: "Conceitos Fundamentais",
                    description: "Compreensão dos pilares teóricos da disciplina",
                  },
                  {
                    number: "02",
                    title: "Seleção da Comunidade",
                    description: "Identificação e caracterização do público-alvo",
                  },
                  {
                    number: "03",
                    title: "Planejamento Inicial",
                    description: "Estruturação das atividades extensionistas",
                  },
                ].map((item) => (
                  <Card key={item.number} className="p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02] group mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold transition-all duration-300 group-hover:scale-110">
                        {item.number}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden hover-pulse">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Pessoas em uma sala de apresentação com gráficos"
                className="w-full h-48 object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
