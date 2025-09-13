import { Card } from "@/components/ui/card"
import { Users, Shield, Handshake, BookOpen } from "lucide-react"

export function EthicsSection() {
  return (
    <section id="ethics" className="py-16 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Ética na Análise e Desenvolvimento de Sistemas
        </h2>

        <Card className="p-6 mb-8 bg-secondary/10 border-secondary/20">
          <h3 className="text-xl font-semibold mb-4 text-primary">Questão 1</h3>
          <p className="text-muted-foreground mb-6">
            O que é ética? E por que ela importa para o campo da Análise e Desenvolvimento de Sistemas?
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Definição de Ética</h3>
            <p className="text-muted-foreground">
              Ética é o ramo da filosofia que estuda os princípios e valores que orientam o comportamento humano,
              buscando distinguir ações corretas de incorretas com base em princípios universais ou contextuais.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Contexto Profissional</h3>
            <p className="text-muted-foreground">
              No contexto profissional, ética envolve responsabilidade, integridade, respeito pelos outros e compromisso
              com o bem comum.
            </p>
          </Card>
        </div>

        <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
          Por que importa para Análise e Desenvolvimento de Sistemas:
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: Users,
              title: "Impacto Social",
              description:
                "Sistemas afetam direitos, privacidade e vida das pessoas; decisões técnicas têm impacto social e econômico.",
            },
            {
              icon: Shield,
              title: "Responsabilidade Profissional",
              description:
                "Profissionais da área lidam com dados sensíveis, algoritmos de decisão e infraestruturas críticas; agir eticamente reduz riscos de danos, discriminação e invasão de privacidade.",
            },
            {
              icon: Handshake,
              title: "Confiança Pública",
              description:
                "Ética orienta escolhas sobre segurança, acessibilidade, transparência e justiça algorítmica, contribuindo para confiança pública nas soluções tecnológicas.",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-background/80 group interactive-element">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-secondary/30 group-hover:shadow-md">
                  <item.icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-secondary" />
                </div>
                <h4 className="font-semibold text-primary transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1">{item.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-4 bg-primary/5 border-primary/20">
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 text-primary mr-3" />
            <p className="text-sm text-muted-foreground">
              <strong>Referências:</strong> ACM Code of Ethics and Professional Conduct, IEEE/ACM Software Engineering
              Code of Ethics, Web-aulas e textos da disciplina (Prof. Marcela Bauer, AVA)
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
