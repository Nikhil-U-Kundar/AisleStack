import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Terminal } from 'lucide-react'

const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 82 },
    { name: 'TypeScript', level: 85 },
    { name: 'SQL / NoSQL', level: 75 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind', level: 88 },
    { name: 'GraphQL', level: 65 },
    { name: 'Docker', level: 60 },
]

const stats = [
    { value: '01+', label: 'YEAR\nEXPERIENCE' },
    { value: '24/7', label: 'GIT\nACTIVITY' },
    { value: '50+', label: 'PRS\nMERGED' },
    { value: '100%', label: 'TEST\nCOVERAGE' },
]

export default function HomePage() {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setAnimated(true), 100)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className="px-4 pt-6 pb-6 space-y-10 fade-in-up">
            {/* Hero */}
            <section className="space-y-4">
                {/* Availability badge */}
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-glow opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-glow" />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-text-secondary uppercase">
                        Available for new opportunities
                    </span>
                </div>

                {/* Headline */}
                <div>
                    <h1 className="font-mono text-2xl font-bold leading-tight text-text-primary">
                        Engineering{' '}
                        <span className="text-accent-primary">High-Performance</span>{' '}
                        Technical Solutions.
                    </h1>
                </div>

                {/* Bio */}
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    I am a{' '}
                    <span className="text-text-primary font-semibold">Software Developer</span>{' '}
                    with 1 year of experience transforming complex architectural requirements
                    into scalable digital experiences. Specialized in building robust web
                    applications with a focus on system integrity and user-centric precision.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 pt-2">
                    <Link to="/projects">
                        <button className="cta-btn-primary w-full text-center tracking-[0.2em] text-xs uppercase">
                            VIEW PROJECTS
                        </button>
                    </Link>
                    <button className="cta-btn-ghost text-left flex items-center gap-2 text-xs uppercase tracking-widest">
                        <Download size={12} />
                        DOWNLOAD CV
                    </button>
                </div>
            </section>

            <div className="glow-line" />

            {/* Core Technologies */}
            <section>
                <div className="flex items-center gap-3 mb-5">
                    <Terminal size={12} className="text-accent-primary" />
                    <span className="section-label">Core Technologies</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, i) => (
                        <div key={skill.name} className="bg-bg-card border border-bg-border rounded p-3">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-xs text-text-primary">{skill.name}</span>
                                <span className="font-mono text-[10px] text-text-muted">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div
                                    className="skill-bar-fill"
                                    style={{ width: animated ? `${skill.level}%` : '0%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Philosophy */}
            <section className="scanline bg-bg-card border border-bg-border rounded-lg overflow-hidden">
                <div className="relative h-32 bg-gradient-to-br from-[#0d0d20] to-[#050508] flex flex-col justify-end p-4">
                    {/* Code rain effect */}
                    <div className="absolute inset-0 opacity-20 overflow-hidden font-mono text-[8px] text-accent-primary leading-3 p-2 pointer-events-none select-none">
                        {`const arch = new System();\narch.optimize();\narch.deploy().then(() => {\n  console.log('clean');\n});\n// zero-overhead\nasync function solve(n) {\n  const cache = new Map();\n  return dp(n, cache);\n}`}
                    </div>
                    <div className="relative z-10">
                        <p className="font-mono text-[10px] text-accent-primary tracking-widest uppercase mb-1">
                            PHILOSOPHY
                        </p>
                        <p className="font-mono text-sm text-text-secondary">
                            Clean Code. Efficient Systems.
                        </p>
                    </div>
                </div>
            </section>

            <div className="glow-line" />

            {/* Stats */}
            <section className="grid grid-cols-2 gap-x-8 gap-y-6">
                {stats.map((stat) => (
                    <div key={stat.value} className="stat-card">
                        <span className="font-mono text-3xl font-bold text-text-primary">
                            {stat.value}
                        </span>
                        <span className="font-mono text-[10px] text-text-muted tracking-widest whitespace-pre-line leading-4">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </section>

            <div className="glow-line" />

            {/* Footer */}
            <footer className="pb-4">
                <p className="font-mono text-[9px] text-text-muted tracking-[0.15em] mb-4">
                    © 2024 NIKHIL.DEV // ALL RIGHTS RESERVED
                </p>
                <div className="flex gap-6">
                    {['GITHUB', 'LINKEDIN', 'SOURCE'].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="font-mono text-[9px] text-text-muted tracking-widest hover:text-accent-primary transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    )
}
