import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-header-primary text-white">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-44 bg-bg-secondary shadow-lg p-4">
                <h1 className="text-xl font-bold mb-6">My Portfolio</h1>
                <nav className="flex flex-col gap-4">
                    {['Home', 'Work', 'Projects', 'Skills', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                            className="font-mono text-base text-text-secondary hover:text-accent-primary transition-colors tracking-wide uppercase"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex justify-between items-center py-4 px-6">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-text-secondary hover:text-text-primary transition-colors p-2"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-0 left-0 right-0 bg-bg-secondary z-50 py-4 px-6 shadow-lg animate-fade-in">
                    <nav className="flex flex-col gap-6">
                        {['Home', 'Work', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="font-mono text-lg text-text-secondary hover:text-accent-primary transition-colors tracking-wide uppercase"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
