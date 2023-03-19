import { createBrowserRouter } from "react-router-dom";
import SearchPage from "./pages/search";
import MainPage from "./pages/main";
import Home from "./pages/home";

export const router = [
  {
    id: 0,
    path: '/',
    label: 'home',
    element: <Home />,
    children: [
      {
        id: 0,
        path: '/',
        label: 'main',
        element: <MainPage />
      },
      {
        id: 1,
        path: '/results',
        label: 'search',
        element: <SearchPage />
      }
    ]
  },
]

export const routers = createBrowserRouter(
  router.map(router => {
    return {
      path: router.path,
      element: router.element,
      children: router.children
    }
  })
)