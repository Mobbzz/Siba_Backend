import { useEffect, useState } from "react"
import axios from 'axios'
import { Product } from "../components/Product"
import { API_BASE_URL } from "../Components/utils"


function Shop() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(`${API_BASE_URL}/api/products`)
            // console.log(res)
            setProducts(res.data.data)
        }
        getProducts()

    }, [])

  return (
    <div>
        <h1 className="home-title">
        Våra Produkter
      </h1>


    <div className="shop">

        {products.map(product => (
            <Product key={product._id} product={product} />

            

        ))
    
    }
        
    </div>

    </div>
  )
}
export default Shop