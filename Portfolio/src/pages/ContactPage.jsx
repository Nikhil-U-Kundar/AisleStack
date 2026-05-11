import { useState } from 'react'
import { Send, GitBranch, Link, Code2, Mail } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [sent, setSent] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => setSent(false), 3000)
        setFormData({ name: '', email: '', message: '' })
    }

    const socials = [
        { icon: GitBranch, label: 'GitHub', handle: '@nikhil-dev', href: '#' },
        { icon: Link, label: 'LinkedIn', handle: 'nikhil-u-kundar', href: '#' },
        { icon: Code2, label: 'Source', handle: 'portfolio.src', href: '#' },
        { icon: Mail, label: 'Email', handle: 'nikhil@dev.io', href: 'mailto:nikhil@dev.io' },
    ]

    return (
        <div className="px-4 pt-6 pb-6 fade-in-up">
            {/* Header */}
            <div className="mb-6">
                <span className="section-label">Contact</span>
                <div className="h-px bg-bg-border mt-3" />
            </div>

            {/* Opening */}
            <div className="bg-bg-card border border-bg-border rounded-lg p-4 mb-6">
                <p className="font-mono text-[10px] text-accent-primary tracking-widest mb-2">
          // INITIATE CONTACT
                </p>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    Available for freelance projects, full-time opportunities, and
                    interesting collaborations. Response time: &lt; 24 hours.
                </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <div>
                    <label className="font-mono text-[9px] text-text-muted tracking-widest block mb-1.5 uppercase">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-bg-card border border-bg-border rounded px-3 py-2.5 font-mono text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                    />
                </div>
                <div>
                    <label className="font-mono text-[9px] text-text-muted tracking-widest block mb-1.5 uppercase">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-bg-card border border-bg-border rounded px-3 py-2.5 font-mono text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors"
                    />
                </div>
                <div>
                    <label className="font-mono text-[9px] text-text-muted tracking-widest block mb-1.5 uppercase">
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="w-full bg-bg-card border border-bg-border rounded px-3 py-2.5 font-mono text-xs text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary transition-colors resize-none"
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full py-2.5 font-mono text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 border transition-all duration-200 ${sent
                        ? 'border-green-glow text-green-glow'
                        : 'border-accent-primary text-accent-primary hover:bg-accent-glow'
                        }`}
                >
                    {sent ? (
                        <>✓ MESSAGE SENT</>
                    ) : (
                        <>
                            <Send size={11} />
                            SEND MESSAGE
                        </>
                    )}
                </button>
            </form>

            <div className="glow-line mb-6" />

            {/* Socials */}
            <div className="mb-3">
                <span className="section-label">Find me online</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, handle, href }) => (
                    <a
                        key={label}
                        href={href}
                        className="flex items-center gap-3 bg-bg-card border border-bg-border rounded-lg p-3 hover:border-accent-primary transition-colors group"
                    >
                        <Icon size={14} className="text-text-muted group-hover:text-accent-primary transition-colors" />
                        <div>
                            <p className="font-mono text-[10px] text-text-muted">{label}</p>
                            <p className="font-mono text-xs text-text-primary truncate">{handle}</p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Footer */}
            <div className="glow-line my-6" />
            <footer>
                <p className="font-mono text-[9px] text-text-muted tracking-[0.15em] mb-2">
                    © 2024 NIKHIL.DEV // ALL RIGHTS RESERVED
                </p>
                <p className="font-mono text-[9px] text-text-muted">
                    Built with React + Tailwind CSS
                </p>
            </footer>
        </div>
    )
}
