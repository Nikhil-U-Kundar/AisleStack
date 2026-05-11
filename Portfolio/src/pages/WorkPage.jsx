import { Briefcase, MapPin, Calendar } from 'lucide-react'

const experiences = [
    {
        company: 'TechCorp Solutions',
        role: 'Software Developer',
        duration: 'Jan 2024 – Present',
        location: 'Remote',
        type: 'Full-time',
        description:
            'Deep dive into complex system architectures, performance optimizations, and full-stack engineering solutions.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
        achievements: [
            'Reduced API response time by 40% through query optimization and caching strategies',
            'Led migration of monolithic architecture to microservices, improving scalability by 3x',
            'Implemented real-time features using WebSockets serving 10k+ concurrent users',
        ],
    },
    {
        company: 'StartupXYZ',
        role: 'Frontend Engineer Intern',
        duration: 'Jul 2023 – Dec 2023',
        location: 'Bangalore, IN',
        type: 'Internship',
        description:
            'Built and maintained user-facing features for a B2B SaaS platform with 5,000+ daily active users.',
        tech: ['React', 'TypeScript', 'TailwindCSS', 'GraphQL'],
        achievements: [
            'Developed 15+ reusable UI components reducing development time by 30%',
            'Improved Lighthouse performance score from 62 to 94 through code splitting',
            'Collaborated with design team to implement pixel-perfect responsive layouts',
        ],
    },
]

export default function WorkPage() {
    return (
        <div className="px-4 pt-6 pb-6 fade-in-up">
            {/* Header */}
            <div className="mb-6">
                <span className="section-label">Selected Works</span>
                <div className="h-px bg-bg-border mt-3" />
            </div>

            <div className="space-y-6">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="project-card relative overflow-hidden">
                        {/* Corner accent */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent-primary to-transparent opacity-60" />

                        <div className="pl-3">
                            {/* Role & Company */}
                            <div className="flex items-start justify-between mb-1">
                                <div>
                                    <h3 className="font-mono text-sm font-semibold text-text-primary">{exp.role}</h3>
                                    <p className="font-mono text-xs text-accent-primary">{exp.company}</p>
                                </div>
                                <span className="text-[9px] font-mono border border-bg-border text-text-muted px-2 py-0.5 rounded tracking-wider">
                                    {exp.type}
                                </span>
                            </div>

                            {/* Meta info */}
                            <div className="flex flex-wrap gap-3 mt-2 mb-3">
                                <span className="flex items-center gap-1 font-mono text-[10px] text-text-muted">
                                    <Calendar size={9} />
                                    {exp.duration}
                                </span>
                                <span className="flex items-center gap-1 font-mono text-[10px] text-text-muted">
                                    <MapPin size={9} />
                                    {exp.location}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="font-sans text-xs text-text-secondary mb-3 leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Achievements */}
                            <div className="mb-3 space-y-1.5">
                                <span className="font-mono text-[10px] text-text-muted tracking-wider">IMPACT</span>
                                {exp.achievements.map((ach, i) => (
                                    <div key={i} className="flex gap-2">
                                        <span className="text-accent-primary text-xs mt-0.5 flex-shrink-0">›</span>
                                        <p className="font-sans text-xs text-text-secondary leading-relaxed">{ach}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-1.5">
                                {exp.tech.map((t) => (
                                    <span key={t} className="tech-pill">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="glow-line my-8" />

            {/* Education */}
            <div className="mb-4">
                <span className="section-label">Education</span>
            </div>
            <div className="project-card relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-glow to-transparent opacity-60" />
                <div className="pl-3">
                    <h3 className="font-mono text-sm font-semibold text-text-primary">
                        B.E. Computer Science
                    </h3>
                    <p className="font-mono text-xs text-accent-primary mb-1">Visvesvaraya Technological University</p>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-text-muted">
                        <Calendar size={9} />
                        2020 – 2024
                    </span>
                    <p className="font-sans text-xs text-text-secondary mt-2">
                        Graduated with distinction. Core subjects: Data Structures, Algorithms, DBMS, OS, Computer Networks.
                    </p>
                </div>
            </div>
        </div>
    )
}
