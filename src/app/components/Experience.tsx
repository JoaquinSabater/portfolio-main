type ExperienceItem = {
    role: string;
    title: string;
    start: string;
    end?: string;
    description: string;
};

const experiences: ExperienceItem[] = [
    {
        role: "Desarrollador Full Stack y Analista Funcional",
        title: "Comsur S.R.L.",
        start: "Ago, 2026",
        description: "Relevamiento de procesos y desarrollo de soluciones de datos para el área comercial: normalización con Python de información de múltiples planillas Excel, dashboards en Power BI (volumen, clientes y rendimiento de vendedores) y un agente de IA para consultar los datos de clientes en lenguaje natural.",
    },
    {
        role: "Desarrollador Full Stack",
        title: "CellPhoneFree (importadora de tecnología)",
        start: "Mar, 2025",
        description: "Desarrollo y mantenimiento de los sistemas internos: CRM comercial con dashboard de ventas, bot de Telegram y notificaciones, y ecommerce con catálogo administrable y cuentas de clientes (Next.js, TypeScript y MySQL).",
    },
    {
        role: "Ayudante de Cátedra",
        title: "Ayudante B en Organización de Computadoras — UNS",
        start: "Dic, 2024",
        description: "Clases prácticas y consultas para estudiantes de la materia de segundo año Organización de Computadoras, correspondiente a las carreras de Lic. en Ciencias de la Computación, Ing. en Sistemas e Ing. en Computación de la Universidad Nacional del Sur.",
    },
    {
        role: "Desarrollador Full Stack",
        title: "Productora Tegete",
        start: "Abr, 2024",
        end: "Nov, 2024",
        description: "Durante 2024 trabajé como desarrollador Full Stack, encargado del diseño y desarrollo de sitios web para los clientes de la productora.",
    },
    {
        role: "Pasantía técnica",
        title: "Hospital Interzonal Dr. José Penna",
        start: "Mar, 2018",
        end: "Ago, 2018",
        description: "Pasantías requeridas para la obtención del título técnico, enfocadas principalmente en el área de redes y mantenimiento de equipos.",
    },
];

// Piezas de la enredadera pixel art (160px de ancho, tallo alineado en x=80)
const vineStart = "block w-full shrink-0 aspect-[160/547] bg-[url('/vine-start.png')] bg-[length:100%_auto] bg-top bg-no-repeat";
const vineMiddle = "block w-full flex-1 bg-[url('/vine-middle.png')] bg-[length:100%_auto] bg-top bg-repeat-y";
// Flor suelta que cierra el tallo: se superpone a la punta (-mt) para tapar el corte
const vineFlower = "block w-8 shrink-0 -mt-4 aspect-square bg-[url('/vine-flower.png')] bg-contain bg-center bg-no-repeat";

const Experience = () => {
    return (
        <div className="-my-6">
            {experiences.map((item, i) => {
                const isLast = i === experiences.length - 1;
                return (
                    <div key={`${item.title}-${item.start}`} className="relative pl-12 sm:pl-32 py-6">
                        {/* La flor de inicio marca cada hito (alineada con el cargo), el tallo del medio
                            se repite hasta el siguiente y la última experiencia cierra con la flor final */}
                        <span
                            aria-hidden="true"
                            className={`absolute left-4 sm:left-[6.5rem] top-[27px] w-9 -translate-x-1/2 flex flex-col items-center ${
                                isLast ? "bottom-0" : "h-full overflow-hidden"
                            }`}
                        >
                            <span className={vineStart} />
                            <span className={vineMiddle} />
                            {isLast && <span className={vineFlower} />}
                        </span>

                        <div className="font-caveat font-medium text-2xl text-emerald-700 mb-1 sm:mb-0">
                            {item.role}
                        </div>
                        <div className="flex flex-col sm:flex-row items-start mb-1">
                            {/* Fechas de inicio y finalización */}
                            <div className="flex flex-col sm:absolute sm:left-0 sm:top-7 mb-3 sm:mb-0">
                                <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-1 text-emerald-600 bg-emerald-100 rounded-full">
                                    {item.start}
                                </time>
                                {item.end && (
                                    <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 text-red-600 bg-red-100 rounded-full">
                                        {item.end}
                                    </time>
                                )}
                            </div>

                            <div className="text-xl font-bold text-slate-900">
                                {item.title}
                            </div>
                        </div>
                        <div className="text-slate-500">
                            {item.description}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Experience;
