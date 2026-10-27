import React from 'react';

type Technology = { src: string; name: string };

const technologies: Technology[] = [
    { src: '/typescript.svg', name: 'TypeScript' },
    { src: '/JavaScript-logo.png', name: 'JavaScript' },
    { src: '/react.svg', name: 'React' },
    { src: '/next.svg', name: 'Next.js' },
    { src: '/tailwind.svg', name: 'Tailwind CSS' },
    { src: '/mysql-original-wordmark.svg', name: 'MySQL' },
    { src: '/python.svg', name: 'Python' },
    { src: '/php.png', name: 'PHP' },
    { src: '/java.png', name: 'Java' },
    { src: '/c.png', name: 'C' },
    { src: '/html.png', name: 'HTML' },
    { src: '/prolog.png', name: 'Prolog' },
];

// La segunda fila arranca desde la mitad de la lista para que no se repitan los mismos logos alineados
const rows = [technologies, [...technologies.slice(6), ...technologies.slice(0, 6)]];

const TechTile = ({ tech }: { tech: Technology }) => (
    <li className="flex h-24 w-36 shrink-0 flex-col items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white transition duration-200 hover:border-[#034618] hover:shadow-[4px_4px_0_0_#034618] motion-safe:hover:-translate-x-0.5 motion-safe:hover:-translate-y-0.5 md:h-28 md:w-44">
        <img src={tech.src} alt="" className="h-8 w-24 object-contain md:h-10" />
        <span className="text-xs font-medium text-slate-600">{tech.name}</span>
    </li>
);

const LogoCarousel = () => {
    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-4 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            {rows.map((row, i) => (
                // Dos copias de la fila: la pista se desplaza un 50% y vuelve a empezar sin saltos
                <div
                    key={i}
                    className={`flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused] ${i === 1 ? '[animation-direction:reverse]' : ''}`}
                >
                    {[0, 1].map((copy) => (
                        <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-4 pr-4">
                            {row.map((tech) => (
                                <TechTile key={tech.name} tech={tech} />
                            ))}
                        </ul>
                    ))}
                </div>
            ))}
            <p className="sr-only">Tecnologías: {technologies.map((t) => t.name).join(', ')}.</p>
        </div>
    );
};

export default LogoCarousel;
