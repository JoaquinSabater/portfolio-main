'use client'

import { useEffect, useState } from 'react';

const links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#tools', label: 'Herramientas' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#experience', label: 'Experiencia' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Mientras está sobre el hero la barra es transparente; después pasa a fondo claro
    const [scrolled, setScrolled] = useState(false);
    const [moved, setMoved] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const hero = document.getElementById('inicio');
            const limit = hero ? hero.offsetHeight - 72 : 0;
            setScrolled(window.scrollY > limit);
            setMoved(window.scrollY > 8);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    const close = () => setIsOpen(false);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                scrolled
                    ? 'bg-slate-50/85 shadow-sm backdrop-blur-md'
                    : moved
                      ? 'bg-sky-950/30 backdrop-blur-md'
                      : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
                <a
                    href="#inicio"
                    onClick={close}
                    className={`font-serif text-2xl md:text-3xl ${scrolled ? 'text-slate-900' : 'text-white drop-shadow'}`}
                >
                    Joaquín Sabater
                </a>

                <div className="hidden items-center gap-2 md:flex">
                    <div
                        className={`flex items-center gap-1 rounded-xl border p-1 text-sm backdrop-blur-md ${
                            scrolled ? 'border-slate-200 bg-white/60 text-slate-700' : 'border-white/20 bg-sky-950/20 text-white/90'
                        }`}
                    >
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`rounded-lg px-3 py-1.5 transition ${scrolled ? 'hover:bg-slate-200/70' : 'hover:bg-white/15'}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <a
                        href="/SabaterJoaquin_CV.pdf"
                        download
                        className={`rounded-xl px-4 py-2 text-sm font-semibold shadow transition ${
                            scrolled ? 'bg-slate-900 text-white hover:bg-slate-700' : 'bg-white text-slate-900 hover:bg-sky-50'
                        }`}
                    >
                        Descargar CV
                    </a>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={isOpen}
                    className={`grid h-10 w-10 place-items-center rounded-xl border backdrop-blur-md md:hidden ${
                        scrolled ? 'border-slate-200 bg-white/70 text-slate-800' : 'border-white/25 bg-white/15 text-white'
                    }`}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>
            </nav>

            {isOpen && (
                <div
                    className={`mx-4 mb-3 flex flex-col rounded-2xl border p-2 backdrop-blur-xl md:hidden ${
                        scrolled ? 'border-slate-200 bg-white/95 text-slate-800' : 'border-white/20 bg-sky-950/60 text-white'
                    }`}
                >
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={close}
                            className={`rounded-xl px-4 py-3 ${scrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/SabaterJoaquin_CV.pdf"
                        download
                        onClick={close}
                        className={`mt-1 rounded-xl px-4 py-3 text-center font-semibold ${
                            scrolled ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
                        }`}
                    >
                        Descargar CV
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
