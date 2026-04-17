import { createBrowserRouter, Navigate } from "react-router-dom";
import { AkselLayout } from "./developers/aksel/layout/AkselLayout";
import { SamuelLayout } from "./developers/samuel/layout/SamuelLayout";
import { ManualPage } from "./manuals/ManualPage";

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/developer-aksel' />
  },
  {
    path: '/manuals',
    element: <ManualPage/>
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
], {
  basename: '/assets/react/build' // ← AÑADE ESTO
});