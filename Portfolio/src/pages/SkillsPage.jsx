import { useEffect, useState } from 'react'

const skillCategories = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'Next.js', level: 80 },
            { name: 'TailwindCSS', level: 88 },
            { name: 'HTML / CSS', level: 95 },
        ],
    },
    {
        category: 'Backend',
        skills: [
            { name: 'Node.js', level: 82 },
            { name: 'Go', level: 60 },
            { name: 'Python', level: 70 },
            { name: 'REST / GraphQL', level: 78 },
            { name: 'WebSockets', level: 72 },
        ],
    },
    {
        category: 'Database',
        skills: [
            { name: 'PostgreSQL', level: 80 },
            { name: 'MongoDB', level: 75 },
            { name: 'Redis', level: 65 },
            { name: 'SQLite', level: 85 },
        ],
    },
    {
        category: 'DevOps & Tools',
        skills: [
            { name: 'Docker', level: 65 },
            { name: 'Git / GitHub', level: 90 },
            { name: 'CI/CD', level: 68 },
            { name: 'Linux / Bash', level: 72 },
            { name: 'AWS (basics)', level: 55 },
        ],
    },
]

const tools = [
    'VS Code', 'Neovim', 'Postman', 'Figma', 'GitHub Actions', 'Vercel', 'Netlify',
]

export default function SkillsPage() {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setAnimated(true), 100)
        return () => clearTimeout(t)
    }, [])

    return (
        <div className="px-4 pt-6 pb-6 fade-in-up">
            {/* Header */}
            <div className="mb-6">
                <span className="section-label">Core Technologies</span>
                <div className="h-px bg-bg-border mt-3" />
            </div>

            {/* Skill categories */}
            <div className="space-y-6">
                {skillCategories.map((cat) => (
                    <div key={cat.category} className="bg-bg-card border border-bg-border rounded-lg p-4">
                        <h3 className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase mb-3">
                            {cat.category}
                        </h3>
                        <div className="space-y-3">
                            {cat.skills.map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between items-center mb-1">
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
                    </div>
                ))}
            </div>

            {/* Tools section */}
            <div className="glow-line my-6" />
            <div className="mb-3">
                <span className="section-label">Tools & Environment</span>
            </div>
            <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                    <span
                        key={tool}
                        className="font-mono text-xs border border-bg-border text-text-secondary px-3 py-1.5 rounded hover:border-accent-primary hover:text-accent-primary transition-all duration-200"
                    >
                        {tool}
                    </span>
                ))}
            </div>

            {/* Philosophy box */}
            <div className="glow-line my-6" />
            <div className="bg-bg-card border border-bg-border rounded-lg p-4">
                <span className="font-mono text-[10px] tracking-[0.2em] text-accent-primary block mb-2">
          // THE MINDSET
                </span>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    Every tool in this arsenal was chosen with intention. I believe in mastering
                    fundamentals first, then layering abstractions. Code should be readable,
                    testable, and maintainable — not just functional.
                </p>
                <p className="font-mono text-xs text-accent-primary mt-3 terminal-cursor">
                    &gt; always_learning
                </p>
            </div>
        </div>
    )
}
