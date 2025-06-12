"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ChevronRight, Cpu, Database, Globe, Laptop, Shield, Zap, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home(): JSX.Element {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["/images/inspection-field.png", "/images/inspection-factory.png"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#070b14] text-white">

      <header className="sticky top-0 z-40 w-full border-b border-[#1e293b] bg-[#070b14]/95 backdrop-blur supports-[backdrop-filter]:bg-[#070b14]/60">
        <div className="container flex h-16 items-center">
          <div className="flex flex-1 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="GIMB Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-6">
                <Link href="#quem-somos" className="text-sm font-medium transition-colors hover:text-[#60a5fa]">
                  Quem Somos
                </Link>
                <Link href="#plataforma" className="text-sm font-medium transition-colors hover:text-[#60a5fa]">
                  Plataforma
                </Link>
                <Link href="#diferenciais" className="text-sm font-medium transition-colors hover:text-[#60a5fa]">
                  Diferenciais
                </Link>
                <Link href="#clientes" className="text-sm font-medium transition-colors hover:text-[#60a5fa]">
                  Clientes
                </Link>
                <Link href="#contato" className="text-sm font-medium transition-colors hover:text-[#60a5fa]">
                  Contato
                </Link>

                <Link href="#contato">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#4f46e5] to-[#4338ca] hover:from-[#4338ca] hover:to-[#3730a3] text-white shadow-lg shadow-[#4f46e5]/20"
                  >
                    Agendar Demonstração
                  </Button>
                </Link>

                <div className="flex items-center space-x-4 ml-4">
                  <Link href="https://api.whatsapp.com/send/?phone=5516997898401&text&type=phone_number&app_absent=0" className="text-[#94a3b8] hover:text-[#25D366] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[#25D366]">
                      <path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z"></path>
                    </svg>
                    <span className="sr-only">WhatsApp</span>
                  </Link>

                  <Link href="https://www.instagram.com/gimb.app/" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>

                  <Link href="https://www.linkedin.com/company/gimb" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>

                  <Link href="https://facebook.com/gimb" className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-5-1h-2V9c0-.552.224-1 .5-1H17V5h-2.5C13.12 5 12 6.12 12 7.5V11H10v2h2v5h2v-5h1.5l.5-2z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </div>
            </nav>

            {/* Menu Mobile */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-[#1e293b] px-2"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  if (mobileMenu) {
                    mobileMenu.classList.toggle("hidden")
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div id="mobile-menu" className="hidden md:hidden">
          <div className="border-t border-[#1e293b] py-3 px-6 space-y-3 bg-[#070b14]/95 backdrop-blur supports-[backdrop-filter]:bg-[#070b14]/80">
            <Link href="#quem-somos" className="block text-sm font-medium transition-colors hover:text-[#60a5fa]">
              Quem Somos
            </Link>
            <Link href="#plataforma" className="block text-sm font-medium transition-colors hover:text-[#60a5fa]">
              Plataforma
            </Link>
            <Link href="#diferenciais" className="block text-sm font-medium transition-colors hover:text-[#60a5fa]">
              Diferenciais
            </Link>
            <Link href="#clientes" className="block text-sm font-medium transition-colors hover:text-[#60a5fa]">
              Clientes
            </Link>
            <Link href="#contato" className="block text-sm font-medium transition-colors hover:text-[#60a5fa]">
              Contato
            </Link>

            <Link href="#contato">
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-[#4f46e5] to-[#4338ca] hover:from-[#4338ca] hover:to-[#3730a3] text-white shadow-lg shadow-[#4f46e5]/20 mt-2"
              >
                Agendar Demonstração
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-12 lg:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#070b14] to-[#070b14]"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-bl from-[#4f46e5]/20 via-transparent to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[80%] h-[80%] bg-gradient-to-tr from-[#60a5fa]/10 via-transparent to-transparent blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-[#4f46e5]/30 bg-[#4f46e5]/10 px-3 py-1 text-sm text-[#818cf8] backdrop-blur shadow-lg shadow-[#4f46e5]/5">
                    <span className="mr-2 h-2 w-2 rounded-full bg-[#4f46e5]"></span>
                    Tecnologia de ponta para o agronegócio
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] drop-shadow-sm">
                    Plataforma Integrada para Inspeção de Qualidade
                  </h1>
                  <p className="max-w-[600px] text-[#94a3b8] text-lg md:text-xl">
                    Transforme a gestão de processos de inspeção e qualidade no setor agroindustrial com nossa
                    plataforma inovadora.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contato">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#4f46e5] to-[#4338ca] hover:from-[#4338ca] hover:to-[#3730a3] text-white shadow-lg shadow-[#4f46e5]/20 cta-button"
                    >
                      Agendar Demonstração
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/10 to-transparent rounded-2xl blur-xl"></div>
                <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden border border-[#1e293b] shadow-2xl shadow-[#4f46e5]/10">
                  <div className="relative w-full h-full">
                    {images.map((src, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          currentImage === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`GIMB Platform Image ${index + 1}`}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados - Impacto Real */}
        <section id="clientes" className="w-full py-12 md:py-24 lg:py-32 bg-[#070b14] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4f46e5]/20 px-3 py-1 text-sm text-[#818cf8] shadow-lg shadow-[#4f46e5]/5">
                  Resultados Comprovados
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] drop-shadow-sm">
                  Impacto Real
                </h2>
                <p className="max-w-[900px] text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja como o GIMB pode transformar sua operação.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-8 relative overflow-hidden shadow-xl shadow-[#4f46e5]/5 h-[200px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                <div className="flex flex-col items-center justify-center h-full relative z-10">
                  <div className="text-4xl font-bold text-[#60a5fa] drop-shadow-glow">R$ 18,7M</div>
                  <p className="text-xl font-semibold">Economia Total</p>
                  <p className="text-center text-sm text-[#94a3b8]">Valor economizado pelos clientes (2019-2025)</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-8 relative overflow-hidden shadow-xl shadow-[#4f46e5]/5 h-[200px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                <div className="flex flex-col items-center justify-center h-full relative z-10">
                  <div className="text-4xl font-bold text-[#60a5fa] drop-shadow-glow">120+</div>
                  <p className="text-xl font-semibold">Projetos</p>
                  <p className="text-center text-sm text-[#94a3b8]">Implementações bem-sucedidas</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-8 relative overflow-hidden shadow-xl shadow-[#4f46e5]/5 h-[200px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                <div className="flex flex-col items-center justify-center h-full relative z-10">
                  <div className="text-4xl font-bold text-[#60a5fa] drop-shadow-glow">93%</div>
                  <p className="text-xl font-semibold">Satisfação</p>
                  <p className="text-center text-sm text-[#94a3b8]">Índice de satisfação dos usuários</p>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-6">
              <h3 className="text-2xl font-bold mb-10 text-center">
                Empresas referência de mercado que confiam no GIMB
              </h3>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-6 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#4f46e5]/10 transition-all duration-300 shadow-xl shadow-[#4f46e5]/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 h-16 flex items-center justify-center">
                      <Image
                        src="/images/raizen-logo.png"
                        alt="Raízen Logo"
                        width={200}
                        height={80}
                        className="w-auto h-full object-contain drop-shadow-md"
                      />
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-lg font-bold mb-2">Raízen</h4>
                      <p className="text-sm text-[#94a3b8] mb-4">
                        Uma das maiores empresas de energia do mundo, referência em bioenergia e líder na produção de
                        etanol de cana-de-açúcar, com presença global e atuação em toda a cadeia de valor do setor energético.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-6 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#4f46e5]/10 transition-all duration-300 shadow-xl shadow-[#4f46e5]/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 h-16 flex items-center justify-center">
                      <Image
                        src="/images/atvos-logo.png"
                        alt="Atvos Logo"
                        width={200}
                        height={80}
                        className="w-auto h-full object-contain drop-shadow-md"
                      />
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-lg font-bold mb-2">Atvos</h4>
                      <p className="text-sm text-[#94a3b8] mb-4">
                        Uma das principais produtoras de etanol e energia renovável do Brasil, com forte atuação no
                        agronegócio e destaque pelo compromisso com inovação e sustentabilidade em larga escala.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-6 relative overflow-hidden group hover:shadow-2xl hover:shadow-[#4f46e5]/10 transition-all duration-300 shadow-xl shadow-[#4f46e5]/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 h-16 flex items-center justify-center">
                      <Image
                        src="/images/solinftec-logo.png"
                        alt="Solinftec Logo"
                        width={240}
                        height={80}
                        className="w-auto h-full object-contain drop-shadow-md"
                      />
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-lg font-bold mb-2">Solinftec</h4>
                      <p className="text-sm text-[#94a3b8] mb-4">
                        Líder global em soluções de automação e inteligência artificial para o agronegócio, com presença
                        em diversos países e tecnologia aplicada em milhões de hectares agrícolas.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Quem Somos */}
        <section id="quem-somos" className="w-full py-12 md:py-24 lg:py-32 bg-[#070b14] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4f46e5]/20 px-3 py-1 text-sm text-[#818cf8] shadow-lg shadow-[#4f46e5]/5">
                  Quem Somos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] drop-shadow-sm">
                  Evoluindo Pessoas e Inovando Processos
                </h2>
                <p className="max-w-[900px] text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Localizada em Araçatuba, interior de São Paulo, o GIMB nasceu da necessidade de transformar a gestão
                  de processos de inspeção e qualidade no setor agroindustrial.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 grid-cols-1 lg:grid-cols-2">
              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 shadow-lg shadow-[#4f46e5]/10">
                  <Zap className="h-7 w-7 text-[#818cf8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Inovação ágil</h3>
                  <p className="text-[#94a3b8]">
                    Desenvolvemos soluções adaptáveis que evoluem com as necessidades do agronegócio brasileiro.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 shadow-lg shadow-[#4f46e5]/10">
                  <Globe className="h-7 w-7 text-[#818cf8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Excelência técnica</h3>
                  <p className="text-[#94a3b8]">
                    Combinamos Angular Material e Kotlin para criar plataformas robustas e intuitivas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 shadow-lg shadow-[#4f46e5]/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[#818cf8]">
                    <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49"></path>
                    <path d="M13.41 10.59c-.39-.39-.39-1.03 0-1.42.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Parceria estratégica</h3>
                  <p className="text-[#94a3b8]">
                    Trabalhamos lado a lado com nossos clientes, entendendo suas operações agrícolas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 shadow-lg shadow-[#4f46e5]/10">
                  <Shield className="h-7 w-7 text-[#818cf8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Transparência e segurança</h3>
                  <p className="text-[#94a3b8]">
                    Garantimos proteção total dos dados com criptografia e compliance LGPD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contexto de Mercado */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#080d17] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#4f46e5]/10 via-transparent to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-[#60a5fa]/5 via-transparent to-transparent blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4f46e5]/20 px-3 py-1 text-sm text-[#818cf8] shadow-lg shadow-[#4f46e5]/5">
                  Contexto de Mercado
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] drop-shadow-sm">
                  Desafios do Agronegócio
                </h2>
                <p className="max-w-[900px] text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entendemos os desafios específicos do setor e oferecemos soluções eficientes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">R$ 2,8 mi/ano em custos com paradas não programadas</h4>
                    <p className="mt-1 text-[#94a3b8] text-sm">
                      Perdas significativas que impactam diretamente a produtividade e o resultado financeiro.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Dados fragmentados entre campo, usina e gestão</h4>
                    <p className="mt-1 text-[#94a3b8] text-sm">
                      Informações isoladas que dificultam a tomada de decisão integrada e ágil.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">15% de perdas por falhas em inspeções manuais</h4>
                    <p className="mt-1 text-[#94a3b8] text-sm">
                      Processos sujeitos a erros humanos que comprometem a qualidade e segurança.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-6 rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] relative overflow-hidden shadow-xl shadow-[#4f46e5]/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold">Como o GIMB Resolve</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#60a5fa] mt-0.5 shrink-0" />
                      <p className="text-[#94a3b8]">
                        Transformamos processos feitos em papel e planilhas, para checklists digitais, reduzindo 40% do tempo.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#60a5fa] mt-0.5 shrink-0" />
                      <p className="text-[#94a3b8]">
                        Coleta de dados de Inspeções de pneus no conceito 2D e 3D.
                      </p>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#60a5fa] mt-0.5 shrink-0" />
                      <p className="text-[#94a3b8]">
                        Nosso monitoramento preditivo integrado a ERP reduz em 30% as paradas por falhas em material rodante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Plataforma */}
        <section id="plataforma" className="w-full py-12 md:py-24 lg:py-32 bg-[#070b14] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4f46e5]/20 px-3 py-1 text-sm text-[#818cf8] shadow-lg shadow-[#4f46e5]/5">
                  Nossa Plataforma
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] drop-shadow-sm">
                  Solução Completa para o Agronegócio e Indústria
                </h2>
                <p className="max-w-[900px] text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma foi desenvolvida pensando nas necessidades específicas desses setores.
                </p>
              </div>
            </div>

            <div className="grid gap-8 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl font-bold">Tecnologia de Ponta</h3>
                <div className="grid gap-6 sm:grid-cols-2">

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 shadow-lg shadow-[#4f46e5]/10">
                      <Laptop className="h-6 w-6 text-[#60a5fa]" />
                    </div>
                    <div>
                      <h4 className="font-bold">Frontend</h4>
                      <p className="text-sm text-[#94a3b8]">Angular Material (Web) + Kotlin (Android)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 shadow-lg shadow-[#4f46e5]/10">
                      <Database className="h-6 w-6 text-[#60a5fa]" />
                    </div>
                    <div>
                      <h4 className="font-bold">Backend</h4>
                      <p className="text-sm text-[#94a3b8]">Cloud AWS com bancos otimizados para Big Data</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 shadow-lg shadow-[#4f46e5]/10">
                      <Cpu className="h-6 w-6 text-[#60a5fa]" />
                    </div>
                    <div>
                      <h4 className="font-bold">Integrações</h4>
                      <p className="text-sm text-[#94a3b8]">APIs REST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 shadow-lg shadow-[#4f46e5]/10">
                      <Shield className="h-6 w-6 text-[#60a5fa]" />
                    </div>
                    <div>
                      <h4 className="font-bold">Segurança</h4>
                      <p className="text-sm text-[#94a3b8]">Criptografia, compliance LGPD</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] relative overflow-hidden shadow-xl shadow-[#4f46e5]/5 mt-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                  <div className="relative z-10">
                    <p className="text-[#94a3b8]">
                      Nossa plataforma oferece operação offline-first com sincronização automática, dashboards com KPIs
                      personalizáveis e análise preditiva para antecipação de falhas. Toda a arquitetura foi
                      desenvolvida pensando nas necessidades específicas do agronegócio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/10 to-transparent rounded-2xl blur-xl"></div>
                <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-2xl border border-[#1e293b] shadow-2xl shadow-[#4f46e5]/10">
                  <Image src="/images/mobile-app.png" alt="GIMB Platform" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/50 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/10 to-transparent opacity-30"></div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 py-6 md:grid-cols-3">

  {/* Bloco 1 — Inspeção de Qualidade */}
  <div className="bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] text-white overflow-hidden relative shadow-xl shadow-[#4f46e5]/5 rounded-lg p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
    <div className="relative z-10">
      <h3 className="text-lg font-bold text-white mb-2">Inspeção de Qualidade</h3>
      <p className="text-[#94a3b8] mb-4">Ferramentas completas para padronização, execução e gestão de inspeções</p>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-[#60a5fa]" />Checklists personalizados</li>
        <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-[#60a5fa]" />Registro fotográfico</li>
        <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-[#60a5fa]" />Relatórios automáticos</li>
      </ul>
    </div>
  </div>

  {/* Bloco 2 — Gestão de Material Rodante */}
  <div className="bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] text-white overflow-hidden relative shadow-xl shadow-[#4f46e5]/5 rounded-lg p-6">
    <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
    <div className="relative z-10">
      <h3 className="text-lg font-bold text-white mb-2">Gestão de Material Rodante</h3>
      <p className="text-[#94a3b8] mb-4">Gerenciamento de máquinas que atuam com material rodante</p>
      <ul className="space-y-2 text-sm">
        <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-[#60a5fa]" />Monitoramento detalhado</li>
        <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-[#60a5fa]" />Manutenções preventivas</li>
        <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-[#60a5fa]" />Alertas automáticos</li>
      </ul>
    </div>
  </div>

{/* Bloco 3 – Gestão de Pneus */}
<div className="bg-gradient-to-b ... p-6">
  <div className="absolute inset-0 ..."></div>
  <div className="relative z-10">
    <h3 className="...">Gestão de Pneus</h3>
    <p className="...">Controle eficiente de pneus de veículos leves e pesados</p>
    <ul className="space-y-2 text-sm">
      <li className="flex items-center"> ... </li>
      <li className="flex items-center"> ... </li>
      <li className="flex items-center"> ... </li>
    </ul>
  </div>
</div>

        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="w-full py-12 md:py-24 lg:py-32 bg-[#080d17] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#4f46e5]/10 via-transparent to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-[#60a5fa]/5 via-transparent to-transparent blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4f46e5]/20 px-3 py-1 text-sm text-[#818cf8] shadow-lg shadow-[#4f46e5]/5">
                  Diferenciais
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] drop-shadow-sm">
                  Por que escolher o GIMB?
                </h2>
                <p className="max-w-[900px] text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma foi desenvolvida pensando nas necessidades específicas desses setores.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[#1e293b]">
                      <th className="py-3 px-4 text-left text-[#818cf8]">Critério</th>
                      <th className="py-3 px-4 text-left text-[#818cf8]">GIMB</th>
                      <th className="py-3 px-4 text-left text-[#818cf8]">Concorrentes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#1e293b]">
                      <td className="py-3 px-4">Especialização</td>
                      <td className="py-3 px-4 text-[#60a5fa]">Foco em Agronegócio e Indústria</td>
                      <td className="py-3 px-4 text-[#94a3b8]">Soluções genéricas</td>
                    </tr>
                    <tr className="border-b border-[#1e293b]">
                      <td className="py-3 px-4">Customização</td>
                      <td className="py-3 px-4 text-[#60a5fa]">Adaptação a workflows específicos</td>
                      <td className="py-3 px-4 text-[#94a3b8]">Pacotes padronizados</td>
                    </tr>
                    <tr className="border-b border-[#1e293b]">
                      <td className="py-3 px-4">Integração</td>
                      <td className="py-3 px-4 text-[#60a5fa]">APIs REST e sistemas legados</td>
                      <td className="py-3 px-4 text-[#94a3b8]">Integrações limitadas</td>
                    </tr>
                    <tr className="border-b border-[#1e293b]">
                      <td className="py-3 px-4">Análise de Dados</td>
                      <td className="py-3 px-4 text-[#60a5fa]">BI avançado com predição</td>
                      <td className="py-3 px-4 text-[#94a3b8]">Relatórios básicos</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Versão mobile (cards) */}
              <div className="md:hidden space-y-6">
                <div className="rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-6 relative overflow-hidden shadow-xl shadow-[#4f46e5]/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-3">Especialização</h3>
                    <div className="flex items-start space-x-3 mb-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4f46e5]/20 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-[#60a5fa]" />
                      </div>
                      <p className="text-sm text-[#94a3b8]">Foco em Agronegócio e Indústria</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4f46e5]/20 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-[#60a5fa]" />
                      </div>
                      <p className="text-sm text-[#94a3b8]">Soluções genéricas da concorrência</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-6 relative overflow-hidden shadow-xl shadow-[#4f46e5]/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-3">Customização</h3>
                    <div className="flex items-start space-x-3 mb-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4f46e5]/20 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-[#60a5fa]" />
                      </div>
                      <p className="text-sm text-[#94a3b8]">Adaptação a workflows específicos</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#4f46e5]/20 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-[#60a5fa]" />
                      </div>
                      <p className="text-sm text-[#94a3b8]">Pacotes padronizados da concorrência</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] relative overflow-hidden shadow-xl shadow-[#4f46e5]/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-white">Vantagem Competitiva</h3>
                  <p className="text-[#94a3b8]">
                    Nosso foco nos setores do Agronegócio e Indústria nos permite oferecer soluções verdadeiramente
                    especializadas, com retorno de investimento mais rápido e suporte técnico superior, garantindo que
                    nossos clientes obtenham o máximo valor da plataforma.
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Especialistas em agronegócio</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Tecnologia de ponta</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Resultados comprovados</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Financeiro</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Agenda</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Formulários</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Projetos</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Inventário</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5]/30 to-[#4f46e5]/10 text-[#818cf8] shadow-lg shadow-[#4f46e5]/10">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span>Registro de Atividades</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metodologia de Implantação */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#080d17] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent"></div>
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#4f46e5]/10 via-transparent to-transparent blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-[#60a5fa]/5 via-transparent to-transparent blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4f46e5]/20 px-3 py-1 text-sm text-[#818cf8] shadow-lg shadow-[#4f46e5]/5">
                  Metodologia
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] drop-shadow-sm">
                  Metodologia de Implantação
                </h2>
                <p className="max-w-[900px] text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa abordagem estruturada garante uma implementação eficiente e resultados rápidos.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="relative">
                {/* Linha de conexão */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#4f46e5]/80 via-[#4f46e5]/50 to-[#4f46e5]/30 transform -translate-x-1/2 md:hidden"></div>
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5]/30 via-[#4f46e5]/50 to-[#4f46e5]/30 transform -translate-y-1/2 hidden md:block"></div>

                <div className="grid gap-12 md:grid-cols-4 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4338ca] flex items-center justify-center shadow-lg shadow-[#4f46e5]/30 mb-4 relative z-20">
                      <span className="text-xl font-bold text-white">1</span>
                    </div>
                    <div className="bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] rounded-lg p-5 w-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent rounded-lg"></div>
                      <div className="relative">
                        <h3 className="text-xl font-bold mb-2 text-white">Diagnóstico</h3>
                        <p className="text-sm text-[#94a3b8]">
                          Análise detalhada dos processos atuais e identificação de oportunidades de melhoria.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4338ca] flex items-center justify-center shadow-lg shadow-[#4f46e5]/30 mb-4 relative z-20">
                      <span className="text-xl font-bold text-white">2</span>
                    </div>
                    <div className="bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] rounded-lg p-5 w-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent rounded-lg"></div>
                      <div className="relative">
                        <h3 className="text-xl font-bold mb-2 text-white">Configuração</h3>
                        <p className="text-sm text-[#94a3b8]">
                          Personalização da plataforma de acordo com as necessidades específicas do cliente.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4338ca] flex items-center justify-center shadow-lg shadow-[#4f46e5]/30 mb-4 relative z-20">
                      <span className="text-xl font-bold text-white">3</span>
                    </div>
                    <div className="bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] rounded-lg p-5 w-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent rounded-lg"></div>
                      <div className="relative">
                        <h3 className="text-xl font-bold mb-2 text-white">Treinamento</h3>
                        <p className="text-sm text-[#94a3b8]">
                          Capacitação completa da equipe para maximizar o uso da plataforma.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4338ca] flex items-center justify-center shadow-lg shadow-[#4f46e5]/30 mb-4 relative z-20">
                      <span className="text-xl font-bold text-white">4</span>
                    </div>
                    <div className="bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] rounded-lg p-5 w-full relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent rounded-lg"></div>
                      <div className="relative">
                        <h3 className="text-xl font-bold mb-2 text-white">Acompanhamento</h3>
                        <p className="text-sm text-[#94a3b8]">
                          Suporte contínuo e otimizações baseadas em métricas de desempenho.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] rounded-lg p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-center">Tempo de Implementação</h3>
                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center justify-center p-6 bg-[#0c1425] rounded-lg border border-[#1e293b] relative overflow-hidden group hover:shadow-xl hover:shadow-[#4f46e5]/10 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-[#60a5fa] mb-2 text-center">1</div>
                        <p className="text-center font-medium">Dia</p>
                        <p className="text-center text-sm text-[#94a3b8] mt-2">Projetos pequenos</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 bg-[#0c1425] rounded-lg border border-[#1e293b] relative overflow-hidden group hover:shadow-xl hover:shadow-[#4f46e5]/10 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-[#60a5fa] mb-2 text-center">2-3</div>
                        <p className="text-center font-medium">Dias</p>
                        <p className="text-center text-sm text-[#94a3b8] mt-2">Projetos médios</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 bg-[#0c1425] rounded-lg border border-[#1e293b] relative overflow-hidden group hover:shadow-xl hover:shadow-[#4f46e5]/10 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10">
                        <div className="text-3xl font-bold text-[#60a5fa] mb-2 text-center">7</div>
                        <p className="text-center font-medium">Dias</p>
                        <p className="text-center text-sm text-[#94a3b8] mt-2">Projetos complexos</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-[#0c1425]/50 rounded-lg border border-[#1e293b]">
                    <p className="text-[#94a3b8]">
                      Nossa metodologia ágil permite entregas incrementais, com resultados visíveis desde o primeiro dia
                      de implementação. Trabalhamos com sprints diários, garantindo transparência e adaptabilidade
                      durante todo o processo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-[#070b14] relative">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4f46e5]/20 px-3 py-1 text-sm text-[#818cf8] shadow-lg shadow-[#4f46e5]/5">
                  Contato
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#94a3b8] drop-shadow-sm">
                  Pronto para transformar sua operação?
                </h2>
                <p className="max-w-[900px] text-[#94a3b8] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre em contato conosco para agendar uma demonstração personalizada.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col space-y-6 rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-8 relative overflow-hidden shadow-xl shadow-[#4f46e5]/5 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-center mb-6">
                      <Image src="/images/logo.png" alt="GIMB Logo" width={180} height={60} className="w-auto h-16" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white">Fale Conosco</h3>
                    <p className="text-sm text-[#94a3b8] mb-4">Entre em contato através do formulário abaixo.</p>

                    <form className="space-y-4 flex-grow">
                      <input type="text" placeholder="Nome" className="w-full p-4 rounded-lg bg-[#0f172a] border border-[#1e293b] text-[#94a3b8]" />
                      <input type="email" placeholder="Email" className="w-full p-4 rounded-lg bg-[#0f172a] border border-[#1e293b] text-[#94a3b8]" />
                      <textarea placeholder="Mensagem" className="w-full p-4 rounded-lg bg-[#0f172a] border border-[#1e293b] text-[#94a3b8]"></textarea>

                      <Button size="lg" className="bg-gradient-to-r from-[#4f46e5] to-[#4338ca] hover:from-[#4338ca] hover:to-[#3730a3] text-white shadow-lg shadow-[#4f46e5]/20">
                        Enviar
                      </Button>
                    </form>
                  </div>
                </div>

                <div className="flex flex-col space-y-6 rounded-lg bg-gradient-to-b from-[#0f172a] to-[#070b14] border border-[#1e293b] p-8 relative overflow-hidden shadow-xl shadow-[#4f46e5]/5 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/5 to-transparent"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-6 text-white">Localização</h3>

                    <div className="relative w-full h-[300px] overflow-hidden rounded-lg border border-[#1e293b] shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.9957952333277!2d-50.43345232456369!3d-20.51233585624799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490ca3285a2ad19%3A0x4e8c1c63e2e3f1b9!2sAv.%20Jos%C3%A9%20Ferreira%20Batista%2C%202857%20-%20Ipanema%2C%20Ara%C3%A7atuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1684867420279!5m2!1spt-BR!2sbr"
                        width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="rounded-lg">
                      </iframe>
                    </div>

                    <div className="mt-6 space-y-3 flex-grow">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-[#60a5fa]" />
                        <span>Araçatuba, SP</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="h-5 w-5 text-[#60a5fa]">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-[#94a3b8]">Av. José Ferreira Batista 2857, Ipanema</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-[#60a5fa]" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          className="h-5 w-5 text-[#25D366]">
                          <path d="M3 21l1.9-5.7a8.5 8.5 0 113.8 3.8z"></path>
                        </svg>
                        <span>(16) 99789-8401</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-[#1e293b] bg-[#070b14] py-6 relative z-10">
          <div className="container flex flex-col items-center justify-center">
            <Image src="/images/logo.png" alt="GIMB Logo" width={100} height={32} className="h-8 w-auto mb-4" />
            <div className="text-center text-sm text-[#94a3b8]">
              <p>© 2025 GIMB Desenvolvimento de Softwares e Aplicativos Ltda.</p>
              <p>CNPJ: 33.308.761/0001-64</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  )
}
