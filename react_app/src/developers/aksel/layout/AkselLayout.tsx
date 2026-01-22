import { SidebarAksel } from '../components/SidebarAksel';
import { AkselPage } from '../pages/AkselPage';
import '../styles/aksel.style.css';

export const AkselLayout = () => {
    return (
        <div className="bg-blue-dark flex flex-col md:flex-row overflow-auto">
            <SidebarAksel />

            <AkselPage />
        </div>
    )
}
