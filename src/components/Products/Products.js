import ProductsHeader from '../../components/Products/Header/ProductsHeader'
import ProductsDisplay from '../../components/Products/Display/ProductsDisplay'

export default function Products() {

    return (
        <div className="my-6">
            {/* PRODUCTS HEADER COMPONENT */}
            <ProductsHeader />
 

            {/* PRODUCTS DISPLAY COMPONENT */}
            <ProductsDisplay />


        </div>
    )
}