import React from 'react';

const technologies = [
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

const LogoCarousel = () => {
    return (
      <div className="relative overflow-hidden mx-auto max-w-7xl">
        {/* Fondo de gradiente para desvanecer en los bordes */}
        <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-slate-50 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-slate-50 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Contenedor del carrusel */}
        <div className="flex animate-slide-infinite space-x-4">
          {technologies.concat(technologies).map((tech, index) => (
            <div key={index} className="flex-shrink-0 w-[10%] lg:w-[14.2857%]">
              <img src={tech.src} alt={tech.name} title={tech.name} className="h-6 md:h-10 lg:h-15 xl:h-20 w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LogoCarousel;
