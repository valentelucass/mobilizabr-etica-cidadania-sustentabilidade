import { Card } from "@/components/ui/card"
import { Phone, UserCheck, MessageSquare, CheckCircle } from "lucide-react"

export function ConclusionSection() {
  return (
    <section id="conclusion" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Considerações Finais</h2>

        <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Compromissos do grupo</h3>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Phone,
              title: "Contato Inicial",
              description: "Realizar contato inicial até data definida",
            },
            {
              icon: UserCheck,
              title: "Representante",
              description: "Confirmar representante e inscrição no AVA",
            },
            {
              icon: MessageSquare,
              title: "Fórum do Grupo",
              description: "Abrir fórum no AVA e inscrever integrantes",
            },
          ].map((commitment, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-background/80 group">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary/30 group-hover:shadow-md">
                <commitment.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h4 className="font-semibold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">{commitment.title}</h4>
              <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">{commitment.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Responsabilidades</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Representante:</strong> envio da entrega final
              </p>
              <p className="text-muted-foreground">
                <strong>Membros:</strong> participar das visitas e desenvolvimento das atividades
              </p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Referências</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Web-aulas e textos da disciplina – Prof. Marcela Bauer (AVA)</li>
              <li>• ACM Code of Ethics and Professional Conduct</li>
              <li>• IEEE/ACM Software Engineering Code of Ethics and Professional Conduct</li>
              <li>• Materiais de extensão universitária do curso</li>
            </ul>
          </Card>
        </div>

        <Card className="p-4 bg-chart-5/10 border-chart-5/20 mb-8">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-chart-5 mr-3 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong>Observação:</strong> As referências específicas indicadas nas web-aulas da professora serão
              adicionadas conforme aparecem no AVA.
            </p>
          </div>
        </Card>

        <div className="bg-card rounded-lg overflow-hidden hover-pulse transition-all duration-300 hover:shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Grupo diverso de pessoas colaborando em um projeto comunitário"
            className="w-full h-64 object-cover transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}
