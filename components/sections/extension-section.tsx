import { Card } from "@/components/ui/card"
import { Laptop, Eye, HandHeart, GraduationCap } from "lucide-react"

export function ExtensionSection() {
  return (
    <section id="extension" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Extensão e Construção Social</h2>

        <Card className="p-6 mb-8 bg-secondary/10 border-secondary/20">
          <h3 className="text-xl font-semibold mb-4 text-primary">Questão 2</h3>
          <p className="text-muted-foreground">
            Como uma ação extensionista desenvolvida no campo de estudos da Análise e Desenvolvimento de Sistemas pode
            contribuir para a construção de uma sociedade boa de se viver?
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: Laptop,
              title: "Inclusão Digital",
              description:
                "Capacitar cidadãos para usar ferramentas digitais com segurança e autonomia, reduzindo desigualdades de acesso à informação e serviços públicos.",
            },
            {
              icon: Eye,
              title: "Transparência e Participação",
              description:
                "Desenvolver plataformas que facilitem controle social e participação cívica, fortalecendo a democracia.",
            },
            {
              icon: HandHeart,
              title: "Impacto Social Direto",
              description:
                "Automatizar processos administrativos em organizações comunitárias, otimizar laços de solidariedade e facilitar a oferta de serviços sociais.",
            },
            {
              icon: GraduationCap,
              title: "Formação Crítica",
              description:
                "Aproximar estudantes da realidade social, estimulando responsabilidade ética e cidadã nos futuros profissionais.",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-background/80 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/30 group-hover:shadow-md">
                  <item.icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
                </div>
                <h4 className="font-semibold text-primary transition-all duration-300 group-hover:translate-x-1">{item.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">Possíveis atividades práticas:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Oficinas de alfabetização digital</li>
            <li>• Desenvolvimento de sistema de agendamento para centro comunitário</li>
            <li>• Manutenção de laboratório de informática</li>
            <li>• Criação de conteúdos educativos digitais</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}
