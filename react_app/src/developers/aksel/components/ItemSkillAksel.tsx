import type { Skill } from "../interfaces/Skills.interface"

export const ItemSkillAksel = ({ name, image}: Skill) => {
  return (
    <div className='
      gap-3
      jum-hover border-gray border-cyan-hover
      flex flex-row items-center justify-center bg-box text-white p-3 rounded-lg col-span-1 h-12'>
      <img
        src={image}
        alt="item-icon-swift"
        className='w-7 h-auto object-cover' />
      { name }
    </div>
  )
}
