import { createHashRouter, Navigate } from "react-router-dom";
import { AkselLayout } from "./developers/aksel/layout/AkselLayout";
import { SamuelLayout } from "./developers/samuel/layout/SamuelLayout";

export const appRoutes = createHashRouter([
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