import { SidebarAksel } from '../components/SidebarAksel';
import { AkselPage } from '../pages/AkselPage';
import '../styles/aksel.style.css';

export const AkselLayout = () => {
    return (
        <div className="h-screen bg-blue-dark flex flex-col md:flex-row">
            <SidebarAksel />

            <AkselPage />
        </div>
    )
}
