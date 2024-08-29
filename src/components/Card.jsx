import { useState } from "react"
import '../styles/card.css'

export const Card = ({image, title, description, price, addHandler, removeHandler}) => {
    const [added, setAdded] = useState(false)
    const removeClick = (e) => {
        removeHandler()
        setAdded(false)
    }
    const addClick = () => {
        addHandler()
        setAdded(true)
    }

    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                {added 
                    ? <button
                        type="button"
                        className="button-remove"
                        onClick={removeClick}
                    >
                        Remove from Cart
                    </button>
                    : <button
                        type="button"
                        className="button-add"
                        onClick={addClick}
                    >
                        Add to Cart
                    </button>
                }
            </div>

        </div>
    )
}
