import { ItemSkillLuis } from '../../components/ItemSkillLuis';
import { TitleSectionLuis } from '../../components/TitleSectionLuis';
import type { Skill } from '../../interfaces/Skills.interface';
import '../../styles/luis.style.css';




const skillsArray: Skill[] = [
    { name: 'Android studio', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'Kotlin', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
    { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    { name: 'MariaDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg' },
    { name: 'C#', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'SQL management', image: './luis/icons/management-icon.png' },
    { name: '.NET', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
    { name: 'Html5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'Jira', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
    { name: 'Bitbucket', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg' },
    { name: 'MVC', image: './luis/icons/mvc-icon.webp' },
    { name: 'MVVM', image: './luis/icons/mvvm-icon.png' },
    { name: 'Visual studio Code', image: './luis/icons/visual-studio-icon.png' },
    { name: 'Postman', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
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
