import { useState } from 'react'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'Terminal Systems // Cloud Architecture',
        subtitle: 'Hours: Sys DB',
        tag: 'STAGE: V2 →',
        problem:
            'Legacy and broken architecture across distributed nodes suffered from high latency (250ms+) and frequent race conditions during high-concurrency event bursts, leading to occasional data drops (1-2 TPS) in hundreds of real-time trading environments.',
        solution:
            'Built a distributed, event-driven architecture using a Raft-backed consensus algorithm and used it to ensure 0-downtime rollouts. Managed a new role-based multi-channel serial online processor to reduce IPC overhead by 40%.',
        impact:
            'Load Balanced: Offered the zero-engine available online development and delivery at 99.3% uptime in live production data without downtime.',
        tech: ['Go', 'Kubernetes', 'Rust Engine'],
        role: 'FULL-STACK',
        github: '#',
        live: '#',
    },
    {
        id: 2,
        title: 'Project 2.0: Full-Stack LLM',
        subtitle: 'Cognitive Impact: Ok',
        tag: 'IN PROD',
        problem:
            "MLOps team lacked a unified interface to produce accurate real-time and non-real-time fine-tune task-based reasoning across multiple events, causing disconnections in user flow and inconsistent LLM results.",
        solution:
            'Built a React dashboard with a modular state-driven interface that interfaces directly with TensorFlow modules. Implemented a streaming SSE handler to pass function-call tokens down to ensure accurate data transformation.',
        impact:
            'Full-Stack: Lowered deploy time from 90 to 45 mins. Reduced display load from 90 to 45s for auto-gen parameter forms.',
        tech: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
        role: 'FULL-STACK',
        github: '#',
        live: '#',
    },
    {
        id: 3,
        title: 'Project 3.0: Core Engine',
        subtitle: 'View the site log',
        tag: 'OPEN SOURCE',
        problem:
            'Core performance issues caused build time latency and parallel pipeline inefficiencies across distributed CI runners.',
        solution:
            'Designed an optimized build graph with smart caching, parallelization, and dependency resolution that cut build times significantly.',
        impact:
            'Build time: reduced from 12min → 3.2min. Cache hit ratio: 89%. Contributors: 24+',
        tech: ['Rust', 'Go', 'WASM'],
        role: 'BACKEND',
        github: '#',
        live: null,
    },
]

export default function ProjectsPage() {
    const [expanded, setExpanded] = useState(null)

    return (
        <div className="px-4 pt-6 pb-6 fade-in-up">
            {/* Header */}
            <div className="mb-6">
                <span className="section-label">Selected Works</span>
                <div className="h-px bg-bg-border mt-3" />
            </div>

            <div className="space-y-4">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        {/* Project header */}
                        <div className="flex items-start justify-between mb-1">
                            <div>
                                <h3 className="font-mono text-xs font-semibold text-text-primary leading-snug">
                                    {project.title}
                                </h3>
                                <p className="font-mono text-[10px] text-text-muted mt-0.5">{project.subtitle}</p>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                                <span className="font-mono text-[9px] border border-accent-primary text-accent-primary px-1.5 py-0.5 rounded tracking-wider">
                                    {project.tag}
                                </span>
                            </div>
                        </div>

                        {/* Role badge */}
                        <div className="mb-3">
                            <span className="font-mono text-[9px] text-text-muted tracking-widest border border-bg-border px-2 py-0.5 rounded">
                                ROLE: {project.role}
                            </span>
                        </div>

                        {/* Problem Statement */}
                        <div className="mb-3">
                            <span className="font-mono text-[9px] tracking-widest text-text-muted block mb-1">
                                PROBLEM STATEMENT
                            </span>
                            <p className="font-sans text-xs text-text-secondary leading-relaxed">
                                {project.problem}
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="mb-3">
                            <span className="font-mono text-[9px] tracking-widest text-text-muted block mb-1">
                                MY SOLUTION
                            </span>
                            <p className="font-sans text-xs text-text-secondary leading-relaxed">
                                {project.solution}
                            </p>
                        </div>

                        {/* Impact section */}
                        {expanded === project.id && (
                            <div className="mb-3">
                                <span className="font-mono text-[9px] tracking-widest text-text-muted block mb-1">
                                    ROLE & IMPACT
                                </span>
                                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                                    {project.impact}
                                </p>
                            </div>
                        )}

                        {/* Tech tags row */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.tech.map((t) => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                                className="font-mono text-[10px] text-accent-primary hover:text-text-primary transition-colors flex items-center gap-1 tracking-wider"
                            >
                                {expanded === project.id ? '← COLLAPSE' : 'VIEW MORE →'}
                            </button>
                            <div className="flex gap-3">
                                <a href={project.github} className="text-text-muted hover:text-text-primary transition-colors">
                                    <GitBranch size={13} />
                                </a>
                                {project.live && (
                                    <a href={project.live} className="text-text-muted hover:text-text-primary transition-colors">
                                        <ExternalLink size={13} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
