import { Zap } from "lucide-react";
import type { ReactElement } from "react";

interface Props {
    title: string;
    icon: ReactElement;
}

export const SectionTitleSamuel = ({ title, icon }: Props) => {
    return (
        <div className="relative inline-flex items-center gap-3 mb-8">
            {/* Efecto de relámpago de fondo */}
            <div className="absolute -inset-2 bg-primary/5 rounded-lg blur-md animate-pulse-glow opacity-50" />

            {/* Línea eléctrica izquierda */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-0.5 animate-electric-line rounded-full" />

            {/* Icono con chispa */}
            <div className="relative">
                { icon }
                <div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-spark"
                    style={{ animationDelay: "0s" }}
                />
                <div
                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-accent rounded-full animate-spark"
                    style={{ animationDelay: "0.5s" }}
                />
            </div>

            <h2 className="relative text-sm font-bold uppercase tracking-wider text-white animate-lightning">
                {title}
                {/* Subrayado eléctrico */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 animate-electric-line rounded-full" />
            </h2>

            {/* Rayo decorativo */}
            <div className="relative ml-2">
                <Zap className="h-4 w-4 text-primary/60 animate-lightning-bolt" style={{ animationDelay: "2s" }} />
            </div>

            {/* Línea eléctrica derecha */}
            <div
                className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-0.5 animate-electric-line rounded-full"
                style={{ animationDelay: "1.5s" }}
            />
        </div>
    )
}
