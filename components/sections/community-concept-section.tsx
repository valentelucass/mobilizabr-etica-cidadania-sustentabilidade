import { Card } from "@/components/ui/card"

export function CommunityConceptSection() {
  return (
    <section id="community-concept" className="py-16 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary transition-all duration-300 hover:scale-105 hover:text-secondary">
          Conceito de Comunidade na Extensão
        </h2>

        <Card className="p-6 mb-8 bg-secondary/10 border-secondary/20">
          <h3 className="text-xl font-semibold mb-4 text-primary">Questão 1</h3>
          <p className="text-muted-foreground">O que é comunidade no contexto da extensão universitária?</p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg overflow-hidden">
            <img
              src="/grupo-de-pessoas-em-discuss-o-ao-redor-de-uma-mesa.jpg"
              alt="Grupo de pessoas em discussão ao redor de uma mesa"
              className="w-full h-64 object-cover transition-all duration-500 hover:scale-105"
            />
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Definição</h3>
            <p className="text-muted-foreground">
              No contexto da extensão universitária, comunidade é o conjunto de pessoas e/ou grupos organizados que
              compartilham um território, interesse, identidade ou necessidade concreta e que podem interagir com a
              universidade para resolver problemas, trocar saberes e construir ações coletivas.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { title: "Geográfica", description: "Bairro, vila, região específica" },
            { title: "Institucional", description: "Associação, ONG, escola, centro comunitário" },
            { title: "Social", description: "Grupos por interesse comum ou identidade" },
            { title: "Participação", description: "Envolvimento ativo dos membros" },
            { title: "Protagonismo Local", description: "Liderança e autonomia da comunidade" },
            { title: "Demandas Reais", description: "Necessidades concretas identificadas" },
            { title: "Saberes Locais", description: "Conhecimento complementar ao acadêmico" },
            { title: "Relação Horizontal", description: "Parceria igualitária universidade-comunidade" },
          ].map((item, index) => (
            <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
