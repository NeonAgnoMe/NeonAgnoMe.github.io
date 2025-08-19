"use client"

import type React from "react"

import { Animator, Text } from "@arwes/react"
import {
  Mail,
  MapPin,
  Github,
  Calendar,
  Award,
  Shield,
  Code,
  Cloud,
  Database,
  Zap,
  Terminal,
  Cpu,
  Heart,
  Home,
  Dog,
  Users,
} from "lucide-react"
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
  <span className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable">
    {children}
  </span>
)

export default function ResumePage() {
  const [headerAnimate, setHeaderAnimate] = useState(false)
  const [activeTab, setActiveTab] = useState<"resume" | "bio">("resume")

  useEffect(() => {
    setHeaderAnimate(true)
  }, [])

  return (
    <div className="min-h-screen bg-background arwes-scan-lines">
      <nav className="container mx-auto px-6 max-w-4xl pt-8 pb-4">
        <div className="flex justify-between items-start">
          <button
            onClick={() => setActiveTab("resume")}
            className={`arwes-button arwes-tab px-8 py-3 font-mono uppercase tracking-wider transition-all ${
              activeTab === "resume"
                ? "bg-accent/20 text-accent border-accent"
                : "text-foreground/60 border-foreground/30"
            }`}
          >
            <Terminal className="w-4 h-4 mr-2 arwes-icon" />
            Resume
          </button>
          <button
            onClick={() => setActiveTab("bio")}
            className={`arwes-button arwes-tab px-8 py-3 font-mono uppercase tracking-wider transition-all ${
              activeTab === "bio" ? "bg-accent/20 text-accent border-accent" : "text-foreground/60 border-foreground/30"
            }`}
          >
            <Heart className="w-4 h-4 mr-2 arwes-icon" />
            Bio
          </button>
        </div>
      </nav>

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
                  <Github className="w-4 h-4 arwes-icon" />
                  <a
                    href="https://github.com/NeonAgnoMe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arwes-clickable"
                  >
                    <Text>github.com/NeonAgnoMe</Text>
                  </a>
                </div>
              </Animator>
            </div>
          </div>
        </div>
      </header>

      {activeTab === "resume" && (
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
                        <span
                          key={skill}
                          className="arwes-badge inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable"
                        >
                          {skill}
                        </span>
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
                        <span
                          key={skill}
                          className="arwes-badge inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable"
                        >
                          {skill}
                        </span>
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
                        <span
                          key={skill}
                          className="arwes-badge inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable"
                        >
                          {skill}
                        </span>
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
                        <span
                          key={skill}
                          className="arwes-badge inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable"
                        >
                          {skill}
                        </span>
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
                        <span
                          key={skill}
                          className="arwes-badge inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable"
                        >
                          {skill}
                        </span>
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
                        <span
                          key={skill}
                          className="arwes-badge inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable"
                        >
                          {skill}
                        </span>
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
                  <div className="mb-4">
                    <Text className="font-mono text-2xl font-bold text-accent arwes-text-glow">
                      &gt; Professional Experience
                    </Text>
                  </div>
                </Animator>
              </div>

              <div className="relative mb-12">
                {/* Animated border frame */}
                <div className="absolute inset-0 border-2 border-accent/30 rounded-lg"></div>
                <div className="absolute inset-0 border border-accent/60 rounded-lg animate-pulse"></div>

                {/* Status indicator */}
                <div className="absolute -top-3 left-6 bg-background px-4 py-1 border border-accent rounded-full">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full arwes-pulse"></div>
                    <Animator activate={true}>
                      <Text className="font-mono text-xs text-accent uppercase tracking-wider">ACTIVE STATUS</Text>
                    </Animator>
                  </div>
                </div>

                <div className="p-8 pt-12">
                  <Animator activate={true}>
                    <div className="mb-6">
                      <Text className="font-mono text-2xl font-bold text-accent arwes-text-flicker mb-2">
                        &gt;&gt; FREELANCE SENIOR FULL-STACK ENGINEER &amp; SECURITY CONSULTANT
                      </Text>
                      <div className="flex items-center gap-4 mb-4">
                        <Text className="font-mono text-sm text-foreground/70 uppercase tracking-wider">
                          Self-employed | Sacramento, CA | 2020 — Present
                        </Text>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-accent arwes-glow" />
                          <Text className="font-mono text-xs text-accent uppercase"></Text>
                        </div>
                      </div>

                      <div className="w-full h-1 bg-foreground/20 rounded-full overflow-hidden mb-6">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-primary animate-pulse rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </Animator>

                  <div className="space-y-4">
                    {[
                      "Lead architectural designs and deliver full-stack product features from prototype to production: frontend (React/TypeScript), backend services (Node.js / Go), database schema, and deployment automation.",
                      "Design and implement cloud-native infrastructure using Terraform and Kubernetes (GKE/EKS). Establish repeatable CI/CD pipelines (GitHub Actions/GitLab CI) and automated testing to accelerate safe releases.",
                      "Conduct high-impact security engagements: threat modeling, prioritized remediation tickets, and secure-coding workshops embedded into client sprints.",
                      "Implement observability and SLOs: integrated metrics, distributed tracing, and alerting to reduce mean-time-to-detection for production incidents.",
                      "Mentor client engineering teams: code review best practices, incremental architecture improvements, and onboarding playbooks for on-call rotations.",
                    ].map((item, index) => (
                      <Animator key={index} activate={true}>
                        <div className="flex items-start gap-4 group">
                          <div className="flex-shrink-0 mt-2">
                            <div className="w-2 h-2 bg-accent rounded-full arwes-pulse group-hover:scale-150 transition-transform"></div>
                          </div>
                          <Text className="font-mono text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                            {item}
                          </Text>
                        </div>
                      </Animator>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-accent/30">
                    <Animator activate={true}>
                      <Text className="font-mono text-sm text-accent uppercase tracking-wider mb-4">
                        &gt; Key Achievements
                      </Text>
                    </Animator>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "50+ Projects Delivered",
                        "Zero Security Incidents",
                        "99.9% Uptime SLA",
                        "15+ Teams Mentored",
                      ].map((achievement, index) => (
                        <Animator key={index} activate={true}>
                          <div className="flex items-center gap-2 px-3 py-2 border border-accent/50 bg-accent/10 rounded arwes-clickable">
                            <Shield className="w-3 h-3 text-accent" />
                            <Text className="font-mono text-xs text-accent uppercase tracking-wider">
                              {achievement}
                            </Text>
                          </div>
                        </Animator>
                      ))}
                    </div>
                  </div>
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
                        <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 flex-shrink-0"></div>
                        <Text className="font-mono text-sm text-foreground/60">{item}</Text>
                      </div>
                    </Animator>
                  ))}
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
      )}

      {activeTab === "bio" && (
        <main className="container mx-auto px-6 py-12 max-w-4xl space-y-12">
          <section>
            <ArwesCard delay={200}>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-accent arwes-glow" />
                <Animator activate={true}>
                  <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">&gt; Personal Bio</Text>
                </Animator>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-lg blur-sm"></div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me.png-wABEah65qluZV65BpHO6ki0rkYvxVo.jpeg"
                      alt="Alexa Nguyen portrait"
                      className="relative w-64 h-80 object-cover rounded-lg border-2 border-accent/50 arwes-frame arwes-clickable"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <Animator activate={true}>
                    <Text className="text-lg leading-relaxed font-mono text-foreground/90 mb-6">
                      Hey there! I'm a Vietnamese-American who grew up learning electronics repair in my mom's repair
                      shop. Had a fun little accident with a damaged capacitor as a kid that messed with the vision in
                      one eye. But honestly, It has just made me more patient and detail-oriented with my work.
                    </Text>
                  </Animator>
                  <Animator activate={true}>
                    <Text className="text-lg leading-relaxed font-mono text-foreground/90">
                      At 17, I found my people in a local coding club where I actually learned practical software and
                      security skills (way better than any bootcamp tbh). These days I work as a freelancer based out of
                      Sacramento, balancing client projects with volunteering at the neighborhood clinic and being
                      completely owned by my rescue dog, Mochi.
                    </Text>
                  </Animator>
                </div>
              </div>
            </ArwesCard>
          </section>

          <section>
            <ArwesCard delay={400}>
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-accent arwes-glow" />
                <Animator activate={true}>
                  <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">
                    &gt; Personal Details
                  </Text>
                </Animator>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Animator activate={true}>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 arwes-glow"></div>
                      <div>
                        <Text className="font-mono text-sm text-accent uppercase tracking-wider">Nickname</Text>
                        <Text className="font-mono text-sm text-foreground/80">
                          Friends call me "Lex" - started in college and stuck
                        </Text>
                      </div>
                    </div>
                  </Animator>
                  <Animator activate={true}>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 arwes-glow"></div>
                      <div>
                        <Text className="font-mono text-sm text-accent uppercase tracking-wider">My Setup</Text>
                        <Text className="font-mono text-sm text-foreground/80">
                          Custom built workstation with dual 4K monitors
                        </Text>
                        <Text className="font-mono text-xs text-foreground/60">
                          AMD Ryzen 9 5950X, 64GB RAM, RTX 4080, mechanical keyboard (Cherry MX Blues), Wacom tablet for
                          design work
                        </Text>
                      </div>
                    </div>
                  </Animator>
                </div>
                <div className="space-y-4">
                  <Animator activate={true}>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 arwes-glow"></div>
                      <div>
                        <Text className="font-mono text-sm text-accent uppercase tracking-wider">Hobbies</Text>
                        <Text className="font-mono text-sm text-foreground/80">
                          Bouldering, parkour training, analog photography
                        </Text>
                        <Text className="font-mono text-xs text-foreground/60">
                          Regular at the local climbing gym, love the parkour community here, still shoot film because
                          I'm pretentious like that
                        </Text>
                      </div>
                    </div>
                  </Animator>
                  <Animator activate={true}>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 arwes-glow"></div>
                      <div>
                        <Text className="font-mono text-sm text-accent uppercase tracking-wider">My Look</Text>
                        <Text className="font-mono text-sm text-foreground/80">
                          Hyprland with custom rice and tiling workflow
                        </Text>
                        <Text className="font-mono text-xs text-foreground/60 mb-2">
                          Catppuccin Mocha theme, Waybar with custom modules, Rofi launcher, animated wallpapers with
                          swww, keybinds optimized for productivity
                        </Text>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <a
                            href="https://github.com/catppuccin/hyprland"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable hover:bg-accent/20 transition-colors"
                          >
                            Catppuccin Theme
                          </a>
                          <a
                            href="https://github.com/Alexays/Waybar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable hover:bg-accent/20 transition-colors"
                          >
                            Waybar
                          </a>
                          <a
                            href="https://github.com/davatorium/rofi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable hover:bg-accent/20 transition-colors"
                          >
                            Rofi
                          </a>
                          <a
                            href="https://github.com/Horus645/swww"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable hover:bg-accent/20 transition-colors"
                          >
                            SWWW
                          </a>
                          <a
                            href="https://github.com/hyprwm/Hyprland"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable hover:bg-accent/20 transition-colors"
                          >
                            Hyprland
                          </a>
                        </div>
                      </div>
                    </div>
                  </Animator>
                </div>
              </div>
            </ArwesCard>
          </section>

          <section>
            <ArwesCard delay={600}>
              <div className="flex items-center gap-3 mb-6">
                <Dog className="w-8 h-8 text-accent arwes-glow" />
                <Animator activate={true}>
                  <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">
                    &gt; Mochi - My Everything
                  </Text>
                </Animator>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-lg blur-sm"></div>
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mochi.png-muBgpva1wwP1yFqQUKH0kxKpW5cpdG.jpeg"
                      alt="Mochi, Alexa's rescue dog"
                      className="relative w-64 h-64 object-cover rounded-lg border-2 border-accent/50 arwes-frame arwes-clickable"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <Animator activate={true}>
                    <Text className="text-lg leading-relaxed font-mono text-foreground/90 mb-4">
                      Okay real talk - Mochi is literally the center of my universe and yes, explains why I have some
                      embarrassingly nostalgic passwords that I really should change but won't. This rescue pup is my
                      love, my emotional support system, and honestly the best thing that ever happened to me.
                    </Text>
                  </Animator>
                  <div className="bg-accent/10 border border-accent/30 p-4 rounded">
                    <Animator activate={true}>
                      <Text className="font-mono text-sm text-accent uppercase tracking-wider mb-2">Fair Warning</Text>
                    </Animator>
                    <Animator activate={true}>
                      <Text className="font-mono text-sm text-foreground/80">
                        I'm emotionally soft for animals and kids, which means I can get totally distracted during work
                        calls if there's a dog or baby in the background. Sorry not sorry! 🐕
                      </Text>
                    </Animator>
                  </div>
                </div>
              </div>
            </ArwesCard>
          </section>

          <section>
            <ArwesCard delay={800}>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-accent arwes-glow" />
                <Animator activate={true}>
                  <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">
                    &gt; How I Give Back
                  </Text>
                </Animator>
              </div>
              <div className="space-y-6">
                <div>
                  <Animator activate={true}>
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider mb-3">
                      Community Volunteering
                    </Text>
                  </Animator>
                  <div className="space-y-2">
                    {[
                      "I teach coding workshops at the local community center for underrepresented youth",
                      "Help maintain the tech infrastructure for a few local nonprofits (pro bono obvs)",
                      "Volunteer photographer for animal rescue events - combining two things I love",
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

                <div>
                  <Animator activate={true}>
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider mb-3">
                      People Skills (The Real Ones)
                    </Text>
                  </Animator>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Active Listening",
                      "Technical Translation",
                      "Mentoring Juniors",
                      "Cross-team Collaboration",
                      "Client Communication",
                      "Workshop Leadership",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="arwes-badge inline-block px-3 py-1 text-xs font-mono uppercase tracking-wider border border-accent/50 bg-accent/10 text-accent rounded-sm arwes-clickable"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ArwesCard>
          </section>

          <section>
            <ArwesCard delay={1000}>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-accent arwes-glow" />
                <Animator activate={true}>
                  <Text className="font-mono text-2xl uppercase tracking-wider arwes-text-glow">
                    &gt;My Strengths & Weaknesses
                  </Text>
                </Animator>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Animator activate={true}>
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider mb-3">
                      What I'm Good At
                    </Text>
                  </Animator>
                  <div className="space-y-2">
                    {[
                      "Breaking down complex problems into manageable pieces",
                      "Staying calm under pressure and tight deadlines",
                      "Building genuine relationships with clients and teammates",
                      "Learning new technologies quickly when projects demand it",
                      "Giving constructive feedback without being a jerk about it",
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
                <div>
                  <Animator activate={true}>
                    <Text className="font-mono text-lg text-accent uppercase tracking-wider mb-3">
                      Where I Struggle
                    </Text>
                  </Animator>
                  <div className="space-y-2">
                    {[
                      "Can get too perfectionist with code architecture sometimes",
                      "Struggle with saying no to interesting side projects",
                      "Not great at self-promotion or networking events",
                      "Tend to over-engineer solutions when simple would work fine",
                    ].map((item, index) => (
                      <Animator key={index} activate={true}>
                        <div className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 flex-shrink-0"></div>
                          <Text className="font-mono text-sm text-foreground/60">{item}</Text>
                        </div>
                      </Animator>
                    ))}
                  </div>
                </div>
              </div>
            </ArwesCard>
          </section>
        </main>
      )}

      <footer className="border-t border-accent/30 py-8 mt-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Animator activate={true}>
            <Text className="font-mono text-sm text-foreground/50 uppercase tracking-wider">
              &copy; 2024 Alexa Nguyen | References Available Upon Request
            </Text>
          </Animator>
        </div>
      </footer>
    </div>
  )
}
