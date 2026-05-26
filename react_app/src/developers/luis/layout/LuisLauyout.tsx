import { SidebarLuis } from '../components/SidebarLuis';
import { LuisPage } from '../pages/LuisPage';
import '../styles/luis.style.css';

export const LuisLayout = () => {
    return (
        <div className="h-screen bg-blue-dark flex flex-col md:flex-row">
            <SidebarLuis />

            <LuisPage />
        </div>
    )
}
