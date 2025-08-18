"use client"

import type React from "react"

import { Animator, Text } from "@arwes/react"
import { Mail, MapPin, Github, Calendar, Award, Shield, Code, Cloud, Database, Zap, Terminal, Cpu } from "lucide-react"
import { useState, useEffect } from "react"

const ArwesCard = ({
  children,
  className = "",
  delay = 0,
}: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Animator activate={animate}>
      <div className={`arwes-card arwes-frame p-6 ${className}`}>{children}</div>
    </Animator>
  )
}

const ArwesButton = ({
  children,
  href,
  className = "",
}: { children: React.ReactNode; href?: string; className?: string }) => {
  const content = <button className={`arwes-button ${className}`}>{children}</button>

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}

const ArwesBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm">
    {children}
  </span>
)

export default function ResumePage() {
  const [headerAnimate, setHeaderAnimate] = useState(false)

  useEffect(() => {
    setHeaderAnimate(true)
  }, [])

  return (
    <div className="min-h-screen bg-background arwes-scan-lines">
      <header className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center">
            <Animator activate={headerAnimate}>
              <Text className="font-mono text-5xl md:text-7xl font-bold mb-6 arwes-text-glow">ALEXA NGUYEN</Text>
            </Animator>

            <Animator activate={headerAnimate}>
              <Text className="text-xl md:text-2xl mb-8 text-accent font-mono uppercase tracking-wider">
                &gt; Senior Software Engineer &amp; Security-Focused Full-Stack Lead
              </Text>
            </Animator>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-mono">
              <Animator activate={headerAnimate}>
                <div className="flex items-center justify-center gap-2 text-accent arwes-pulse">
                  <MapPin className="w-4 h-4" />
                  <Text>Sacramento, CA</Text>
                </div>
              </Animator>

              <Animator activate={headerAnimate}>
                <div className="flex items-center justify-center gap-2 text-accent arwes-pulse">
                  <Mail className="w-4 h-4" />
                  <Text>alexanguyen314@gmail.com</Text>
                </div>
              </Animator>

              <Animator activate={headerAnimate}>
                <div className="flex items-center justify-center gap-2 text-accent arwes-pulse">
                  <Github className="w-4 h-4" />
                  <Text>github.com/NeonAgnoMe</Text>
                </div>
              </Animator>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl space-y-12">
        <section>
          <ArwesCard delay={200}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-accent arwes-glow" />
              <Animator activate={true}>
                <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">
                  &gt; Professional Summary
                </Text>
              </Animator>
            </div>
            <Animator activate={true}>
              <Text className="text-lg leading-relaxed font-mono text-foreground/90">
                Senior-level engineer combining product-focused full-stack development with security-first systems
                architecture. Experienced in designing and operating scalable microservices, cloud-native deployments,
                and high-throughput platforms. Proven track record delivering product features end-to-end, hardening
                systems against real-world threats, and mentoring engineers to adopt reliable engineering and security
                practices.
              </Text>
            </Animator>
          </ArwesCard>
        </section>

        <section>
          <ArwesCard delay={400}>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-accent arwes-glow" />
              <Animator activate={true}>
                <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">
                  &gt; Key Highlights &amp; Impact
                </Text>
              </Animator>
            </div>
            <div className="space-y-4">
              {[
                "Architected and deployed containerized microservice stacks with Kubernetes (GKE / EKS) and Terraform for reproducible infrastructure-as-code delivery.",
                "Led security-focused code reviews, threat models, and prioritized remediation programs that integrated into engineering sprints and CI pipelines.",
                "Built observability and SLO-based monitoring (Prometheus/Grafana + tracing) to improve incident detection and triage for client systems.",
                "Mentored and led small engineering teams and contractors: design reviews, RFCs, on-call playbooks, and post-incident retrospectives.",
              ].map((highlight, index) => (
                <Animator key={index} activate={true}>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 arwes-glow"></div>
                    <Text className="font-mono text-sm text-foreground/80">{highlight}</Text>
                  </div>
                </Animator>
              ))}
            </div>
          </ArwesCard>
        </section>

        <section>
          <ArwesCard delay={600}>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-accent arwes-glow" />
              <Animator activate={true}>
                <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">
                  &gt; Core Competencies
                </Text>
              </Animator>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-accent" />
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider">System Design</Text>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Microservices", "API Design", "Data Partitioning", "Caching Strategies"].map((skill) => (
                      <ArwesBadge key={skill}>{skill}</ArwesBadge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="w-5 h-5 text-accent" />
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider">Languages</Text>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Go", "TypeScript/Node.js", "Python", "React"].map((skill) => (
                      <ArwesBadge key={skill}>{skill}</ArwesBadge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="w-5 h-5 text-accent" />
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider">Cloud &amp; Infra</Text>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["GCP (BigQuery, GKE)", "AWS (S3, ECS/EKS)", "Terraform", "Kubernetes", "Helm"].map((skill) => (
                      <ArwesBadge key={skill}>{skill}</ArwesBadge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-5 h-5 text-accent" />
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider">Data Systems</Text>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Postgres", "Redis", "Kafka", "BigQuery/OLAP"].map((skill) => (
                      <ArwesBadge key={skill}>{skill}</ArwesBadge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider">Observability</Text>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Prometheus", "Grafana", "OpenTelemetry", "Sentry", "Datadog"].map((skill) => (
                      <ArwesBadge key={skill}>{skill}</ArwesBadge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider">
                      Security &amp; DevOps
                    </Text>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Threat Modeling", "OAuth2/OIDC", "WebAuthn", "CI/CD", "Canary Deployments"].map((skill) => (
                      <ArwesBadge key={skill}>{skill}</ArwesBadge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ArwesCard>
        </section>

        <section>
          <ArwesCard delay={800}>
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-accent arwes-glow" />
              <Animator activate={true}>
                <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">
                  &gt; Professional Experience
                </Text>
              </Animator>
            </div>

            <div className="space-y-8">
              {/* Current Role */}
              <div className="border-l-2 border-accent pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full arwes-glow"></div>
                <Animator activate={true}>
                  <div className="mb-4">
                    <Text className="font-mono text-xl font-bold text-accent arwes-text-flicker">
                      FREELANCE SENIOR FULL-STACK ENGINEER &amp; SECURITY CONSULTANT
                    </Text>
                    <Text className="font-mono text-sm text-foreground/70 uppercase tracking-wider">
                      Self-employed | Sacramento, CA | 2020 — Present
                    </Text>
                  </div>
                </Animator>

                <div className="space-y-3">
                  {[
                    "Lead architectural designs and deliver full-stack product features from prototype to production: frontend (React/TypeScript), backend services (Node.js / Go), database schema, and deployment automation.",
                    "Design and implement cloud-native infrastructure using Terraform and Kubernetes (GKE/EKS). Establish repeatable CI/CD pipelines (GitHub Actions/GitLab CI) and automated testing to accelerate safe releases.",
                    "Conduct high-impact security engagements: threat modeling, prioritized remediation tickets, and secure-coding workshops embedded into client sprints.",
                    "Implement observability and SLOs: integrated metrics, distributed tracing, and alerting to reduce mean-time-to-detection for production incidents.",
                    "Mentor client engineering teams: code review best practices, incremental architecture improvements, and onboarding playbooks for on-call rotations.",
                  ].map((item, index) => (
                    <Animator key={index} activate={true}>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0 arwes-pulse"></div>
                        <Text className="font-mono text-sm text-foreground/80">{item}</Text>
                      </div>
                    </Animator>
                  ))}
                </div>
              </div>

              {/* Previous Role */}
              <div className="border-l-2 border-foreground/30 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-foreground/30 rounded-full"></div>
                <Animator activate={true}>
                  <div className="mb-4">
                    <Text className="font-mono text-xl font-bold text-foreground/70">
                      CONTRACT DEVELOPER / SECURITY CONSULTANT
                    </Text>
                    <Text className="font-mono text-sm text-foreground/50 uppercase tracking-wider">
                      Various contracts | Remote / Sacramento-area | 2018 — 2020
                    </Text>
                  </div>
                </Animator>

                <div className="space-y-3">
                  {[
                    "Partnered with product teams to re-architect monolithic apps into service-oriented components, introducing CI-driven deployments and containerization.",
                    "Performed secure-architecture reviews for consumer-facing products and recommended API security, authentication flows, and abuse mitigation patterns.",
                    "Delivered client-facing training: secure dependency management, reproducible builds, and developer tooling to improve long-term maintainability.",
                  ].map((item, index) => (
                    <Animator key={index} activate={true}>
                      <div className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full mt-2 flex-shrink-0"></div>
                        <Text className="font-mono text-sm text-foreground/60">{item}</Text>
                      </div>
                    </Animator>
                  ))}
                </div>
              </div>
            </div>
          </ArwesCard>
        </section>

        <section>
          <ArwesCard delay={1200} className="text-center bg-accent/10">
            <Animator activate={true}>
              <Text className="font-mono text-3xl font-bold mb-6 arwes-text-glow uppercase tracking-wider">
                &gt; Initialize Contact Protocol
              </Text>
            </Animator>
            <Animator activate={true}>
              <Text className="font-mono mb-8 max-w-2xl mx-auto text-foreground/80">
                Interested in discussing your next project? I'm available for consulting engagements, technical
                leadership roles, and security architecture reviews.
              </Text>
            </Animator>
            <div className="flex flex-wrap justify-center gap-6">
              <ArwesButton href="mailto:alexanguyen314@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Establish Connection
              </ArwesButton>
              <ArwesButton href="https://github.com/NeonAgnoMe">
                <Github className="w-4 h-4 mr-2" />
                Access Repository
              </ArwesButton>
            </div>
          </ArwesCard>
        </section>
      </main>

      <footer className="border-t border-accent/30 py-8 mt-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Animator activate={true}>
            <Text className="font-mono text-sm text-foreground/50 uppercase tracking-wider">
              &copy; 2024 Alexa Nguyen | All Systems Operational | References Available Upon Request
            </Text>
          </Animator>
        </div>
      </footer>
    </div>
  )
}
