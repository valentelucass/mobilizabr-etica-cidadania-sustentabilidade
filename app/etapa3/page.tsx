import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Card } from "@/components/ui/card"
import { Construction } from "lucide-react"

export default function Etapa3() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation activePageId="Página 3" />

            {/* Hero Section */}
            <section id="hero" className="pt-28 pb-16 bg-gradient-to-br from-background to-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text hover-float">Etapa 3</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Avaliação e Resultados do Projeto
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="p-12 text-center">
                        <Construction className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
                        <h2 className="text-2xl font-bold mb-4">Em Desenvolvimento</h2>
                        <p className="text-muted-foreground mb-6">
                            O conteúdo da Etapa 3 está sendo desenvolvido e será disponibilizado em breve.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Esta etapa abordará a avaliação dos resultados e impactos do projeto de extensão.
                        </p>
                    </Card>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    )
}