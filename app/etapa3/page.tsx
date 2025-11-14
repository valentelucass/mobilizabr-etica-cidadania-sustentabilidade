'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Globe, CheckCircle, Users } from "lucide-react"
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Etapa3() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation activePageId="Página 3" />

            <section id="hero" className="pt-28 pb-16 bg-gradient-to-br from-background to-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text hover-float">
                        Etapa 3
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Avaliação e Resultados do Projeto
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="overflow-hidden">
                        <CardHeader className="text-center">
                            <CardTitle>Finalização do MobilizaBR</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                <AspectRatio ratio={16 / 9}>
                                    <iframe
                                        title="Finalização do MobilizaBR"
                                        src="https://www.youtube.com/embed/vTYaTS7iNXU"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </AspectRatio>
                            </div>
                            <p className="text-center text-muted-foreground mt-4">
                                Síntese do projeto, aprendizados e próximos passos.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="p-6">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-center">Resumo Rápido</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                                    <Users className="h-6 w-6 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Grupo</h4>
                                        <p className="text-sm text-muted-foreground">MobilizaBR</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                                    <BarChart3 className="h-6 w-6 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">Validação</h4>
                                        <p className="text-sm text-muted-foreground">89% de 42 moradores</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                                    <Globe className="h-6 w-6 text-primary flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold">ODS Relacionados</h4>
                                        <p className="text-sm text-muted-foreground">4, 6, 9, 11, 13, 16</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="p-6">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-center">ODS Relacionados</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap justify-center gap-2">
                                <Badge>ODS 4</Badge>
                                <Badge>ODS 6</Badge>
                                <Badge>ODS 9</Badge>
                                <Badge>ODS 11</Badge>
                                <Badge>ODS 13</Badge>
                                <Badge>ODS 16</Badge>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card className="p-6">
                        <CardHeader className="pb-2">
                            <CardTitle className="flex items-center gap-2 justify-center">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                                Próximos Passos
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">Apresentação do conceito à liderança local</li>
                                <li className="flex items-start gap-2">Levantamento de dados para construção do MVP</li>
                                <li className="flex items-start gap-2">Desenho de protótipo e testes com moradores</li>
                                <li className="flex items-start gap-2">Criação de canal de comunicação comunitária</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </div>
    )
}
