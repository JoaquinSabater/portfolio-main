import React from 'react';

// Título de sección con un subrayado de "píxeles" en los verdes del tema
const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{children}</h2>
            <div aria-hidden="true" className="mt-4 flex gap-1">
                <span className="h-2 w-8 bg-[#034618]" />
                <span className="h-2 w-2 bg-emerald-600" />
                <span className="h-2 w-2 bg-lime-400" />
            </div>
        </div>
    );
};

export default SectionTitle;
