import Image from 'next/image';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

export type Tech = {
    src: string;
    name: string;
};

export type Project = {
    title: string;
    description: string;
    image?: string;
    techs: Tech[];
    repo?: string;
};

const ProjectCard = ({ title, description, image, techs, repo }: Project) => {
    return (
        // Al pasar el mouse: borde verde oscuro y sombra sólida desplazada, como un sprite retro
        <article className="group flex flex-col overflow-hidden rounded-2xl border-2 border-slate-200 bg-white transition duration-200 hover:border-[#034618] hover:shadow-[6px_6px_0_0_#034618] motion-safe:hover:-translate-x-1 motion-safe:hover:-translate-y-1">
            {image && (
                <div className="relative aspect-[2/1] overflow-hidden border-b-2 border-slate-200 bg-emerald-50 transition-colors duration-200 group-hover:border-[#034618]">
                    <Image
                        src={image}
                        alt={`Captura de ${title}`}
                        fill
                        sizes="(min-width: 1152px) 560px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition duration-500 motion-safe:group-hover:scale-[1.03]"
                    />
                </div>
            )}

            <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{description}</p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                    {techs.length > 0 && (
                        <ul className="flex flex-wrap gap-2">
                            {techs.map((tech) => (
                                <li
                                    key={tech.name}
                                    className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-700/10"
                                >
                                    <Image width={14} height={14} src={tech.src} alt="" className="h-3.5 w-3.5 object-contain" />
                                    {tech.name}
                                </li>
                            ))}
                        </ul>
                    )}
                    {repo && (
                        <a
                            href={repo}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-[#034618]"
                        >
                            <FaGithub size={16} />
                            Ver código
                            <FaArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
