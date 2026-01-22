import { createBrowserRouter, Navigate } from "react-router";
import { AkselLayout } from "./developers/aksel/layout/AkselLayout";
import { SamuelLayout } from "./developers/samuel/layout/SamuelLayout";

export const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/developer-aksel' />
    },
    {
        path: '/developer-aksel',
        element: <AkselLayout />
    },
    {
        path: '/developer-samuel',
        element: <SamuelLayout />
    },
    {
        path: '*',
        element: <Navigate to='/developer-aksel' />
    }
]);