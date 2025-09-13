import { Card } from "@/components/ui/card"

export function ProposalSection() {
  return (
    <section id="proposal" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Justificativa e Proposta Inicial
        </h2>

        <Card className="p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-primary">Justificativa da Escolha</h3>
          <p className="text-muted-foreground mb-6">
            A escolha do bairro de Vargem Grande/Varginha alinha-se aos objetivos do projeto: promover inclusão,
            empoderamento e conscientização. Apesar dos desafios, a comunidade oferece oportunidades únicas para ações
            extensionistas.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              {
                title: "Lacunas Tecnológicas",
                description: "Falta de acesso digital e capacitação tecnológica para moradores e voluntários.",
              },
              {
                title: "Infraestrutura Deficiente",
                description: "Problemas em vias, transporte público limitado e rotas de deslocamento inseguras.",
              },
              {
                title: "Desafios Ambientais",
                description:
                  "Desmatamento, queimadas, poluição da Represa Guarapiranga e baixa conscientização ecológica.",
              },
            ].map((item, index) => (
              <Card key={index} className="p-4 bg-secondary/10">
                <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <p className="text-muted-foreground">
            A atuação no bairro trará benefícios diretos aos moradores, permitindo aos estudantes aplicar conhecimentos
            técnicos e sociais na prática.
          </p>
        </Card>

        <Card className="p-6 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-primary">Proposta Preliminar de Atividades</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              {
                number: "01",
                title: "Oficina de Alfabetização Digital",
                description: "3 encontros sobre uso básico de celular/internet, segurança e privacidade.",
              },
              {
                number: "02",
                title: "Sistema de Agenda Comunitária",
                description: "Desenvolvimento de mini-sistema web para atividades, transporte e eventos locais.",
              },
              {
                number: "03",
                title: "Treinamento Técnico para Voluntários",
                description: "Capacitação em manutenção de hardware e soluções digitais para apoio local.",
              },
              {
                number: "04",
                title: "Conscientização Ambiental e Mobilidade",
                description: "Campanhas sobre lixo, represa, queimadas, reflorestamento e discussões sobre transporte.",
              },
            ].map((activity) => (
              <div key={activity.number} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {activity.number}
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Impacto Esperado</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Moradores capacitados digital e ambientalmente.</li>
            <li>• Protótipo funcional de sistema de agenda comunitária.</li>
            <li>• Maior engajamento social em meio ambiente, mobilidade e economia local.</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
