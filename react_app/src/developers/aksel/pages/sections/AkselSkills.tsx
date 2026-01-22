import { ItemSkillAksel } from '../../components/ItemSkillAksel';
import { TitleSectionAksel } from '../../components/TitleSectionAksel';
import type { Skill } from '../../interfaces/Skills.interface';
import '../../styles/aksel.style.css';

const skillsArray: Skill[] = [
    { name: 'Swift', image: './icons/swift.png' },
    { name: 'Angular', image: './icons/angular.png' },
    { name: 'TypeScript', image: './icons/typescript.png' },
    { name: 'Node.js', image: './icons/node.png' },
    { name: 'NestJS', image: './icons/nestjs.png' },
    { name: 'PHP', image: './icons/php.png' },
    { name: 'HTML5', image: './icons/html.png' },
    { name: 'CSS3', image: './icons/css.png' },
    { name: 'Figma', image: './icons/figma.webp' },
    { name: 'React', image: './icons/react.png' },
]

export const AkselSkills = () => {
    return (
        <div>
            <div className="mt-15 flex items-center gap-3">
                <TitleSectionAksel
                    title='Stack Tecnológico' />
            </div>
            {/* //TODO: LOS COMPONENTES DE LA SEGUNDA ROW NO SE MUESTRAN ABAJO */}
            <div className='flex flex-warp justify-center gap-3 mt-2'>
                {
                    skillsArray.map(skill => (
                        <ItemSkillAksel
                            key={skill.name}
                            name={skill.name}
                            image={skill.image}/>
                    ))
                }
            </div>
        </div>
    )
}
