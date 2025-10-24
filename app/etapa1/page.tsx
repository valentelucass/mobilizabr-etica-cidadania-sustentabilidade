'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Users, Target, Calendar, CheckCircle, Shield, Handshake, BookOpen,
    Laptop, Eye, HandHeart, GraduationCap, Cloud, Building, Zap,
    AlertTriangle, MapPin, Leaf, Globe, Heart, Lightbulb, Settings,
    UserCheck, Clock, FileText, Presentation, Code, Database, Search
} from "lucide-react"
import Image from "next/image"

export default function Etapa1() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation activePageId="Página 1" />

            {/* Hero Section */}
            <section id="hero" className="pt-28 pb-16 bg-gradient-to-br from-background to-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl md:text-6xl font-bold mb-8 gradient-text hover-float">
                        Etapa 1 - Ética, Cidadania e Sustentabilidade
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        Etapa 1: Apropriação dos conceitos fundamentais e início da atividade extensionista
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <Card className="p-6 hover-lift">
                            <BookOpen className="h-8 w-8 text-primary mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Curso</h3>
                            <p className="text-sm text-muted-foreground">
                                Análise e Desenvolvimento de Sistemas
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <GraduationCap className="h-8 w-8 text-primary mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Professora</h3>
                            <p className="text-sm text-muted-foreground">
                                Marcela Bauer
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <Calendar className="h-8 w-8 text-primary mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Data</h3>
                            <p className="text-sm text-muted-foreground">
                                Setembro de 2025
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <Clock className="h-8 w-8 text-primary mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Prazo</h3>
                            <p className="text-sm text-muted-foreground">
                                24/09 até 23:59
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Grupo MobilizaBR */}
            <section className="py-16 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Grupo MobilizaBR</h2>
                        <p className="text-muted-foreground">Integrantes do projeto extensionista</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Lucas Mateus Andrade da Costa",
                            "Matheus Fleckenstein Paina",
                            "Pedro Gabriel de Oliveira Pinheiro",
                            "Gabriel Galdino Andrade",
                            "David Henrique Carvalho de Matos",
                            "Matheus Lima Viana",
                            "Christian Felix Leite",
                            "Eric Meireles Guedes da Silva",
                            "Ramone Oliveira Campos"
                        ].map((nome, index) => (
                            <Card key={index} className="p-4 hover-lift">
                                <div className="flex items-center space-x-3">
                                    <UserCheck className="h-5 w-5 text-primary" />
                                    <p className="text-sm font-medium">{nome}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Objetivos da Etapa 1 */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Introdução e Objetivos da Etapa 1</h2>
                        <p className="text-muted-foreground">Fundamentos teóricos e práticos do projeto</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <Card className="p-8">
                            <Target className="h-12 w-12 text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Objetivo desta etapa</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Apropriar-se dos conceitos de ética, extensão e comunidade e iniciar a atividade extensionista.
                            </p>
                        </Card>

                        <Card className="p-8">
                            <FileText className="h-12 w-12 text-primary mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Resumo do que entregamos</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Apresentação em site</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Respostas sobre Ética, Extensão e Comunidade</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Caracterização da comunidade escolhida</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    {/* Etapas do Processo */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="p-6 text-center hover-lift">
                            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                01
                            </div>
                            <h3 className="font-bold mb-2">Conceitos Fundamentais</h3>
                            <p className="text-sm text-muted-foreground">
                                Compreensão dos pilares teóricos da disciplina
                            </p>
                        </Card>

                        <Card className="p-6 text-center hover-lift">
                            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                02
                            </div>
                            <h3 className="font-bold mb-2">Seleção da Comunidade</h3>
                            <p className="text-sm text-muted-foreground">
                                Identificação e caracterização do público-alvo
                            </p>
                        </Card>

                        <Card className="p-6 text-center hover-lift">
                            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                03
                            </div>
                            <h3 className="font-bold mb-2">Planejamento Inicial</h3>
                            <p className="text-sm text-muted-foreground">
                                Estruturação das atividades extensionistas
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Seção com imagem de apresentação */}
            <section className="py-16 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Apresentação do Projeto</h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                O desenvolvimento desta etapa envolve a apresentação estruturada dos conceitos fundamentais
                                e a caracterização detalhada da comunidade escolhida para a intervenção extensionista.
                            </p>
                            <div className="flex items-center space-x-2">
                                <Presentation className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium">Pessoas em uma sala de apresentação com gráficos</span>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/community-concept.svg"
                                alt="Conceito de comunidade na extensão universitária"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ética na Análise e Desenvolvimento de Sistemas */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Ética na Análise e Desenvolvimento de Sistemas</h2>
                        <p className="text-muted-foreground">Questão 1: Fundamentos éticos na área tecnológica</p>
                    </div>

                    <Card className="p-8 mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">
                            O que é ética? E por que ela importa para o campo da Análise e Desenvolvimento de Sistemas?
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                    <Shield className="h-6 w-6 text-primary mr-2" />
                                    Definição de Ética
                                </h4>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Ética é o ramo da filosofia que estuda os princípios e valores que orientam o comportamento humano,
                                    buscando distinguir ações corretas de incorretas com base em princípios universais ou contextuais.
                                </p>

                                <h4 className="text-xl font-semibold mb-4 flex items-center">
                                    <Handshake className="h-6 w-6 text-primary mr-2" />
                                    Contexto Profissional
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    No contexto profissional, ética envolve responsabilidade, integridade, respeito pelos outros
                                    e compromisso com o bem comum.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-semibold mb-4">
                                    Por que importa para Análise e Desenvolvimento de Sistemas:
                                </h4>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-3">
                                        <Globe className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h5 className="font-semibold mb-2">Impacto Social</h5>
                                            <p className="text-sm text-muted-foreground">
                                                Sistemas afetam direitos, privacidade e vida das pessoas; decisões técnicas têm impacto social e econômico.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <UserCheck className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h5 className="font-semibold mb-2">Responsabilidade Profissional</h5>
                                            <p className="text-sm text-muted-foreground">
                                                Profissionais da área lidam com dados sensíveis, algoritmos de decisão e infraestruturas críticas;
                                                agir eticamente reduz riscos de danos, discriminação e invasão de privacidade.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <Heart className="h-6 w-6 text-primary mt-1" />
                                        <div>
                                            <h5 className="font-semibold mb-2">Confiança Pública</h5>
                                            <p className="text-sm text-muted-foreground">
                                                Ética orienta escolhas sobre segurança, acessibilidade, transparência e justiça algorítmica,
                                                contribuindo para confiança pública nas soluções tecnológicas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Separator className="my-6" />

                        <div className="text-sm text-muted-foreground">
                            <strong>Referências:</strong> ACM Code of Ethics and Professional Conduct, IEEE/ACM Software Engineering Code of Ethics,
                            Web-aulas e textos da disciplina (Prof. Marcela Bauer, AVA)
                        </div>
                    </Card>
                </div>
            </section>

            {/* Extensão e Construção Social */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">Extensão e Construção Social</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Questão 2: Contribuições da extensão universitária
                        </p>
                    </div>

                    <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <div className="relative mb-6">
                                <Image
                                    src="/university-extension.svg"
                                    alt="Extensão universitária e desenvolvimento social"
                                    width={600}
                                    height={300}
                                    className="rounded-xl mx-auto shadow-md"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900 ">
                                Como uma ação extensionista desenvolvida no campo de estudos da Análise e Desenvolvimento de Sistemas
                                pode contribuir para a construção de uma sociedade boa de se viver?
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <Laptop className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-lg">Inclusão Digital</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Capacitar cidadãos para usar ferramentas digitais com segurança e autonomia,
                                            reduzindo desigualdades de acesso à informação e serviços públicos.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Eye className="h-8 w-8 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-lg">Transparência e Participação</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Desenvolver plataformas que facilitem controle social e participação cívica,
                                            fortalecendo a democracia.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-3 rounded-full">
                                        <HandHeart className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-lg">Impacto Social Direto</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Automatizar processos administrativos em organizações comunitárias,
                                            otimizar laços de solidariedade e facilitar a oferta de serviços sociais.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <Lightbulb className="h-8 w-8 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 text-lg">Formação Crítica</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Aproximar estudantes da realidade social, estimulando responsabilidade ética
                                            e cidadã nos futuros profissionais.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <Separator className="my-8" />

                        <Card className="p-6 bg-slate-50 border-0">
                            <h4 className="font-semibold mb-6 text-xl text-center">Possíveis Atividades Práticas</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700">Oficinas de alfabetização digital</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700">Desenvolvimento de sistema de agendamento para centro comunitário</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700">Manutenção de laboratório de informática</span>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700">Criação de conteúdos educativos digitais</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Card>
                </div>
            </section>

            {/* Conceito de Comunidade */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Conceito de Comunidade na Extensão</h2>
                        <p className="text-muted-foreground">Questão 1: Definindo comunidade no contexto universitário</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <Card className="p-8">
                                <h3 className="text-2xl font-bold mb-6">
                                    O que é comunidade no contexto da extensão universitária?
                                </h3>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3 flex items-center">
                                        <Users className="h-5 w-5 text-primary mr-2" />
                                        Definição
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        No contexto da extensão universitária, comunidade é o conjunto de pessoas e/ou grupos organizados
                                        que compartilham um território, interesse, identidade ou necessidade concreta e que podem interagir
                                        com a universidade para resolver problemas, trocar saberes e construir ações coletivas.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="text-center p-3 bg-card rounded-lg">
                                        <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                                        <h5 className="font-semibold text-sm">Geográfica</h5>
                                        <p className="text-xs text-muted-foreground">Bairro, vila, região específica</p>
                                    </div>
                                    <div className="text-center p-3 bg-card rounded-lg">
                                        <Building className="h-6 w-6 text-primary mx-auto mb-2" />
                                        <h5 className="font-semibold text-sm">Institucional</h5>
                                        <p className="text-xs text-muted-foreground">Associação, ONG, escola, centro comunitário</p>
                                    </div>
                                    <div className="text-center p-3 bg-card rounded-lg">
                                        <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                                        <h5 className="font-semibold text-sm">Social</h5>
                                        <p className="text-xs text-muted-foreground">Grupos por interesse comum ou identidade</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="relative">
                            <Image
                                src="foto-alto-varginha.png"
                                alt="Foto Varginha do alto"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
                        <Card className="p-4 text-center hover-lift">
                            <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold text-sm mb-1">Participação</h4>
                            <p className="text-xs text-muted-foreground">Envolvimento ativo dos membros</p>
                        </Card>

                        <Card className="p-4 text-center hover-lift">
                            <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold text-sm mb-1">Protagonismo Local</h4>
                            <p className="text-xs text-muted-foreground">Liderança e autonomia da comunidade</p>
                        </Card>

                        <Card className="p-4 text-center hover-lift">
                            <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold text-sm mb-1">Demandas Reais</h4>
                            <p className="text-xs text-muted-foreground">Necessidades concretas identificadas</p>
                        </Card>

                        <Card className="p-4 text-center hover-lift">
                            <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold text-sm mb-1">Saberes Locais</h4>
                            <p className="text-xs text-muted-foreground">Conhecimento complementar ao acadêmico</p>
                        </Card>

                        <Card className="p-4 text-center hover-lift">
                            <Handshake className="h-6 w-6 text-primary mx-auto mb-2" />
                            <h4 className="font-semibold text-sm mb-1">Relação Horizontal</h4>
                            <p className="text-xs text-muted-foreground">Parceria igualitária universidade-comunidade</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Comunidade Escolhida */}
            <section className="py-16 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Comunidade Escolhida</h2>
                        <p className="text-muted-foreground">Questões 2 e 3: Seleção e motivações</p>
                    </div>

                    <Card className="p-8 mb-8">
                        <div className="text-center mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-slate-700 leading-relaxed">
                                Qual comunidade despertou interesse do grupo para a futura interação e parceria? Quais foram os motivos?
                            </h3>
                            <Badge variant="secondary" className="text-lg px-4 py-2 bg-blue-100 text-blue-800">
                                Bairro de Varginha
                            </Badge>
                            <p className="text-muted-foreground mt-2 text-sm">Comunidade local selecionada</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="p-6 text-center hover-lift">
                                <Laptop className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h4 className="font-semibold mb-3">Demanda por Inclusão Digital</h4>
                                <p className="text-sm text-muted-foreground">
                                    Necessidade de alfabetização digital entre jovens e idosos da comunidade
                                </p>
                            </Card>

                            <Card className="p-6 text-center hover-lift">
                                <Handshake className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h4 className="font-semibold mb-3">Parceria Facilitada</h4>
                                <p className="text-sm text-muted-foreground">
                                    Possibilidade de contato direto com coordenação local e abertura para colaboração
                                </p>
                            </Card>

                            <Card className="p-6 text-center hover-lift">
                                <Building className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h4 className="font-semibold mb-3">Infraestrutura Disponível</h4>
                                <p className="text-sm text-muted-foreground">
                                    Existência de espaço físico com sala e microcomputadores para oficinas presenciais
                                </p>
                            </Card>

                            <Card className="p-6 text-center hover-lift">
                                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                                <h4 className="font-semibold mb-3">Impacto Rápido</h4>
                                <p className="text-sm text-muted-foreground">
                                    Potencial para projetos de resultado imediato: portal de comunicação, agenda de serviços, sistema de acompanhamento
                                </p>
                            </Card>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Caracterização da Comunidade */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Caracterização da Comunidade</h2>
                        <p className="text-muted-foreground">Desafios e Realidades Locais</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                A comunidade de Varginha, apesar de seu potencial, enfrenta desafios significativos que impactam
                                o cotidiano e a qualidade de vida de seus moradores. Identificar esses pontos é crucial para
                                propor ações extensionistas eficazes:
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-3">
                                    <Settings className="h-6 w-6 text-orange-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-2">Infraestrutura Viária</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Necessidade de recapeamento das vias e falta de rotas alternativas de deslocamento
                                            (apenas um caminho de ida e volta).
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-2">Mobilidade Urbana</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Transporte público limitado, dificultando o acesso a outras regiões e serviços essenciais.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Building className="h-6 w-6 text-purple-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-2">Dinâmica Comercial</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Crescimento comercial desordenado, gerando forte concorrência entre estabelecimentos do mesmo segmento.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Leaf className="h-6 w-6 text-green-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold mb-2">Questões Ambientais</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Desflorestamento e queimadas frequentes na região.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src="/cena-de-bairro-com--nibus--lixo-e-polui--o.jpg"
                                alt="Cena de bairro com ônibus, lixo e poluição"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                                Cena de bairro com ônibus, lixo e poluição
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-6">
                            <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
                            <h4 className="font-semibold mb-3">Poluição Hídrica</h4>
                            <p className="text-sm text-muted-foreground">
                                Destruição do meio ambiente, com esgoto desaguando e lixo acumulado na Represa Guarapiranga.
                            </p>
                        </Card>

                        <Card className="p-6">
                            <Eye className="h-8 w-8 text-yellow-500 mb-4" />
                            <h4 className="font-semibold mb-3">Conscientização</h4>
                            <p className="text-sm text-muted-foreground">
                                Falta de conscientização da população sobre a importância da preservação do entorno da Represa Guarapiranga.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Justificativa e Proposta */}
            <section className="py-16 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Justificativa e Proposta Inicial</h2>
                        <p className="text-muted-foreground">Fundamentação da escolha e ações propostas</p>
                    </div>

                    <Card className="p-8 mb-8">
                        <h3 className="text-2xl font-bold mb-6 text-center">Justificativa da Escolha</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            A escolha do bairro de Parelheiros/Varginha alinha-se aos objetivos do projeto: promover inclusão,
                            empoderamento e conscientização. Apesar dos desafios, a comunidade oferece oportunidades únicas para ações extensionistas.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4 bg-background rounded-lg">
                                <Laptop className="h-8 w-8 text-red-500 mx-auto mb-3" />
                                <h4 className="font-semibold mb-2">Lacunas Tecnológicas</h4>
                                <p className="text-sm text-muted-foreground">
                                    Falta de acesso digital e capacitação tecnológica para moradores e voluntários.
                                </p>
                            </div>

                            <div className="text-center p-4 bg-background rounded-lg">
                                <Settings className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                                <h4 className="font-semibold mb-2">Infraestrutura Deficiente</h4>
                                <p className="text-sm text-muted-foreground">
                                    Problemas em vias, transporte público limitado e rotas de deslocamento inseguras.
                                </p>
                            </div>

                            <div className="text-center p-4 bg-background rounded-lg">
                                <Leaf className="h-8 w-8 text-green-500 mx-auto mb-3" />
                                <h4 className="font-semibold mb-2">Desafios Ambientais</h4>
                                <p className="text-sm text-muted-foreground">
                                    Desmatamento, queimadas, poluição da Represa Guarapiranga e baixa conscientização ecológica.
                                </p>
                            </div>
                        </div>

                        <Separator className="my-6" />

                        <p className="text-muted-foreground text-center">
                            A atuação no bairro trará benefícios diretos aos moradores, permitindo aos estudantes aplicar
                            conhecimentos técnicos e sociais na prática.
                        </p>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 hover-lift">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                01
                            </div>
                            <h4 className="font-semibold mb-3">Oficina de Alfabetização Digital</h4>
                            <p className="text-sm text-muted-foreground">
                                Encontros virtuais sobre uso básico de celular/internet, segurança e privacidade.
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                02
                            </div>
                            <h4 className="font-semibold mb-3">Sistema de Agenda Comunitária</h4>
                            <p className="text-sm text-muted-foreground">
                                Desenvolvimento de mini-sistema web para atividades, transporte e eventos locais.
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                03
                            </div>
                            <h4 className="font-semibold mb-3">Treinamento Técnico para Voluntários</h4>
                            <p className="text-sm text-muted-foreground">
                                Capacitação em manutenção de hardware e soluções digitais para apoio local.
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift">
                            <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                                04
                            </div>
                            <h4 className="font-semibold mb-3">Conscientização Ambiental e Mobilidade</h4>
                            <p className="text-sm text-muted-foreground">
                                Campanhas sobre lixo, represa, queimadas, reflorestamento e discussões sobre transporte.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Impacto Esperado */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Impacto Esperado</h2>
                        <p className="text-muted-foreground">Resultados e benefícios previstos</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="p-6 text-center hover-lift">
                            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h4 className="font-semibold mb-3">Capacitação</h4>
                            <p className="text-sm text-muted-foreground">
                                Moradores capacitados digital e ambientalmente.
                            </p>
                        </Card>

                        <Card className="p-6 text-center hover-lift">
                            <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h4 className="font-semibold mb-3">Protótipo Funcional</h4>
                            <p className="text-sm text-muted-foreground">
                                Protótipo funcional de sistema de agenda comunitária.
                            </p>
                        </Card>

                        <Card className="p-6 text-center hover-lift">
                            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h4 className="font-semibold mb-3">Engajamento Social</h4>
                            <p className="text-sm text-muted-foreground">
                                Maior engajamento social em meio ambiente, mobilidade e economia local.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Recursos Tecnológicos e Cronograma */}
            <section className="py-16 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Recursos Tecnológicos e Cronograma Detalhado</h2>
                        <p className="text-muted-foreground">Ações e Soluções Propostas</p>
                    </div>

                    <Card className="p-8 mb-8">
                        <p className="text-muted-foreground mb-8 leading-relaxed text-center">
                            Para abordar os desafios identificados na comunidade de Varginha, propomos o desenvolvimento e a implementação
                            de soluções tecnológicas focadas em transporte, infraestrutura, segurança e meio ambiente.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="p-6 hover-lift">
                                <MapPin className="h-10 w-10 text-blue-500 mb-4" />
                                <h4 className="font-semibold mb-3">Transporte Público Inteligente</h4>
                                <p className="text-sm text-muted-foreground">
                                    Desenvolvimento de um aplicativo em tempo real para transporte público e pontos de ônibus inteligentes
                                    para melhor mobilidade na comunidade.
                                </p>
                            </Card>

                            <Card className="p-6 hover-lift">
                                <Settings className="h-10 w-10 text-orange-500 mb-4" />
                                <h4 className="font-semibold mb-3">Infraestrutura Viária Digital</h4>
                                <p className="text-sm text-muted-foreground">
                                    Criação do aplicativo "Caça-Buraco" para registro de localização de problemas na infraestrutura viária
                                    e monitoramento com IA.
                                </p>
                            </Card>

                            <Card className="p-6 hover-lift">
                                <Shield className="h-10 w-10 text-green-500 mb-4" />
                                <h4 className="font-semibold mb-3">Segurança e Rede de Ajuda</h4>
                                <p className="text-sm text-muted-foreground">
                                    Implementação de iluminação inteligente, câmeras com IA para monitoramento e uma rede de ajuda digital
                                    comunitária para questões sociais.
                                </p>
                            </Card>
                        </div>
                    </Card>

                    {/* Cronograma */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-center mb-8">Cronograma Ampliado para Desenvolvimento e Ação</h3>

                        <div className="relative mb-8">
                            <Image
                                src="/project-timeline.svg"
                                alt="Cronograma de desenvolvimento do projeto"
                                width={600}
                                height={300}
                                className="rounded-xl mx-auto shadow-md"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow h-full">
                                <div className="flex items-start gap-4 h-full">
                                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                        <Calendar className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold mb-2 text-lg">Semana 1</h4>
                                        <h5 className="text-sm font-medium mb-2 text-blue-600">Apresentação e Contato</h5>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Contato inicial com a comunidade e visita técnica. Apresentação preliminar das soluções tecnológicas propostas.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-lg transition-shadow h-full">
                                <div className="flex items-start gap-4 h-full">
                                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                        <Search className="h-8 w-8 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold mb-2 text-lg">Semana 2</h4>
                                        <h5 className="text-sm font-medium mb-2 text-green-600">Levantamento Detalhado</h5>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Levantamento de necessidades específicas em transporte, infraestrutura, segurança e meio ambiente.
                                            Planejamento das oficinas e protótipos digitais.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow h-full">
                                <div className="flex items-start gap-4 h-full">
                                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                        <Code className="h-8 w-8 text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold mb-2 text-lg">Semanas 3-4</h4>
                                        <h5 className="text-sm font-medium mb-2 text-purple-600">Desenvolvimento e Testes</h5>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Criação e testes dos protótipos dos aplicativos de Transporte Público, "Caça-Buraco", e sistemas de segurança.
                                            Preparação de materiais educativos para as oficinas.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow h-full">
                                <div className="flex items-start gap-4 h-full">
                                    <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                                        <Lightbulb className="h-8 w-8 text-orange-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold mb-2 text-lg">Semana 5</h4>
                                        <h5 className="text-sm font-medium mb-2 text-orange-600">Primeira Oficina e Demonstração</h5>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Realização da primeira oficina de alfabetização digital. Demonstração dos aplicativos e tecnologias
                                            desenvolvidas para a comunidade.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recursos e Indicadores */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <Card className="p-6">
                            <Building className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-bold mb-4">Recursos Necessários</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Disponibilidade de espaço digital adequado para atividades</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Ponto de contato responsável na comunidade para comunicação</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Autorizações para uso de imagens e dados, quando necessário</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Compatibilidade de horários entre estudantes e moradores</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span>Equipamentos e conexão para testes dos aplicativos</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <Target className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-bold mb-4">Indicadores de Sucesso</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-blue-500" />
                                    <span>Número de participantes nas oficinas e nível de satisfação</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-blue-500" />
                                    <span>Uso efetivo dos sistemas: atendimentos agendados, buracos reportados</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-blue-500" />
                                    <span>Monitoramento de transporte e engajamento na rede de ajuda digital</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-blue-500" />
                                    <span>Protótipos funcionais de todos os aplicativos e sistemas entregues e testados</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <FileText className="h-8 w-8 text-primary mb-4" />
                            <h3 className="font-bold mb-4">Métodos de Avaliação</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-purple-500" />
                                    <span>Questionários simples (presenciais/online)</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-purple-500" />
                                    <span>Registro de presença</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-purple-500" />
                                    <span>Relatórios reflexivos dos estudantes</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Considerações Finais */}
            <section className="py-16 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Considerações Finais</h2>
                        <p className="text-muted-foreground">Compromissos do grupo</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 text-center hover-lift">
                            <HandHeart className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h4 className="font-semibold mb-3">Contato Inicial</h4>
                            <p className="text-sm text-muted-foreground">
                                Realizar contato inicial até data definida
                            </p>
                        </Card>

                        <Card className="p-6 text-center hover-lift">
                            <UserCheck className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h4 className="font-semibold mb-3">Representante</h4>
                            <p className="text-sm text-muted-foreground">
                                Confirmar representante e inscrição no AVA
                            </p>
                        </Card>

                        <Card className="p-6 text-center hover-lift">
                            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h4 className="font-semibold mb-3">Fórum do Grupo</h4>
                            <p className="text-sm text-muted-foreground">
                                Abrir fórum no AVA e inscrever integrantes
                            </p>
                        </Card>

                        <Card className="p-6 text-center hover-lift">
                            <Handshake className="h-8 w-8 text-primary mx-auto mb-4" />
                            <h4 className="font-semibold mb-3">Responsabilidades</h4>
                            <p className="text-sm text-muted-foreground">
                                Representante: entrega final<br />
                                Membros: participar das visitas e desenvolvimento das atividades
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Referências */}
            <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">Referências</h2>
                        <p className="text-lg text-slate-600">Fontes e materiais utilizados no projeto</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-full">
                                    <BookOpen className="h-8 w-8 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg">Material Didático</h4>
                                    <div className="space-y-2 text-slate-600">
                                        <p className="text-sm">• BAUER, Marcela. Web-aulas da disciplina de Ética e Responsabilidade Social. AVA Institucional.</p>
                                        <p className="text-sm">• Textos complementares disponibilizados no ambiente virtual de aprendizagem.</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="bg-green-100 p-3 rounded-full">
                                    <Shield className="h-8 w-8 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg">Códigos de Ética</h4>
                                    <div className="space-y-2 text-slate-600">
                                        <p className="text-sm">• ACM. <em>ACM Code of Ethics and Professional Conduct</em>. Association for Computing Machinery, 2018.</p>
                                        <p className="text-sm">• IEEE/ACM. <em>Software Engineering Code of Ethics and Professional Practice</em>. Version 5.2, 1999.</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <GraduationCap className="h-8 w-8 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg">Extensão Universitária</h4>
                                    <div className="space-y-2 text-slate-600">
                                        <p className="text-sm">• BRASIL. Resolução CNE/CES nº 7, de 18 de dezembro de 2018. Estabelece as Diretrizes para a Extensão na Educação Superior Brasileira.</p>
                                        <p className="text-sm">• FORPROEX. <em>Política Nacional de Extensão Universitária</em>. Fórum de Pró-Reitores de Extensão das Universidades Públicas Brasileiras, 2012.</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-100 p-3 rounded-full">
                                    <FileText className="h-8 w-8 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg">Tecnologia e Sociedade</h4>
                                    <div className="space-y-2 text-slate-600">
                                        <p className="text-sm">• CASTELLS, Manuel. <em>A Sociedade em Rede</em>. São Paulo: Paz e Terra, 1999.</p>
                                        <p className="text-sm">• LÉVY, Pierre. <em>Cibercultura</em>. São Paulo: Editora 34, 1999.</p>
                                        <p className="text-sm">• SILVEIRA, Sérgio Amadeu da. <em>Exclusão Digital: A Miséria na Era da Informação</em>. São Paulo: Fundação Perseu Abramo, 2001.</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <BackToTop />
            <Footer />
        </div>
    )
}