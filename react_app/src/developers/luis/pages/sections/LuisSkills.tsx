import { ItemSkillLuis } from '../../components/ItemSkillLuis';
import { TitleSectionLuis } from '../../components/TitleSectionLuis';
import type { Skill } from '../../interfaces/Skills.interface';
import '../../styles/luis.style.css';

const skillsArray: Skill[] = [
    { name: 'Angular', image: './icons/angular.png' },
    { name: 'AWS', image: './icons/aws.png' },
    { name: 'CSS3', image: './icons/css.png' },
    { name: 'Figma', image: './icons/figma.webp' },
    { name: 'GitHub', image: './icons/github.png' },
    { name: 'HTML5', image: './icons/html.png' },
    { name: 'NestJS', image: './icons/nestjs.png' },
    { name: 'Node.js', image: './icons/node.png' },
    { name: 'PHP', image: './icons/php.png' },
    { name: 'React', image: './icons/react.png' },
    { name: 'Swift', image: './icons/swift.png' },
    { name: 'TypeScript', image: './icons/typescript.png' },
]

export const LuisSkills = () => {
    return (
        <div>
            <div className="mt-15 flex items-center gap-3">
                <TitleSectionLuis
                    title='Stack Tecnológico' />
            </div>
            <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-2'>
                {
                    skillsArray.map(skill => (
                        <ItemSkillLuis
                            key={Math.random() * 100}
                            name={skill.name}
                            image={skill.image} />
                    ))
                }
            </div>
        </div>
    )
}
