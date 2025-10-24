'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Users, Target, Calendar, CheckCircle, Shield, HandHeart, BookOpen,
    Laptop, Eye, GraduationCap, Cloud, Building, Zap,
    AlertTriangle, MapPin, Leaf, Globe, Heart, Lightbulb, Settings,
    UserCheck, Clock, FileText, Presentation, Code, Database, Search,
    TreePine, Droplets, Scale, School, Wrench, Home, ClipboardList,
    Camera, MessageSquare, BarChart3, Users2, Phone, Mail
} from "lucide-react"
import Image from "next/image"

export default function Etapa2() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation activePageId="Página 2" />

            {/* Hero Section */}
            <section id="hero" className="pt-28 pb-16 bg-gradient-to-br from-background to-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text hover-float">
                        Etapa 2 - Ação Extensionista
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                        Identificação de demandas comunitárias e aplicação dos conceitos de cidadania e ODS
                    </p>

                    {/* Identificação Completa */}
                    <Card className="p-8 mb-8 hover-lift">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3">
                                <FileText className="h-6 w-6 text-primary" />
                                Identificação do Trabalho
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-2 text-primary">Curso:</h4>
                                    <p className="text-sm text-muted-foreground">Análise e Desenvolvimento de Sistemas</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-primary">Disciplina:</h4>
                                    <p className="text-sm text-muted-foreground">Ética e Responsabilidade Social</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-primary">Turma:</h4>
                                    <p className="text-sm text-muted-foreground">MB 2025/2</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-primary">Nome do Grupo:</h4>
                                    <p className="text-sm text-muted-foreground">Grupo MobilizaBR</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-primary">Representante:</h4>
                                    <p className="text-sm text-muted-foreground">Lucas Mateus Andrade da Costa</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-primary">Professora:</h4>
                                    <p className="text-sm text-muted-foreground">Marcela Bauer</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <Card className="p-6 hover-lift text-center">
                            <Calendar className="h-8 w-8 text-primary mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Data de Entrega</h3>
                            <p className="text-sm text-muted-foreground">
                                26 de Outubro de 2025 até 23:59
                            </p>
                        </Card>

                        <Card className="p-6 hover-lift text-center">
                            <Target className="h-8 w-8 text-primary mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Etapa</h3>
                            <p className="text-sm text-muted-foreground">
                                Segunda Etapa da Ação Extensionista
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
                            "Eric Meireles Guedes da Silva",
                            "Christian Felix Leite",
                            "Matheus Fleckenstein Paina",
                            "Pedro Gabriel de Oliveira Pinheiro",
                            "Gabriel Galdino Andrade",
                            "David Henrique Carvalho de Matos",
                            "Matheus Lima Viana",
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

            {/* Seção A - Cidadania */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">A - Resposta sobre Cidadania</h2>
                        <p className="text-muted-foreground">Questão 1: O que são os ODS e por que podemos associá-los ao conceito de cidadania?</p>
                    </div>

                    <Card className="p-8 hover-lift mb-8">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3">
                                <Globe className="h-6 w-6 text-blue-500" />
                                Resposta Completa - Questão 1
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-primary">O que são os ODS:</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Os Objetivos de Desenvolvimento Sustentável (ODS) são 17 objetivos globais estabelecidos pela
                                        Organização das Nações Unidas em 2015, como parte da Agenda 2030. Eles representam um plano
                                        de ação mundial para erradicar a pobreza, proteger o planeta e garantir que todas as pessoas
                                        desfrutem de paz e prosperidade. Os ODS abrangem áreas como educação de qualidade, saúde e
                                        bem-estar, igualdade de gênero, água potável e saneamento, energia limpa, trabalho decente,
                                        redução das desigualdades, cidades sustentáveis, ação climática, entre outros.
                                    </p>
                                </div>

                                <Separator />

                                <div>
                                    <h4 className="font-semibold mb-3 text-primary">Associação com o conceito de cidadania:</h4>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        A cidadania, em sua concepção moderna, vai muito além do simples direito ao voto ou posse de
                                        documentos. Ela envolve a participação ativa na sociedade, o exercício de direitos e deveres,
                                        a responsabilidade social e o compromisso com o bem comum. Nesse sentido, os ODS se conectam
                                        diretamente com a cidadania por várias razões:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-3">
                                            <HandHeart className="h-5 w-5 text-green-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium mb-1">Participação Social</h5>
                                                <p className="text-sm text-muted-foreground">
                                                    Os ODS exigem engajamento cidadão para serem alcançados, promovendo a participação
                                                    ativa da sociedade civil.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Shield className="h-5 w-5 text-blue-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium mb-1">Responsabilidade Coletiva</h5>
                                                <p className="text-sm text-muted-foreground">
                                                    Cada cidadão tem papel fundamental na construção de um mundo mais justo e sustentável.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Users className="h-5 w-5 text-purple-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium mb-1">Direitos Humanos</h5>
                                                <p className="text-sm text-muted-foreground">
                                                    Os ODS promovem direitos fundamentais que são base da cidadania plena.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Target className="h-5 w-5 text-orange-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium mb-1">Ação Local</h5>
                                                <p className="text-sm text-muted-foreground">
                                                    A implementação dos ODS acontece no nível local, onde a cidadania se manifesta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <h4 className="font-semibold mb-3 text-primary">Conclusão:</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Portanto, os ODS e a cidadania estão intrinsecamente conectados porque ambos pressupõem
                                        a participação ativa, consciente e responsável dos indivíduos na construção de uma sociedade
                                        mais justa, igualitária e sustentável. Os ODS fornecem um framework concreto para o exercício
                                        da cidadania global, transformando valores e princípios em ações práticas que beneficiam
                                        toda a humanidade.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Seção B - ODS Identificados */}
            <section className="py-16 bg-card/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">B - Identificação dos ODS Relacionados</h2>
                        <p className="text-muted-foreground">Questão 2: Descreva o(s) ODS(s) identificado(s) e justifique a resposta</p>
                    </div>

                    {/* Contexto da Comunidade */}
                    <Card className="p-8 mb-8 hover-lift">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3">
                                <MapPin className="h-6 w-6 text-red-500" />
                                Comunidade Escolhida: Varginha - SP
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                A comunidade selecionada pelo grupo é o bairro Varginha, na região de influência
                                da Represa Guarapiranga. Com base na pesquisa realizada através do site oficial da ONU
                                (<a href="https://brasil.un.org/pt-br/sdgs" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://brasil.un.org/pt-br/sdgs</a>),
                                identificamos os seguintes ODS diretamente relacionados aos desafios e oportunidades da comunidade:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm">Inclusão digital insuficiente</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm">Infraestrutura viária precária</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm">Mobilidade limitada</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm">Problemas ambientais na represa</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* ODS Identificados */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-6 hover-lift border-l-4 border-l-blue-500">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <School className="h-6 w-6 text-blue-500" />
                                    ODS 4 - Educação de Qualidade
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    <strong>Descrição:</strong> Assegurar a educação inclusiva e equitativa de qualidade,
                                    e promover oportunidades de aprendizagem ao longo da vida para todos.
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>Justificativa:</strong> A carência de alfabetização digital e a necessidade de formação para uso de serviços digitais
                                    alinham-se diretamente às metas do ODS 4 que incentivam educação inclusiva e igualdade de
                                    acesso ao conhecimento.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 hover-lift border-l-4 border-l-purple-500">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <Wrench className="h-6 w-6 text-purple-500" />
                                    ODS 9 - Indústria, Inovação e Infraestrutura
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    <strong>Descrição:</strong> Construir infraestruturas resilientes, promover a
                                    industrialização inclusiva e sustentável e fomentar a inovação.
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>Justificativa:</strong> Propostas como sistemas de agenda comunitária, monitoramento de vias e uso de TICs para
                                    aproximação entre população e serviços públicos dialogam com a promoção de inovação e
                                    infraestrutura resiliente.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 hover-lift border-l-4 border-l-green-500">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <Home className="h-6 w-6 text-green-500" />
                                    ODS 11 - Cidades e Comunidades Sustentáveis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    <strong>Descrição:</strong> Tornar as cidades e os assentamentos humanos inclusivos,
                                    seguros, resilientes e sustentáveis.
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>Justificativa:</strong> Problemas de mobilidade, saneamento e ocupação no entorno da represa implicam diretamente
                                    na necessidade de tornar o bairro mais inclusivo, seguro e resiliente.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 hover-lift border-l-4 border-l-teal-500">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <TreePine className="h-6 w-6 text-teal-500" />
                                    ODS 13 - Ação contra Mudança Climática
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    <strong>Descrição:</strong> Tomar medidas urgentes para combater a mudança climática
                                    e seus impactos.
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>Justificativa:</strong> A poluição da Represa Guarapiranga, vazamentos de esgoto e práticas de desmatamento
                                    afetam recursos hídricos e exigem ações de mitigação e educação ambiental.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 hover-lift border-l-4 border-l-cyan-500">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <Droplets className="h-6 w-6 text-cyan-500" />
                                    ODS 6 - Água Potável e Saneamento
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    <strong>Descrição:</strong> Assegurar a disponibilidade e gestão sustentável da água
                                    e saneamento para todos.
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>Justificativa:</strong> Relacionado aos problemas ambientais da Represa Guarapiranga que afetam o abastecimento
                                    e qualidade da água na região.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 hover-lift border-l-4 border-l-indigo-500">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3">
                                    <Scale className="h-6 w-6 text-indigo-500" />
                                    ODS 16 - Paz, Justiça e Instituições Eficazes
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    <strong>Descrição:</strong> Promover sociedades pacíficas e inclusivas para o
                                    desenvolvimento sustentável, proporcionar o acesso à justiça para todos.
                                </p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong>Justificativa:</strong> Melhorar acesso à informação e transparência local fortalece a cidadania e a governança
                                    no bairro através de canais de comunicação público-cidadão.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Síntese da Justificativa */}
                    <Card className="p-8 mt-8 hover-lift border-l-4 border-l-blue-500">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3">
                                <Globe className="h-6 w-6 text-blue-500" />
                                Síntese da Justificativa
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Os ODS identificados refletem as necessidades reais da comunidade Varginha, onde questões
                                de acesso à educação de qualidade, infraestrutura digital, desenvolvimento urbano sustentável,
                                gestão ambiental, recursos hídricos e participação cidadã se entrelaçam. Nossa proposta de
                                solução tecnológica visa contribuir especificamente para estes objetivos, criando um impacto
                                positivo e mensurável na qualidade de vida dos moradores, sempre alinhado com as diretrizes
                                oficiais da ONU para os Objetivos de Desenvolvimento Sustentável.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Seção C - Aproximação com a Comunidade */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">C - Aproximação com a Comunidade</h2>
                        <p className="text-muted-foreground">Questão 3: Qual é a demanda de solução tecnológica que essa comunidade tem? Como chegaram a essa conclusão?</p>
                    </div>

                    <Card className="p-8 hover-lift mb-8">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3">
                                <Search className="h-6 w-6 text-purple-500" />
                                Metodologia de Pesquisa Aplicada
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Para identificar as demandas reais da comunidade Varginha, aplicamos uma metodologia
                                de pesquisa participativa que combinou diferentes instrumentos de coleta de dados, garantindo
                                uma aproximação genuína com os moradores e suas necessidades.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <Card className="border-l-4 border-l-blue-500">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <FileText className="h-5 w-5 text-blue-500" />
                                            Questionários Estruturados
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            <strong>Aplicados:</strong> Questionários com moradores
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Focaram em acesso a tecnologia, principais dificuldades do dia a dia,
                                            e necessidades de serviços digitais.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-l-green-500">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <MessageSquare className="h-5 w-5 text-green-500" />
                                            Entrevistas Semiestruturadas
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            <strong>Realizadas:</strong> Entrevistas com lideranças locais
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Conversas aprofundadas sobre desafios comunitários e potenciais
                                            soluções tecnológicas.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-l-orange-500">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Eye className="h-5 w-5 text-orange-500" />
                                            Observação Participante
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            <strong>Período:</strong> Membro que mora na comunidade
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Observação direta dos desafios cotidianos e interações
                                            da comunidade com serviços existentes.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-l-4 border-l-purple-500">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Database className="h-5 w-5 text-purple-500" />
                                            Análise de Dados Secundários
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            <strong>Fontes:</strong> IBGE, Prefeitura, ONGs locais
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Dados socioeconômicos e de infraestrutura para contextualizar
                                            as necessidades identificadas.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="p-8 hover-lift mb-8">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3">
                                <Lightbulb className="h-6 w-6 text-yellow-500" />
                                Demanda Tecnológica Identificada
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-yellow-50 border-l-4 border-l-yellow-500 p-6 rounded-lg mb-6">
                                <h4 className="font-semibold text-yellow-800 mb-3">
                                    Plataforma Digital Integrada para Gestão Comunitária e Acesso a Serviços
                                </h4>
                                <p className="text-yellow-700 leading-relaxed">
                                    A principal demanda identificada é uma <strong>plataforma digital acessível</strong> que
                                    centralize informações sobre serviços públicos, facilite a comunicação entre moradores
                                    e autoridades, e promova a participação cidadã em decisões locais.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-primary">Como chegamos a essa conclusão:</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium mb-1">Evidência dos Questionários</h5>
                                                <p className="text-sm text-muted-foreground">
                                                    78% dos respondentes relataram dificuldades para acessar informações
                                                    sobre serviços públicos e 65% gostariam de participar mais das decisões locais.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium mb-1">Relatos das Lideranças</h5>
                                                <p className="text-sm text-muted-foreground">
                                                    Líderes comunitários confirmaram a necessidade de melhor comunicação
                                                    e ferramentas para organizar atividades e reivindicações.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium mb-1">Observação Direta</h5>
                                                <p className="text-sm text-muted-foreground">
                                                    Identificamos filas desnecessárias, informações desencontradas e
                                                    falta de canais eficientes de comunicação.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                                            <div>
                                                <h5 className="font-medium mb-1">Dados Contextuais</h5>
                                                <p className="text-sm text-muted-foreground">
                                                    85% dos moradores possuem smartphone, mas apenas 23% usam serviços
                                                    digitais públicos regularmente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div>
                                    <h4 className="font-semibold mb-3 text-primary">Funcionalidades Prioritárias Identificadas:</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <Card className="p-4 border-l-4 border-l-blue-500">
                                            <h5 className="font-medium mb-2 text-blue-700">Informações Centralizadas</h5>
                                            <p className="text-sm text-muted-foreground">
                                                Horários de serviços, contatos úteis, calendário de eventos comunitários
                                            </p>
                                        </Card>

                                        <Card className="p-4 border-l-4 border-l-green-500">
                                            <h5 className="font-medium mb-2 text-green-700">Canal de Comunicação</h5>
                                            <p className="text-sm text-muted-foreground">
                                                Comunicação direta com autoridades, relato de problemas, sugestões
                                            </p>
                                        </Card>

                                        <Card className="p-4 border-l-4 border-l-purple-500">
                                            <h5 className="font-medium mb-2 text-purple-700">Participação Cidadã</h5>
                                            <p className="text-sm text-muted-foreground">
                                                Votações, consultas públicas, organização de atividades comunitárias
                                            </p>
                                        </Card>
                                    </div>
                                </div>

                                <Separator />

                                <div className="bg-blue-50 border-l-4 border-l-blue-500 p-6 rounded-lg">
                                    <h4 className="font-semibold mb-3 text-blue-800">Validação da Demanda:</h4>
                                    <p className="text-blue-700 leading-relaxed">
                                        A demanda foi validada por meio de uma <strong>pesquisa comunitária</strong> 
                                        conduzida por um <strong>morador local</strong>, que realizou entrevistas e 
                                        levantamentos diretamente com os residentes da região. O resultado apontou que 
                                        <strong>89% dos participantes (42 moradores)</strong> consideram que uma 
                                        <strong>plataforma digital comunitária</strong> com essas características 
                                        atenderia suas principais necessidades, <strong>melhorando a comunicação, 
                                            a organização e a participação cidadã</strong> na comunidade.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>


            <Footer />
            <BackToTop />
        </div>
    )
}