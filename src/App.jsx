
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from './pages/Aboutus';
import OurExpertize from './pages/OurExpertize';
import OurExperience from './pages/OurExperience';
import Products from './pages/OurProducts';
import Jwelleryscale from './pages/Jwelleryscale';
import Tabletopscale from './pages/Tabletopscale';
import Pricecomputingscale from './pages/Pricecomputingscale';
import Platform from './pages/Platform';
import Heavydutyscale from './pages/Heavydutyscale';
import Weighbridge from './pages/Weighbridge';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AboutUs />,
    },
    {
      path: "/Products",
      element: <Products />,
      children:[
        {
          path: "/Products/jewellery-scale",
          element: <Jwelleryscale />,
        },
        {
          path: "/Products/table-top-scale",
          element: <Tabletopscale />,
        },
        {
          path: "/Products/price-computing-scale",
          element: <Pricecomputingscale />,
        },
        {
          path: "/Products/Platform-scale",
          element: <Platform />,
        },
        {
          path: "/Products/heavy-duty-scale",
          element: <Heavydutyscale />,
        },
        {
          path: "/Products/wieghbridge",
          element: <Weighbridge />,
        }
      ]
    },
    {
      path: "/ourexpertize",
      element: <OurExpertize />,
    },
    {
      path: "/ourexperience",
      element: <OurExperience />,
    },
  ]);
  return (
    <>
   
     <RouterProvider router={router} />
    </>
  )
}

export default App
