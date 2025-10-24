'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, MapPin, Leaf, Target, Calendar, GraduationCap } from 'lucide-react'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from 'next/image'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Navigation activePageId="Home" />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text hover-float">MobilizaBR</h1>
            </div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Projeto extensionista de mobilização comunitária em Varginha-SP.
              Desenvolvendo soluções tecnológicas colaborativas para fortalecer a cidadania e sustentabilidade local 
              através de uma abordagem ética e participativa.
            </p>
            
            {/* Informações do Projeto */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Varginha-SP</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Outubro 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Prof.ª Marcela Bauer</span>
              </div>
            </div>
          </header>

          {/* Etapas do Projeto */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Etapas do Projeto</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Nosso projeto está estruturado em três etapas principais, cada uma com objetivos específicos 
                para o desenvolvimento comunitário sustentável.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-blue-100/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">1</span>
                    Etapa 1
                  </CardTitle>
                  <p className="text-sm text-slate-500 font-medium">Diagnóstico e Planejamento</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Levantamento inicial dos conceitos de ética e cidadania, caracterização da comunidade 
                    de Varginha e planejamento das ações extensionistas.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <Target className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Conceitos fundamentais</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Caracterização comunitária</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Planejamento inicial</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => router.push('/etapa1')} 
                    className="w-full group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label="Acessar Etapa 1"
                  >
                    Acessar Etapa 1
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-green-100/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">2</span>
                    Etapa 2
                  </CardTitle>
                  <p className="text-sm text-slate-500 font-medium">Pesquisa e Aprofundamento</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Pesquisa participativa com a comunidade, identificação dos ODS relacionados 
                    e mapeamento das demandas tecnológicas locais.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <Target className="h-4 w-4 mr-2 text-green-500" />
                      <span>Pesquisa participativa</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <Users className="h-4 w-4 mr-2 text-green-500" />
                      <span>Identificação de ODS</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <BookOpen className="h-4 w-4 mr-2 text-green-500" />
                      <span>Demandas tecnológicas</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => router.push('/etapa2')} 
                    className="w-full group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label="Acessar Etapa 2"
                  >
                    Acessar Etapa 2
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-purple-100/50">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg">3</span>
                    Etapa 3
                  </CardTitle>
                  <p className="text-sm text-slate-500 font-medium">Intervenção e Co-criação</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Co-design participativo e implementação das soluções tecnológicas desenvolvidas 
                    em colaboração com a comunidade de Varginha - SP.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <Target className="h-4 w-4 mr-2 text-purple-500" />
                      <span>Co-design participativo</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <Users className="h-4 w-4 mr-2 text-purple-500" />
                      <span>Implementação colaborativa</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 bg-white/60 rounded-lg p-2">
                      <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
                      <span>Soluções tecnológicas</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => router.push('/etapa3')} 
                    className="w-full group bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    aria-label="Acessar Etapa 3"
                  >
                    Acessar Etapa 3
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sobre o Projeto */}
          <section className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre o Projeto</h2>
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  O MobilizaBR é um projeto de extensão universitária que visa fortalecer a participação cidadã 
                  e promover o desenvolvimento sustentável na comunidade de em Varginha-SP.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Através de uma abordagem colaborativa e ética, buscamos desenvolver soluções tecnológicas 
                  que atendam às demandas locais e promovam a mobilização social responsável.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <Users className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Comunidade</h4>
                      <p className="text-sm text-slate-feat(api): integração completa com as 3 APIs da ESL Cloud600">Varginha</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Localização</h4>
                      <p className="text-sm text-slate-600">Varginha, SP</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Foco</h4>
                      <p className="text-sm text-slate-600">Ética & Sustentabilidade</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <Target className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Objetivo</h4>
                      <p className="text-sm text-slate-600">Mobilização Social</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="relative mb-8">
                  <Image
                    src="/foto-alto-varginha.png"
                    alt="Cena aérea da cidade"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
                
                <Button 
                  onClick={() => router.push('/sobre')} 
                  size="lg"
                  variant="secondary"
                  className="group mb-4"
                  aria-label="Saiba mais sobre o projeto"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-slate-500">
                  Prof.ª Marcela Bauer • Outubro 2025
                </p>
              </div>
            </div>
          </section>

          {/* Valores do Projeto */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossos Valores</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              O projeto MobilizaBR é fundamentado em valores que orientam todas as nossas ações e decisões.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Ética</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Cidadania</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Sustentabilidade</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Participação</h3>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Extensão</h3>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}