import db from "../../config/db"
import { useNavigate } from "react-router-dom"

//Components
import ProductCarousel from "../../components/ProductCarousel"

export default function Home() {

    return (
        <div id="content" className="py-3">

            <div className="container bg-md-light p-2 px-3 p-md-3 rounded-4">
                <h5>Todos os produtos</h5>
                <ProductCarousel products={db.products} itemsNumber={0} />
            </div>

        </div>
    )

}