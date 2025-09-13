import { Card } from "@/components/ui/card"
import { Bus, AlertTriangle, Lightbulb } from "lucide-react"

export function ResourcesSection() {
  return (
    <section id="resources" className="py-16 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Recursos Tecnológicos e Cronograma Detalhado
        </h2>

        <Card className="p-6 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-primary">Ações e Soluções Propostas</h3>
          <p className="text-muted-foreground mb-6">
            Para abordar os desafios identificados na comunidade de Varginha, propomos o desenvolvimento e a
            implementação de soluções tecnológicas focadas em transporte, infraestrutura, segurança e meio ambiente.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Bus,
                title: "Transporte Público Inteligente",
                description:
                  "Desenvolvimento de um aplicativo em tempo real para transporte público e pontos de ônibus inteligentes para melhor mobilidade na comunidade.",
              },
              {
                icon: AlertTriangle,
                title: "Infraestrutura Viária Digital",
                description:
                  'Criação do aplicativo "Caça-Buraco" para registro de localização de problemas na infraestrutura viária e monitoramento com IA.',
              },
              {
                icon: Lightbulb,
                title: "Segurança e Rede de Ajuda",
                description:
                  "Implementação de iluminação inteligente, câmeras com IA para monitoramento e uma rede de ajuda digital comunitária para questões sociais.",
              },
            ].map((solution, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-background/80 group interactive-element">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-secondary/30 group-hover:shadow-md">
                    <solution.icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-secondary" />
                  </div>
                  <h4 className="font-semibold text-primary transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1">{solution.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">{solution.description}</p>
              </Card>
            ))}
          </div>
        </Card>

        <Card className="p-6 mb-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
          <h3 className="text-xl font-semibold mb-6 text-primary transition-all duration-300 hover:text-secondary hover:scale-[1.01] inline-block cursor-default">Cronograma Ampliado para Desenvolvimento e Ação</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                week: "Semana 1",
                title: "Apresentação e Contato",
                description:
                  "Contato inicial com a comunidade e visita técnica. Apresentação preliminar das soluções tecnológicas propostas.",
              },
              {
                week: "Semana 2",
                title: "Levantamento Detalhado",
                description:
                  "Levantamento de necessidades específicas em transporte, infraestrutura, segurança e meio ambiente. Planejamento das oficinas e protótipos digitais.",
              },
              {
                week: "Semanas 3-4",
                title: "Desenvolvimento e Testes",
                description:
                  'Criação e testes dos protótipos dos aplicativos de Transporte Público, "Caça-Buraco", e sistemas de segurança. Preparação de materiais educativos para as oficinas.',
              },
              {
                week: "Semana 5",
                title: "Primeira Oficina e Demonstração",
                description:
                  "Realização da primeira oficina de alfabetização digital. Demonstração dos aplicativos e tecnologias desenvolvidas para a comunidade.",
              },
            ].map((phase, index) => (
              <Card key={index} className="p-4">
                <h4 className="font-semibold text-primary mb-2">
                  {phase.week}: {phase.title}
                </h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative mb-8">
            <div className="overflow-x-auto scrollbar-hide pb-4">
              <div className="flex items-center justify-center min-w-max px-4">
                {[1, 2, 3, 4, 5].map((week) => (
                  <div key={week} className="flex items-center">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {week}
                    </div>
                    {week < 5 && <div className="w-8 h-1 bg-secondary mx-2" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="font-semibold text-primary mb-4">Recursos Necessários</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Disponibilidade de espaço físico adequado para atividades.</li>
              <li>• Ponto de contato responsável na comunidade para comunicação.</li>
              <li>• Autorizações para uso de imagens e dados, quando necessário.</li>
              <li>• Compatibilidade de horários entre estudantes e moradores.</li>
              <li>• Equipamentos e conexão para testes dos aplicativos.</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold text-primary mb-4">Indicadores de Sucesso</h4>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li>• Número de participantes nas oficinas e nível de satisfação.</li>
              <li>
                • Uso efetivo dos sistemas: atendimentos agendados, buracos reportados, monitoramento de transporte e
                engajamento na rede de ajuda digital.
              </li>
              <li>• Protótipos funcionais de todos os aplicativos e sistemas entregues e testados.</li>
            </ul>
            <h5 className="font-semibold text-primary mb-2">Métodos de Avaliação</h5>
            <p className="text-sm text-muted-foreground">
              Questionários simples (presenciais/online), registro de presença e relatórios reflexivos dos estudantes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
