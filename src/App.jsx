import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import LayOut from "./componants/shared/LayOut";





function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route  path='/' element={<LayOut/>} />
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
