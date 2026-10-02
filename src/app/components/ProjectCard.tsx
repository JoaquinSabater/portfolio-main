import Image from 'next/image';

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
        <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
            {image && (
                <img src={image} alt={title} className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
            )}
            <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">{title}</h3>
            <p className="text-base md:text-lg mb-4 text-gray-800">
                {description}
            </p>
            {techs.length > 0 && (
                <div className="flex items-center mb-4">
                    {techs.map((tech) => (
                        <Image key={tech.name} width={40} height={40} src={tech.src} alt={tech.name} title={tech.name} className="w-10 h-10 mr-2" />
                    ))}
                </div>
            )}
            {repo && (
                <div className="flex space-x-4">
                    <a href={repo} className="bg-black text-white px-4 py-2 rounded">Repositorio</a>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
