import { createBrowserRouter, Navigate } from "react-router-dom";
import { AkselLayout } from "./developers/aksel/layout/AkselLayout";
import { SamuelLayout } from "./developers/samuel/layout/SamuelLayout";
import { ManualPage } from "./manuals/ManualPage";
import { LuisLayout } from "./developers/luis/layout/LuisLauyout";

export const appRoutes = createBrowserRouter([
  {
    path: '/developer-aksel',
    element: <AkselLayout />
  },
  {
    path: '/developer-samuel',
    element: <SamuelLayout />
  },
  {
    path: '/developer-luis',
    element: <LuisLayout />
  },
  {
    path: '/manuals',
    element: <ManualPage/>
  },
  {
    path: '/',
    element: <Navigate to='/developer-aksel' />
  },
  {
    path: '*',
    element: <Navigate to='/developer-aksel' />
  }
], {
  basename: '/'
});