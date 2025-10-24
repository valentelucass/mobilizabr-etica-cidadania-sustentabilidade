import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, BookOpen, Heart, MapPin, Calendar, GraduationCap } from "lucide-react"

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation activePageId="Sobre" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre o MobilizaBR
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projeto extensionista de mobilização comunitária focado em ética, cidadania e sustentabilidade
          </p>
        </div>

        {/* Projeto Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-600" />
                Nossa Missão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                O MobilizaBR é um projeto de extensão universitária que visa fortalecer a participação 
                cidadã e promover o desenvolvimento sustentável na comunidade de Varginha-SP. 
                Através de uma abordagem colaborativa, buscamos desenvolver soluções tecnológicas que atendam 
                às demandas locais e promovam a mobilização social responsável.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-green-600" />
                Nossos Valores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary" className="mr-2">Ética</Badge>
                <Badge variant="secondary" className="mr-2">Cidadania</Badge>
                <Badge variant="secondary" className="mr-2">Sustentabilidade</Badge>
                <Badge variant="secondary" className="mr-2">Participação Comunitária</Badge>
                <Badge variant="secondary" className="mr-2">Extensão Universitária</Badge>
              </div>
              <p className="text-gray-700 mt-4">
                Acreditamos na importância da extensão universitária como ponte entre academia e comunidade, 
                promovendo o desenvolvimento mútuo através de práticas éticas e sustentáveis.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Informações do Projeto */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-purple-600" />
              Informações do Projeto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Localização</h4>
                  <p className="text-gray-600">Varginha-SP</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-green-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Período</h4>
                  <p className="text-gray-600">Outubro 2025</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-purple-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">Orientação</h4>
                  <p className="text-gray-600">Prof.ª Marcela Bauer</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Equipe Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-purple-600" />
              Grupo MobilizaBR
            </CardTitle>
            <CardDescription>
              Estudantes comprometidos com a extensão universitária e desenvolvimento comunitário
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-lg">LM</span>
                </div>
                <h3 className="font-semibold text-gray-900">Lucas Mateus Andrade da Costa</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold text-lg">MP</span>
                </div>
                <h3 className="font-semibold text-gray-900">Matheus Fleckenstein Paina</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-lg">PG</span>
                </div>
                <h3 className="font-semibold text-gray-900">Pedro Gabriel de Oliveira Pinheiro</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-red-600 font-bold text-lg">GG</span>
                </div>
                <h3 className="font-semibold text-gray-900">Gabriel Galdino Andrade</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 font-bold text-lg">DH</span>
                </div>
                <h3 className="font-semibold text-gray-900">David Henrique Carvalho de Matos</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-indigo-600 font-bold text-lg">ML</span>
                </div>
                <h3 className="font-semibold text-gray-900">Matheus Lima Viana</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-teal-600 font-bold text-lg">CF</span>
                </div>
                <h3 className="font-semibold text-gray-900">Christian Felix Leite</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold text-lg">EM</span>
                </div>
                <h3 className="font-semibold text-gray-900">Eric Meireles Guedes da Silva</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-pink-600 font-bold text-lg">RO</span>
                </div>
                <h3 className="font-semibold text-gray-900">Ramone Oliveira Campos</h3>
                <p className="text-gray-600 text-sm">Membro da equipe</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Objetivos Section */}
        <Card>
          <CardHeader>
            <CardTitle>Objetivos do Projeto</CardTitle>
            <CardDescription>
              As metas que orientam nosso trabalho de extensão universitária
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Diagnóstico Comunitário</h4>
                  <p className="text-gray-700">
                    Realizar levantamento das características, necessidades e potencialidades da comunidade de Varginha
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Desenvolvimento de Soluções</h4>
                  <p className="text-gray-700">
                    Criar soluções tecnológicas colaborativas que atendam às demandas identificadas na comunidade
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fortalecimento da Cidadania</h4>
                  <p className="text-gray-700">
                    Promover a participação cidadã e o desenvolvimento sustentável através de práticas éticas
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}