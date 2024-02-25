import './App.css'
import FirstPage from './components/firstPage/FirstPage';
import Header from './components/header/Header'
import Layout from './components/Layout';
import Paint from './components/paint/Paint'
import SignatureCanvas from './components/SignatureCanvas'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    // path: "",
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "/signaturePad",
        element: <SignatureCanvas />,
        // loader: teamLoader,
      },
    ],
  },
]);

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
