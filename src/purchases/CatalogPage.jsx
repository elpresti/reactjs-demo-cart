import { useContext } from "react"
import { Card } from '../components/Card'
import { ProductsContext } from "../context/ProductsContext"
import { CartContext } from "../context/CartContext"

export const CatalogPage = () => {

    const { products } = useContext( ProductsContext )

    const { addPurchase, removePurchase } = useContext(CartContext)

    const addHandler = (purchase) => {
        addPurchase(purchase)
    }

    const removeHandler = (id) => {
        removePurchase(id)
    }

    return (
        <>
            <h1>Products Catalog:</h1>
            <hr />
            {products.map(product => (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    addHandler={() => addHandler(product)}
                    removeHandler={() => removeHandler(product.id)}
                ></Card>
            ))}
        </>
    )
}
