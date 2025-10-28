import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./layout.tsx";
import Contents from "./components/notes/contents.tsx";
const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children : [
            {
                index:true,
                element:(
                    <Contents/>
                )
            }
        ]
    }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
