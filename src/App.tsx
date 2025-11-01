import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "@/components/layout/Layout.tsx";
import HomePage from "@/components/pages/HomePage.tsx";
import ProductsPage from "@/components/pages/ProductsPage.tsx";
import ProductPage from "@/components/pages/ProductPage.tsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                <Route index element={<HomePage />}/>
                <Route path="products">
                  <Route index element={<ProductsPage />}/>
                  <Route path=":productId" element={<ProductPage />}/>
                </Route>
                </Route>
            </Routes>
        </BrowserRouter>

    </>
  )
}
export default App
