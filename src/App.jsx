import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./componants/shared/RootLayout";
import DashBoard from "./componants/DashBoard";
import Products from "./componants/Products";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
         <Route path="/" element={<RootLayout/>}>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/products" element={<Products/>}/>
        </Route>
      </>
    )
  )

  return (
    <>
       <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
