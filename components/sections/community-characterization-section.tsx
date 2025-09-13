import { Card } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function CommunityCharacterizationSection() {
  return (
    <section id="characterization" className="py-16 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Caracterização da Comunidade</h2>

        <Card className="p-6 mb-8">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-secondary mr-3" />
            <h3 className="text-xl font-semibold text-primary">Desafios e Realidades Locais</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            A comunidade de Varginha, apesar de seu potencial, enfrenta desafios significativos que impactam o cotidiano
            e a qualidade de vida de seus moradores. Identificar esses pontos é crucial para propor ações extensionistas
            eficazes:
          </p>

          <div className="space-y-4">
            {[
              "Infraestrutura Viária: Necessidade de recapeamento das vias e falta de rotas alternativas de deslocamento (apenas um caminho de ida e volta).",
              "Mobilidade Urbana: Transporte público limitado, dificultando o acesso a outras regiões e serviços essenciais.",
              "Dinâmica Comercial: Crescimento comercial desordenado, gerando forte concorrência entre estabelecimentos do mesmo segmento.",
              "Questões Ambientais: Desflorestamento e queimadas frequentes na região.",
              "Poluição Hídrica: Destruição do meio ambiente, com esgoto desaguando e lixo acumulado na Represa Guarapiranga.",
              "Conscientização: Falta de conscientização da população sobre a importância da preservação do entorno da Represa Guarapiranga.",
            ].map((challenge, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">{challenge}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="bg-card rounded-lg overflow-hidden">
          <img
            src="/cena-de-bairro-com--nibus--lixo-e-polui--o.jpg"
            alt="Cena de bairro com ônibus, lixo e poluição"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  )
}
