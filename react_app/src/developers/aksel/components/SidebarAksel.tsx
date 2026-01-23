import '../styles/aksel.style.css';
import { Link } from 'react-router';
import { GitHub } from '../../../assets/ui/GitHub.icon';
import { LinkedIn } from '../../../assets/ui/LinkedIn.icon';
import { Mail } from '../../../assets/ui/Mail.icon';

export const SidebarAksel = () => {
  return (
    <div className="
      fixed bottom-0 left-0
      w-full h-16
      md:static md:h-screen md:w-auto md:basis-[7vw]
      bg-sidebar
      flex flex-row md:flex-col
      justify-between items-center
      px-6 md:px-0
      py-2 md:py-3
    ">
      {/* ITEM TOP */}
      <div className='hidden md:block'>
        <div className='w-12 h-12 bg-blue-gradient flex items-center justify-center rounded-lg'>
          <p className='text-white text-1xl font-bold'>
            AH
          </p>
        </div>
      </div>

      {/* ITEMS CENTER */}
      <div className='flex flex-row md:flex-col gap-6 md:gap-3'>
        <GitHub
          className='jum-hover cyan-hover text-title-gray w-7 h-7'/>
        <LinkedIn
          className='jum-hover cyan-hover text-title-gray w-7 h-7'/>
        <Mail
          className='jum-hover cyan-hover text-title-gray w-7 h-7'/>
      </div>

      {/* ITEMS BOTTOM */}
      <div className='hidden md:block column-text secondary-text text-sm'>
        <Link
          to='mailto:akselherrera18@gmail.com'
          className=''>
          akselherrera18@gmail.com
        </Link>
      </div>
    </div>
  )
}
