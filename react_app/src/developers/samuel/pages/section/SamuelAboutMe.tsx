import { Briefcase, CodeXml, Rocket, User } from "lucide-react"
import type { ReactNode } from "react";
import { SectionTitleSamuel } from "../../components/SectionTitleSamuel";

interface ActionsSalient {
    icon: ReactNode;
    title: string;
    detail: string;
}

export const SamuelAboutMe = () => {

    const stack: string[] = [
        'Android Development',
        'Full Stack',
        'AWS Cloud',
        'APIs REST',
        'MVVM Architecture',
    ]

    const actionSalients: ActionsSalient[] = [
        {
            icon: <Briefcase />,
            title: '+5',
            detail: 'años de experiencia'
        },
        {
            icon: <Rocket />,
            title: '+8',
            detail: 'Projectos completados'
        },
        {
            icon: <CodeXml />,
            title: '+15',
            detail: 'Tecnologias domindas'
        },
    ]

    return (
        <div className="mt-10 box-content border-btn rounded-xl p-8 text-white">
            <div
                className="flex flex-col md:flex-row items-center mb-5">
                <SectionTitleSamuel
                    title="SOBRE MI"
                    icon={<User />}
                />
                <div
                    className="flex flex-col md:flex-row gap-3 md:ml-15">
                    {
                        actionSalients.map(action => (
                            <div
                                key={Math.random()}
                                className="flex flex-row px-4 py-2 gap-2 items-center border-btn box-salient rounded-2xl">
                                <div
                                    className="bg-item p-2 rounded-xl w-10 h-10 purple-light-color">
                                    {action.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="purple-light-color text-3xl">
                                        {action.title}
                                    </h1>
                                    <span
                                        className="text-sm text-secondary">
                                        {action.detail}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div
                className="grid gap-4">
                <div
                    className="flex flex-col gap-5 text-secondary">
                    <p>
                        Desarrollador con más de <span className="font-bold text-white">5 años de experiencia</span> en desarrollo web y backend, y experto en Android Studio con Java y Kotlin. En el desarrollo móvil, he utilizado Android Studio para crear aplicaciones robustas, optimizando el rendimiento y la experiencia del usuario.
                    </p>
                    <p>
                        Tengo experiencia en el diseño de interfaces con XML, la integración de APIs, y la implementación de arquitecturas como MVVM. En el ámbito web, soy competente en tecnologías frontend como JavaScript, HTML, CSS y Angular. En el backend, tengo amplios conocimientos en Node.js, PHP y NestJS.
                    </p>
                    <p>
                        Manejo servicios en la nube de AWS, incluyendo EC2, S3 y ELB, con experiencia en el despliegue de aplicaciones y la administración de contenedores. He implementado validaciones de compras a través de APIs de Google en proyectos backend.
                    </p>
                    <div className="flex flex-row flex-wrap purple-light-color gap-2 text-sm">
                        {
                            stack.map(item => (
                                <div
                                    className="box-salient border-btn py-1 px-2 rounded-xl"
                                    key={Math.random()}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
