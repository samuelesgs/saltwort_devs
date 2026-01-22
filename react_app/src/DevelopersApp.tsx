import { RouterProvider } from "react-router"
import { appRoutes } from "./app.routes"

export const DevelopersApp = () => {
  return (
    <RouterProvider
      router={appRoutes}>
    </RouterProvider>
  )
}
