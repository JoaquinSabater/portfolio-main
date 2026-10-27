'use client'

import { useState } from 'react';
import { getImageProps } from 'next/image';
import { FaArrowRight, FaCheck, FaCopy, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const EMAIL = 'joaquinsabater15@gmail.com';

type StatusCard = {
    label: string;
    title: string;
    running?: boolean;
};

const statusCards: StatusCard[] = [
    { label: 'Deploy listo', title: 'CRM comercial' },
    { label: 'Deploy listo', title: 'Ecommerce' },
    { label: 'En curso', title: 'Licenciatura · 92%', running: true },
];

const glassButton =
    'grid h-11 w-11 place-items-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25';

const Hero = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Imagen vertical para pantallas en portrait y horizontal para el resto
    const common = { alt: '', fill: true, sizes: '100vw', priority: true, quality: 85 };
    const { props: { srcSet: portraitSrcSet } } = getImageProps({ ...common, src: '/celular.png' });
    const { props: { srcSet: landscapeSrcSet, ...imgProps } } = getImageProps({ ...common, src: '/escritorio.png' });

    return (
        <div className="relative w-full">
            <section id="inicio" className="hero relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-sky-500">
                <div className="hero-stage" aria-hidden="true">
                    <picture>
                        <source media="(orientation: portrait)" srcSet={portraitSrcSet} sizes="100vw" />
                        <img {...imgProps} srcSet={landscapeSrcSet} alt="" className="object-cover" />
                    </picture>

                    {/* Tarjetas flotantes sobre la laptop */}
                    <ul className="hero-cards flex flex-col items-start gap-1.5 motion-safe:animate-float">
                        {statusCards.map((card, i) => (
                            <li
                                key={card.title}
                                style={{ animationDelay: `${0.6 + i * 0.35}s` }}
                                className="flex items-center gap-2 whitespace-nowrap rounded-lg border border-white/15 bg-emerald-950/55 px-3 py-1.5 text-[11px] text-white shadow-lg shadow-emerald-950/20 backdrop-blur-md motion-safe:animate-chip-in md:text-sm"
                            >
                                {card.running ? (
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 motion-safe:animate-ping" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
                                    </span>
                                ) : (
                                    <FaCheck className="text-lime-300" size={10} />
                                )}
                                <span className="text-white/60">{card.label}</span>
                                <span className="font-medium">{card.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Velos para que el texto se lea sobre el cielo */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-950/35 via-sky-900/5 to-transparent" />
                <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-sky-950/25 via-transparent to-transparent landscape:block" />

                <div className="relative z-10 mx-auto h-full max-w-7xl px-5 pt-24 md:px-8 md:pt-36 lg:pt-40">
                    <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">
                        <h1 className="text-[1.95rem] font-medium leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(8,47,73,0.45)] sm:text-5xl xl:text-[3.5rem]">
                            Soy Joaquín Sabater, desarrollador Full Stack y analista funcional
                        </h1>
                        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(8,47,73,0.5)] sm:mt-5 sm:text-lg">
                            Construyo CRMs, ecommerce y sistemas internos para empresas. Estudiante avanzado de la Lic. en Ciencias de la Computación (UNS).
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-950/20 transition hover:bg-sky-50"
                            >
                                Ver proyectos <FaArrowRight size={12} />
                            </a>
                            <a
                                href={`mailto:${EMAIL}`}
                                className="inline-flex items-center rounded-xl border border-white/30 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
                            >
                                Contactame
                            </a>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-6">
                            <div className="hidden h-11 items-center gap-3 rounded-xl border border-white/25 bg-white/15 pl-4 pr-1.5 text-sm text-white backdrop-blur-md sm:flex">
                                <FaEnvelope className="text-white/70" size={14} />
                                <span>{EMAIL}</span>
                                <button
                                    onClick={handleCopyEmail}
                                    aria-label="Copiar email"
                                    className="grid h-8 w-8 place-items-center rounded-lg transition hover:bg-white/20"
                                >
                                    {copied ? <FaCheck size={14} /> : <FaCopy size={14} />}
                                </button>
                            </div>
                            <button onClick={handleCopyEmail} aria-label="Copiar email" className={`${glassButton} sm:hidden`}>
                                {copied ? <FaCheck size={16} /> : <FaCopy size={16} />}
                            </button>
                            <a href="https://github.com/JoaquinSabater" aria-label="GitHub de Joaquín Sabater" className={glassButton}>
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/joaquin-sabater/" aria-label="LinkedIn de Joaquín Sabater" className={glassButton}>
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hero-border" aria-hidden="true" />
        </div>
    );
};

export default Hero;
