import { Routes,Route, Navigate } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { CatalogPage } from "./purchases/CatalogPage"
import { CartPage } from "./purchases/CartPage"
import { ProductsProvider } from "./context/ProductsProvider"
import { CartProvider } from "./context/CartProvider"

export const CartApp = () => {
  return (
    <ProductsProvider>
        <CartProvider>          
          <NavBar></NavBar>
          <div className="container">
              <Routes>
                  <Route path="/" element={<CatalogPage></CatalogPage>}></Route>
                  <Route path="/cart" element={<CartPage></CartPage>}></Route>
                  <Route path="/*" element={ <Navigate to='/' /> }></Route> 
              </Routes>
          </div>
        </CartProvider>
    </ProductsProvider>
  )
}
